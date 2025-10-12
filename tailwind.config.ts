import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Core Background Colors */
        'background-primary': 'var(--color-background-primary)',
        'background-secondary': 'var(--color-background-secondary)',
        'surface-primary': 'var(--color-surface-primary)',
        'surface-secondary': 'var(--color-surface-secondary)',

        /* Interactive Colors */
        'interactive-primary': 'var(--color-interactive-primary)',
        'interactive-secondary': 'var(--color-interactive-secondary)',
        'interactive-tertiary': 'var(--color-interactive-tertiary)',

        /* Text Colors */
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',

        /* Border Colors */
        'border-primary': 'var(--color-border-primary)',
        'border-secondary': 'var(--color-border-secondary)',
        'border-subtle': 'var(--color-border-subtle)',
      },
    },
  },
  plugins: [],
}
export default config
