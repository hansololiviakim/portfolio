import type { Metadata } from 'next'
import Head from 'next/head'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

// * metadata: info
export const metadata: Metadata = {
  title: '김한솔 | 포트폴리오',
  description: '프론트엔드 개발자에서 엔지니어로 성장해나가는 김한솔입니다.',
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
  openGraph: {
    title: '김한솔 | 포트폴리오',
    description: '프론트엔드 개발자에서 엔지니어로 성장해나가는 김한솔입니다.',
    url: 'https://hansololiviakim.com',
    siteName: '김한솔 | 포트폴리오',
    images: [
      {
        url: '/og-img.jpg',
        width: 1200,
        height: 630,
        alt: '김한솔 포트폴리오',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  generator: 'Next.js',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

//  * metadata: viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
  interactiveWidget: 'overlays-content',
}

// * fonts
const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=1200, user-scalable=yes" />
      </Head>
      <body
        className={clsx(
          'min-h-dvh min-w-dvw antialiased',
          'bg-linear-120 from-[#CFE0FF] to-[#F5F8FF]',
          pretendard.variable,
        )}
      >
        {children}
      </body>

      <Analytics />
    </html>
  )
}
