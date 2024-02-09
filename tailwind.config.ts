import type { Config } from 'tailwindcss'
import { generateUtilities } from './src/utils/generateUtilities'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gap: generateUtilities(100),
      columnGap: generateUtilities(100),
      rowGap: generateUtilities(100),
      inset: generateUtilities(200),
      width: generateUtilities(1300),
      minWidth: generateUtilities(1300),
      maxWidth: generateUtilities(1300),
      height: generateUtilities(1300),
      minHeight: generateUtilities(1300),
      maxHeight: generateUtilities(1300),
      margin: generateUtilities(200),
      marginTop: generateUtilities(200),
      marginRight: generateUtilities(200),
      marginBottom: generateUtilities(200),
      marginLeft: generateUtilities(200),
      padding: generateUtilities(200),
      paddingTop: generateUtilities(200),
      paddingRight: generateUtilities(200),
      paddingBottom: generateUtilities(200),
      paddingLeft: generateUtilities(200),
      border: generateUtilities(20),
      borderWidth: generateUtilities(20),
      borderRadius: generateUtilities(20),
      fontSize: generateUtilities(70),
      letterSpacing: generateUtilities(70),
      lineHeight: generateUtilities(70),
      fontFamily: {
        pre: ['var(--font-pretendard)'],
        bai: ['var(--font-bai-jamjuree)'],
      },
      colors: {
        bl: '#161513',
        re: '#E84D35',
        gr: '#BDB8AD',
        bg: '#F2F1EF',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
