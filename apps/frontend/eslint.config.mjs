// ESLint flat config. Next.js 16 removed `next lint`; this runs the same Next.js rules
// (Core Web Vitals + TypeScript) through the ESLint CLI.
import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] },
]

export default config
