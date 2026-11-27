// Shared by the careers page, the application form (browser) and the application server action.
// Keep it free of React and of anything secret: the browser bundle imports it.

/** Open roles, in the order the careers page lists them. `subject` is the English title used in emails. */
export const CAREER_ROLES = [
  { id: 'data-quality-intern', subject: 'Data Quality Intern, Answer Verification' },
  { id: 'community-growth', subject: 'Community and Growth Intern' },
  { id: 'business-development', subject: 'Business Development Manager, Municipal Partnerships' },
  { id: 'ai-rag-engineer', subject: 'AI/RAG Engineer' },
  { id: 'full-stack-engineer', subject: 'Full-Stack Engineer, Mobile and Web' },
  { id: 'privacy-security-accessibility', subject: 'Privacy, Security and Accessibility Advisor' },
] as const

export type CareerRoleId = (typeof CAREER_ROLES)[number]['id'] | 'general'

/** For people who don't see their role; offered last in the form */
export const GENERAL_ROLE = { id: 'general', subject: 'General application' } as const

export function roleSubject(id: string): string | null {
  if (id === GENERAL_ROLE.id) return GENERAL_ROLE.subject
  return CAREER_ROLES.find(role => role.id === id)?.subject ?? null
}

// Uploads. Vercel caps a request at 4.5 MB, so two files of up to 2 MB each plus the text fields fit.
export const MAX_FILE_BYTES = 2 * 1024 * 1024
export const ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx'] as const
/** For the file input's accept attribute */
export const ACCEPT_ATTRIBUTE = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'

export type DocumentKind = 'pdf' | 'doc' | 'docx'

/** The extension of a file name, lower case, with the dot ('' if none) */
export function extensionOf(name: string): string {
  const dot = name.lastIndexOf('.')
  return dot === -1 ? '' : name.slice(dot).toLowerCase()
}

/**
 * What a file really is, from its first bytes, not its name: PDF starts with "%PDF-", DOCX is a ZIP
 * ("PK\x03\x04"), and the old Word format is an OLE compound file (D0 CF 11 E0 A1 B1 1A E1).
 * The extension must agree, so a renamed file is refused.
 */
export function detectDocument(bytes: Uint8Array, fileName: string): DocumentKind | null {
  const starts = (sig: number[]) => sig.every((b, i) => bytes[i] === b)
  const ext = extensionOf(fileName)
  if (ext === '.pdf' && starts([0x25, 0x50, 0x44, 0x46, 0x2d])) return 'pdf'
  if (ext === '.docx' && starts([0x50, 0x4b, 0x03, 0x04])) return 'docx'
  if (ext === '.doc' && starts([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1])) return 'doc'
  return null
}

/**
 * A safe attachment name built from the applicant's name, never from the uploaded file name
 * (which could carry header tricks or someone else's name): "Resume - Jane Doe.pdf".
 */
export function attachmentName(label: string, applicant: string, kind: DocumentKind): string {
  const clean = applicant
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N} .'-]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60)
  return `${label}${clean ? ` - ${clean}` : ''}.${kind}`
}

/** Optional link (LinkedIn, portfolio): https only, so it's safe to put in an email */
export function isSafeLink(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' && url.hostname.includes('.')
  } catch {
    return false
  }
}
