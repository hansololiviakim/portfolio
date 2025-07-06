import { Suspense } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ImgLogo } from '@/assets/general'
import { Home, Projects } from '@/app/components'

export default function MainPage() {
  return (
    <main className="mx-auto max-w-7xl pt-10" id="home">
      {/* navigation */}
      <nav
        className={clsx(
          'h-16 rounded-full bg-white/35 px-8 backdrop-blur-md',
          'flex items-center justify-between',
        )}
      >
        <Image src={ImgLogo} alt="logo" width={50} height={50} priority />
        <ul className="flex gap-4 font-medium text-[#30466B]">
          <li>
            <Link href="#home" className="transition-colors hover:text-[#1a2e4a]">
              Home
            </Link>
          </li>
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
      <Home />
      {/* TODO: About UI 확정 후 구현 */}
      {/* <About /> */}
      <Suspense fallback={<div className="h-dvh">Loading projects...</div>}>
        <Projects />
      </Suspense>

      {/* footer */}
      <footer className="flex-row-center h-20 w-full border-t border-gray-300 font-light text-gray-400">
        © 2025 Hansol Kim all rights reserved.
      </footer>
    </main>
  )
}
