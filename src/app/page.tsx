import { Suspense } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ImgLogo } from '@/assets/general'
import { Home, About, Projects } from '@/app/components'

export default function MainPage() {
  return (
    <main className="mx-auto max-w-7xl pt-10" id="home">
      {/* navigation */}
      <nav
        className={clsx(
          'mx-4 h-16 rounded-full bg-white/35 px-8 backdrop-blur-md',
          'flex items-center justify-between',
        )}
      >
        <Image src={ImgLogo} alt="logo" width={50} height={50} priority />
        <ul className="flex gap-4 font-medium text-[#30466B]">
          <li>
            <Link href="#about" className="transition-colors hover:text-[#1a2e4a]">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="transition-colors hover:text-[#1a2e4a]">
              Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* contents */}
      <Suspense fallback={<div className="h-dvh" />}>
        <Home />
      </Suspense>
      <About />
      <Suspense fallback={<div className="h-dvh" />}>
        <Projects />
      </Suspense>

      {/* footer */}
      <footer className="flex-row-center mt-4 h-20 w-full border-t border-gray-300 font-light text-gray-400">
        © 2025 Hansol Kim all rights reserved.
      </footer>
    </main>
  )
}
