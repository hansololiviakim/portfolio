import { Suspense } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ImgLogo } from '@/assets/general'
import { Home, About, Projects } from '@/app/components'

export default function MainPage() {
  return (
    <main className="mx-auto max-w-7xl pt-10">
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
      <About />
      <Suspense fallback={<div className="h-dvh">Loading projects...</div>}>
        <Projects />
      </Suspense>
    </main>
  )
}
