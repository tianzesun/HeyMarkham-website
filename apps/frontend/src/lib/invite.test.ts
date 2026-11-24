// Run with `pnpm test` (Node's built-in test runner; Node 22.18+ strips the types)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { inviteDeepLink, sanitizeInviteCode } from './invite.ts';

test('a code as the API makes it', () => {
  assert.equal(sanitizeInviteCode('K7Q2MXRP'), 'K7Q2MXRP');
});

test('as typed or shared: lower case, spaces, dashes', () => {
  assert.equal(sanitizeInviteCode('k7q2-mxrp'), 'K7Q2MXRP');
  assert.equal(sanitizeInviteCode(' k7q2 mxrp '), 'K7Q2MXRP');
});

test('characters the API never uses are refused, not cleaned up', () => {
  for (const raw of ['K7Q2MXR0', 'K7Q2MXRO', 'K7Q2MXR1', 'K7Q2MXRI', 'K7Q2MXRL', '<b>HI</b>', 'K7Q2%20X', 'ÄBCDEFGH']) {
    assert.equal(sanitizeInviteCode(raw), null, raw);
  }
});

test('too short, too long, or not a string', () => {
  assert.equal(sanitizeInviteCode('ABC'), null);
  assert.equal(sanitizeInviteCode('A'.repeat(17)), null);
  assert.equal(sanitizeInviteCode('A'.repeat(65)), null);
  assert.equal(sanitizeInviteCode(undefined), null);
  assert.equal(sanitizeInviteCode(['K7Q2MXRP']), null);
});

test('the link that opens the app', () => {
  assert.equal(inviteDeepLink('K7Q2MXRP'), 'heymarkham://invite/K7Q2MXRP');
});
