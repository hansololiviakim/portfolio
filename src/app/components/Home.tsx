'use client'

import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { ImgProfile } from '@/assets/general'
import { ImgControl, ImgLp, ImgSparkle, ImgTwinkle } from '@/assets/elements'
import { ImgBlog, ImgGithub, ImgMail, ImgPlay, ImgPause, ImgResume } from '@/assets/icons'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true)
  const socialButtons = [
    {
      icon: ImgGithub,
      alt: 'github icon',
      isPlayButton: false,
      link: 'https://github.com/hansololiviakim',
    },
    {
      icon: ImgResume,
      alt: 'resume icon',
      isPlayButton: false,
      link: 'https://www.figma.com/design/x6eS24Q8A4AGDWikkq7diw/%EA%B9%80%ED%95%9C%EC%86%94-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0-1&t=V4L6DTPBZ5JEYRd2-1',
    },
    { icon: ImgPlay, alt: 'play icon', isPlayButton: true, link: '#' },
    { icon: ImgBlog, alt: 'blog icon', isPlayButton: false, link: 'https://oliviakim.tistory.com' },
    {
      icon: ImgMail,
      alt: 'mail icon',
      isPlayButton: false,
      link: 'mailto:dev.hansolkim@gmail.com',
    },
  ]

  return (
    <section>
      <div className="main-content">
        <section className={clsx('h-[calc(100dvh-6.5rem)]', 'flex-row-center gap-32')} id="home">
          {/* lp */}
          <div
            className={clsx(
              'flex-row-center relative h-112 w-112 rounded-full',
              'bg-linear-to-b from-[#D7DBF3] to-[#BBC4F4]',
              'shadow-[0_0_20px_0_rgba(0,0,0,0.25)]',
            )}
          >
            <Image
              src={ImgTwinkle}
              alt="twinkle"
              width={100}
              height={100}
              className="twinkle-updown absolute -top-20 -left-20"
            />
            <Image
              src={ImgLp}
              alt="lp"
              width={400}
              height={400}
              priority
              className={clsx('animate-spin-slow', !isPlaying && 'animate-play-pause')}
            />
            <Image
              src={ImgProfile}
              alt="profile"
              width={200}
              height={200}
              priority
              className="position-centered-all absolute top-1/2 left-1/2"
            />
            <div
              className="position-centered-y absolute top-1/2 -left-24 h-140 w-160 border-4 border-solid border-white/90"
              style={{
                borderRadius: '50%',
                transform: 'rotate(-35deg) scaleY(0.3)',
                transformOrigin: 'center',
              }}
            />
          </div>
          <div>
            {/* introduction */}
            <h2 className="fade-slide-up mb-2 flex items-center gap-2">
              <Image
                src={ImgSparkle}
                alt="sparkle"
                width={24}
                height={24}
                priority
                className="fade-in h-6 w-6 object-contain"
              />
              <span className="fade-in text-2xl font-medium text-[#767676]">
                Frontend Developer
              </span>
            </h2>
            <h1 className="fade-slide-up mb-8 text-5xl font-semibold text-[#30466B]">
              Hansol Olivia Kim
            </h1>
            <p className="fade-slide-up text-lg text-[#767676]">
              프론트엔드 개발자에서 한 단계 더 성장하여,
              <br />
              깊이 있는 엔지니어로 성장하고자 노력하는 김한솔입니다.
              <br />
              사용자 경험은 물론, 동료 개발자들의 경험 또한
              <br />
              긍정적일 수 있도록 고민하며 개발하는 것을 좋아합니다.
            </p>

            {/* progress bar */}
            <div className="relative mt-15">
              <div
                id="progress whole bar"
                className="relative h-3 w-100 rounded-full bg-white shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
              >
                <span className="absolute -top-7 left-0 text-sm font-light text-[#AFAFAF]">
                  Developer
                </span>
                <span className="absolute -top-7 right-0 text-sm font-light text-[#AFAFAF]">
                  Engineer
                </span>
                <div
                  id="progress percentage bar"
                  className={clsx(
                    'absolute top-0 h-3 w-1/4 rounded-full',
                    'animate-fill-progress bg-linear-to-r from-[#D7DBF3] to-[#BBC4F4]',
                    !isPlaying && 'animate-play-pause',
                  )}
                />
                <div
                  id="progress circle"
                  className={clsx(
                    'position-centered-y absolute top-1/2 left-[calc(25%-1.5rem)] h-6 w-6 rounded-full bg-white shadow-[0_0_2px_2px_rgba(0,0,0,0.1)]',
                    'animate-move-circle',
                    !isPlaying && 'animate-play-pause',
                  )}
                />
              </div>
              <ul className="mt-8 flex items-center justify-between gap-4">
                {socialButtons.map((button, idx) => (
                  <li
                    key={idx}
                    className={clsx('relative', button.isPlayButton ? 'h-20 w-20' : 'h-14 w-14')}
                  >
                    {button.isPlayButton ? (
                      <button
                        type="button"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                        onClick={() => setIsPlaying((prev) => !prev)}
                        className="relative flex h-20 w-20 cursor-pointer items-center justify-center border-none bg-transparent p-0"
                      >
                        <Image
                          src={ImgControl}
                          alt="control buttons background"
                          width={80}
                          height={80}
                        />
                        <Image
                          src={isPlaying ? ImgPause : ImgPlay}
                          alt={isPlaying ? 'pause icon' : 'play icon'}
                          width={44}
                          height={44}
                          style={{ position: 'absolute', top: 16, left: 18 }}
                        />
                      </button>
                    ) : (
                      <Link
                        href={button.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <Image
                          src={ImgControl}
                          alt="control buttons background"
                          width={56}
                          height={56}
                        />
                        <Image
                          src={button.icon}
                          alt={button.alt}
                          width={32}
                          height={32}
                          className="position-centered-x absolute top-2.5 left-1/2"
                        />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Image
                src={ImgTwinkle}
                alt="twinkle"
                width={100}
                height={100}
                className="twinkle-updown absolute -right-30 -bottom-20"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
