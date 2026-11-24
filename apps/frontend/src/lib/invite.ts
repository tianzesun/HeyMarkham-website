// Invite links (/i/<code>): a resident's invite code, as the Hey Markham API makes them
// (app/services/invites.py in the HeyMarkham repo): eight characters from an alphabet with
// no 0/O or 1/I/L, so they can be read out or typed without mistakes.

/** The characters a code can have (the API's ALPHABET), and how long one can be. */
const CODE = /^[2-9A-HJKMNP-Z]{4,16}$/

/** The app's own link scheme (app.json "scheme"); the app saves the code and sends it after sign-in. */
export const APP_SCHEME = 'heymarkham'

/**
 * The code from a link, as typed or shared: any case, with spaces or dashes. Anything
 * else (wrong characters, too short or long) is null, and is never shown on the page.
 */
export function sanitizeInviteCode(raw: unknown): string | null {
  if (typeof raw !== 'string' || raw.length > 64) return null
  const code = raw.replace(/[\s-]/g, '').toUpperCase()
  return CODE.test(code) ? code : null
}

/** Opens the app on its invite screen with the code: heymarkham://invite/<CODE>. */
export function inviteDeepLink(code: string): string {
  return `${APP_SCHEME}://invite/${code}`
}
