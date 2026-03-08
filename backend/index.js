/**
 * HESTIA Backend — Google Sheets Integration
 *
 * Receives partner form submissions from the React frontend and
 * appends each one as a new row in a Google Sheet.
 *
 * Required environment variables (see .env.example):
 *   GOOGLE_SERVICE_ACCOUNT_KEY_PATH   Path to your service account JSON key file
 *   GOOGLE_SHEET_ID                   The ID from your Google Sheet URL
 *   PORT                              (optional) Server port, defaults to 3001
 *   FRONTEND_ORIGIN                   (optional) CORS allowed origin, defaults to localhost:5173
 */

'use strict';

require('dotenv').config();

const express    = require('express');
const cors       = require('cors');
const { google } = require('googleapis');
const path       = require('path');
const fs         = require('fs');

// ─── Config ──────────────────────────────────────────────────────────────────

const PORT            = process.env.PORT || 3001;
const SHEET_ID        = process.env.GOOGLE_SHEET_ID;
const KEY_FILE_PATH   = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

// Validate required env vars at startup so we fail fast with a clear message.
if (!SHEET_ID) {
  console.error('[startup] Missing required env var: GOOGLE_SHEET_ID');
  process.exit(1);
}
if (!KEY_FILE_PATH) {
  console.error('[startup] Missing required env var: GOOGLE_SERVICE_ACCOUNT_KEY_PATH');
  process.exit(1);
}
const resolvedKeyPath = path.resolve(KEY_FILE_PATH);
if (!fs.existsSync(resolvedKeyPath)) {
  console.error(`[startup] Service account key file not found at: ${resolvedKeyPath}`);
  process.exit(1);
}

// ─── Google Sheets Auth ───────────────────────────────────────────────────────

/**
 * Returns an authenticated Google Sheets client.
 * Uses a service account JSON key for server-to-server auth — no OAuth flow needed.
 */
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: resolvedKeyPath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

// ─── Express App ──────────────────────────────────────────────────────────────

const app = express();

app.use(express.json());
app.use(cors({ origin: FRONTEND_ORIGIN }));

// Health check — useful for confirming the server is running.
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

/**
 * POST /api/partner-submission
 *
 * Expected JSON body:
 * {
 *   orgName:       string,
 *   contactPerson: string,
 *   partnerType:   string,
 *   district:      string,
 *   email:         string,
 *   message:       string   (optional)
 * }
 *
 * Appends a row to the Google Sheet with a timestamp prepended.
 * Column order matches the header row: Timestamp | Org Name | Contact Person |
 *   Partner Type | District/City | Email | Message
 */
app.post('/api/partner-submission', async (req, res) => {
  const { orgName, contactPerson, partnerType, district, email, message } = req.body;

  // Basic server-side validation
  const missing = ['orgName', 'contactPerson', 'partnerType', 'district', 'email'].filter(
    (field) => !req.body[field] || String(req.body[field]).trim() === ''
  );
  if (missing.length > 0) {
    return res.status(400).json({
      success: false,
      error: `Missing required fields: ${missing.join(', ')}`,
    });
  }

  // ISO timestamp in the sheet so each row is self-documenting.
  const timestamp = new Date().toISOString();

  const row = [
    timestamp,
    orgName.trim(),
    contactPerson.trim(),
    partnerType.trim(),
    district.trim(),
    email.trim().toLowerCase(),
    (message || '').trim(),
  ];

  try {
    const sheets = await getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      // 'Sheet1' is the default tab name — update this if your tab is named differently.
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });

    console.log(`[submission] Appended row for ${email} at ${timestamp}`);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[submission] Google Sheets error:', err.message);

    return res.status(500).json({
      success: false,
      error: 'Failed to record submission. Please try again.',
    });
  }
});

async function testAppend() {
  const auth = new google.auth.GoogleAuth({
    keyFile: resolvedKeyPath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const testRow = [
    new Date().toISOString(),
    'Test Org',
    'Test Person',
    'Test Type',
    'Test District',
    'test@example.com',
    'This is a test submission',
  ];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:G', // change if your tab name is different
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [testRow] },
    });
    console.log('✅ Test row appended successfully!');
  } catch (err) {
    console.error('❌ Google Sheets error:', err.message);
  }
}

// ─── Start ───────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`HESTIA backend running on http://localhost:${PORT}`);
  console.log(`  Sheet ID : ${SHEET_ID}`);
  console.log(`  Key file : ${resolvedKeyPath}`);
  console.log(`  CORS     : ${FRONTEND_ORIGIN}`);
});
