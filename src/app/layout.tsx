import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '김한솔 | 포트폴리오',
  description: 'UX를 생각하는 프론트엔드 개발자 김한솔의 포트폴리오입니다.',
  applicationName: '김한솔 | 포트폴리오',
  keywords: [
    'frontend',
    'developer',
    'portfolio',
    'frontend portfolio',
    'developer portfolio',
    'frontend developer portfolio',
    '프론트엔드',
    '개발자',
    '웹 개발자',
    '포트폴리오',
    '웹포트폴리오',
    '프론트엔드 포트폴리오',
    '개발자 포트폴리오',
    '김한솔 포트폴리오',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
  interactiveWidget: 'overlays-content',
}

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body className={`${pretendard.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
