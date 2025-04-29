import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        gray: {
          200: '#e5e7eb',
          800: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)'],
      },
      spacing: {
        // Özel boşluk değerlerinizi buraya ekleyebilirsiniz
      },
      borderRadius: {
        // Özel border radius değerlerinizi buraya ekleyebilirsiniz
      },
    },
  },
  plugins: [],
}

export default config 