'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

/** Copies an invite code, and says so for a moment (and to screen readers). */
export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // No clipboard (an old browser, or not allowed): the code is on screen to type
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
    >
      {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy code'}</span>
    </button>
  )
}
