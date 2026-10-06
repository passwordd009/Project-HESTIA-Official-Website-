/**
 * Project HESTIA backend
 *
 *   POST /api/partner-inquiry     Partners page "Become a partner" form  → email to the team
 *   POST /api/district-inquiry    Districts page "Connect your district" → email to the team
 *   POST /api/donations/checkout  Donate page → Stripe Checkout session (see stripe.js)
 *
 * Environment variables: see .env.example.
 */

'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const { createCheckoutSession, isStripeConfigured } = require('./stripe');

const PORT = process.env.PORT || 3001;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = (process.env.EMAIL_TO || 'elijah@projecthestia.org,jalen@projecthestia.org,projecthestia100@gmail.com')
  .split(',')
  .map((address) => address.trim())
  .filter(Boolean);

for (const [name, value] of Object.entries({ RESEND_API_KEY, EMAIL_FROM })) {
  if (!value) {
    console.error(`[startup] Missing required env var: ${name}`);
    process.exit(1);
  }
}

const resend = new Resend(RESEND_API_KEY);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 5000;

const clean = (value) => String(value ?? '').trim().slice(0, MAX_FIELD_LENGTH);

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * Validates the submitted fields and returns { fields } or { error }.
 * `spec` maps each field to { label, required?, list? } in the order they appear in the email.
 */
function readFields(body, spec) {
  const fields = {};
  const missing = [];
  for (const [key, { label, required, list }] of Object.entries(spec)) {
    const value = list
      ? (Array.isArray(body?.[key]) ? body[key] : []).map(clean).filter(Boolean).join(', ')
      : clean(body?.[key]);
    if (required && !value) missing.push(label);
    fields[key] = value;
  }
  if (missing.length) return { error: `Please fill in: ${missing.join(', ')}.` };
  if (!EMAIL_PATTERN.test(fields.email)) return { error: 'Please enter a valid email address.' };
  return { fields };
}

async function sendInquiryEmail({ subject, heading, spec, fields }) {
  const rows = Object.entries(spec).map(([key, { label }]) => [label, fields[key] || '—']);

  const text = `${heading}\n\n${rows.map(([label, value]) => `${label}: ${value}`).join('\n')}`;
  const html = `
    <h2 style="font-family:Georgia,serif;color:#1C0D06">${escapeHtml(heading)}</h2>
    <table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:15px;color:#1C0D06">
      ${rows
        .map(([label, value]) => `<tr><td style="font-weight:bold;vertical-align:top;border-bottom:1px solid #E6D8C6">${escapeHtml(label)}</td><td style="border-bottom:1px solid #E6D8C6;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:13px;color:#5E4A3E">Reply to this email to respond directly to the sender.</p>`;

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo: fields.email,
    subject,
    text,
    html,
  });
  if (error) throw new Error(error.message);
}

function inquiryRoute({ spec, buildSubject, heading }) {
  return async (req, res) => {
    const { fields, error } = readFields(req.body, spec);
    if (error) return res.status(400).json({ success: false, error });

    try {
      await sendInquiryEmail({ subject: buildSubject(fields), heading, spec, fields });
      console.log(`[inquiry] ${heading} from ${fields.email}`);
      return res.json({ success: true });
    } catch (err) {
      console.error(`[inquiry] Email failed: ${err.message}`);
      return res.status(502).json({ success: false, error: 'We could not send your message right now. Please try again in a moment.' });
    }
  };
}

// ─── App ──────────────────────────────────────────────────────────────────────

const app = express();
app.use(express.json({ limit: '50kb' }));
app.use(cors({ origin: FRONTEND_ORIGIN }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PARTNER_FIELDS = {
  orgName: { label: 'Organization', required: true },
  contactName: { label: 'Contact name', required: true },
  role: { label: 'Title or role' },
  email: { label: 'Email', required: true },
  phone: { label: 'Phone' },
  partnerType: { label: 'Partner type', required: true },
  neighborhood: { label: 'Neighborhood' },
  interests: { label: 'Would like to', list: true },
  message: { label: 'Message' },
};

const DISTRICT_FIELDS = {
  name: { label: 'Name', required: true },
  email: { label: 'Email', required: true },
  connectingAs: { label: 'Connecting as', required: true },
  area: { label: 'Neighborhood or district', required: true },
  message: { label: 'Message' },
};

app.post('/api/partner-inquiry', inquiryRoute({
  spec: PARTNER_FIELDS,
  heading: 'New partner inquiry',
  buildSubject: (f) => `Partner inquiry: ${f.orgName} (${f.partnerType})`,
}));

app.post('/api/district-inquiry', inquiryRoute({
  spec: DISTRICT_FIELDS,
  heading: 'New district request',
  buildSubject: (f) => `District request: ${f.area} — ${f.name}`,
}));

const FREQUENCIES = new Set(['once', 'monthly']);
const DESIGNATIONS = new Set(['need', 'event', 'programs']);

app.post('/api/donations/checkout', async (req, res) => {
  const amount = Number(req.body?.amount);
  const { frequency, designation } = req.body || {};

  if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
    return res.status(400).json({ error: 'Please choose an amount between $1 and $100,000.' });
  }
  if (!FREQUENCIES.has(frequency) || !DESIGNATIONS.has(designation)) {
    return res.status(400).json({ error: 'Please choose how often to give and where your gift should go.' });
  }
  if (!isStripeConfigured()) {
    return res.status(501).json({ error: 'Online donations are not live yet. Please check back soon.' });
  }

  try {
    const url = await createCheckoutSession({ amount: Math.round(amount * 100) / 100, frequency, designation });
    return res.json({ url });
  } catch (err) {
    console.error(`[donations] Checkout failed: ${err.message}`);
    return res.status(502).json({ error: 'We could not start checkout. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`HESTIA backend running on http://localhost:${PORT}`);
  console.log(`  Emails to : ${EMAIL_TO.join(', ')}`);
  console.log(`  CORS      : ${FRONTEND_ORIGIN}`);
  console.log(`  Stripe    : ${isStripeConfigured() ? 'configured' : 'not configured (donations return 501)'}`);
});
