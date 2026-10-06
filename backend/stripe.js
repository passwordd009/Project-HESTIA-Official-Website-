/**
 * Stripe donations — placeholder for the upcoming Stripe integration.
 *
 * The Donate page already POSTs { amount, frequency: 'once' | 'monthly', designation } to
 * /api/donations/checkout and redirects the browser to the `url` this module returns.
 * After payment, Stripe should send donors to DONATION_SUCCESS_URL, which the frontend
 * serves at /donate/thank-you?amount=…&frequency=…&designation=… (built by successUrl below).
 *
 * To finish: `npm install stripe`, then in createCheckoutSession create a Checkout Session
 * (mode 'payment' for one-time gifts, 'subscription' with a monthly recurring price for
 * monthly gifts), using successUrl(...) and DONATION_CANCEL_URL, and return session.url.
 */

'use strict';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const DONATION_SUCCESS_URL = process.env.DONATION_SUCCESS_URL || 'http://localhost:5173/donate/thank-you';

function isStripeConfigured() {
  return Boolean(STRIPE_SECRET_KEY);
}

function successUrl({ amount, frequency, designation }) {
  const params = new URLSearchParams({ amount: String(amount), frequency, designation });
  return `${DONATION_SUCCESS_URL}?${params}`;
}

async function createCheckoutSession() {
  throw new Error('Stripe Checkout is not implemented yet (see backend/stripe.js).');
}

module.exports = { createCheckoutSession, isStripeConfigured, successUrl };
