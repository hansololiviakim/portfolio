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
        <section
          className={clsx(
            'flex flex-col items-center gap-14',
            'mt-[3rem]',
            'sm:mt-[6rem]',
            'lg:mt-0 lg:h-[calc(100dvh-6.5rem)] lg:flex-row lg:justify-center lg:gap-32',
          )}
          id="home"
        >
          {/* lp */}
          <div
            className={clsx(
              'flex-row-center relative rounded-full',
              'bg-linear-to-b from-[#D7DBF3] to-[#BBC4F4]',
              'shadow-[0_0_20px_0_rgba(0,0,0,0.25)]',
              'h-72 w-72',
              'sm:h-90 sm:w-90',
              'lg:h-112 lg:w-112',
            )}
          >
            <Image
              src={ImgTwinkle}
              alt="twinkle"
              width={100}
              height={100}
              className={clsx(
                'twinkle-updown absolute',
                '-top-8 -left-8',
                'lg:-top-20 lg:-left-20',
              )}
            />
            <Image
              src={ImgTwinkle}
              alt="twinkle"
              width={100}
              height={100}
              className={clsx(
                'twinkle-updown absolute',
                '-right-8 -bottom-8',
                'lg:-right-20 lg:-bottom-20',
              )}
            />
            <Image
              src={ImgLp}
              alt="lp"
              width={400}
              height={400}
              priority
              className={clsx(
                'animate-spin-slow',
                'h-60 w-60',
                'sm:h-80 sm:w-80',
                'lg:h-100 lg:w-100',
                !isPlaying && 'animate-play-pause',
              )}
            />
            <Image
              src={ImgProfile}
              alt="profile"
              width={200}
              height={200}
              priority
              className={clsx(
                'position-centered-all absolute',
                'top-1/2 left-1/2',
                'h-32 w-32',
                'sm:h-40 sm:w-40',
                'lg:h-50 lg:w-50',
              )}
            />
            <div
              className={clsx(
                'position-centered-y absolute',
                'border-4 border-solid border-white/90',
                '-left-8 h-60 w-88 sm:top-1/2',
                'sm:top-1/2 sm:-left-14 sm:h-100 sm:w-120',
                'lg:top-1/2 lg:-left-24 lg:h-140 lg:w-160',
              )}
              style={{
                borderRadius: '50%',
                transform: 'rotate(-35deg) scaleY(0.3)',
                transformOrigin: 'center',
              }}
            />
          </div>
          <div className="w-64 sm:w-fit">
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
              <span
                className={clsx('fade-in font-medium text-[#767676]', 'text-lg', 'sm:text-2xl')}
              >
                Frontend Developer
              </span>
            </h2>
            <h1
              className={clsx(
                'fade-slide-up mb-8 font-semibold text-[#30466B]',
                'text-3xl',
                'sm:text-5xl',
              )}
            >
              Hansol Olivia Kim
            </h1>
            <p className="fade-slide-up text-lg text-[#767676]">
              프론트엔드 개발자에서 한 단계 더 성장하여, <br className="hidden sm:inline" />
              깊이 있는 엔지니어로 성장하고자 노력하는 김한솔입니다.
              <br />
              <br className="inline sm:hidden" />
              사용자 경험은 물론, 동료 개발자들의 경험 또한 <br className="hidden sm:inline" />
              긍정적일 수 있도록 고민하며 개발하는 것을 좋아합니다.
            </p>

            {/* progress bar */}
            <div className="relative mt-15">
              <div
                id="progress whole bar"
                className="relative h-3 max-w-100 rounded-full bg-white shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
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
                    className={clsx(
                      'relative',
                      button.isPlayButton ? 'h-14 w-14 sm:h-20 sm:w-20' : 'h-14 w-14',
                    )}
                  >
                    {button.isPlayButton ? (
                      <button
                        type="button"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                        onClick={() => setIsPlaying((prev) => !prev)}
                        className={clsx(
                          'relative flex cursor-pointer items-center justify-center border-none bg-transparent p-0',
                          'sm:h-20 sm:w-20',
                        )}
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
                          className={clsx(
                            'absolute top-1.5 h-6 w-6',
                            'sm:top-4 sm:left-1/2 sm:h-11 sm:w-11 sm:-translate-x-1/2',
                          )}
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
                          className={clsx(
                            'absolute top-1.5 left-1/2 h-6 w-6 -translate-x-1/2',
                            'sm:top-2.5 sm:h-8 sm:w-8',
                          )}
                        />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
