'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { ImgArrowLeft, ImgArrowRight, ImgBlueSparkle, ImgSparkle } from '@/assets/elements'
import { projectList } from '@/constants/projects'

export default function Projects() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const handlePrevProject = () => {
    setCurrentIdx((prev) => (prev === 0 ? projectList.length - 1 : prev - 1))
  }

  const handleNextProject = () => {
    setCurrentIdx((prev) => (prev === projectList.length - 1 ? 0 : prev + 1))
  }

  const currentProject = projectList[currentIdx]

  return (
    <section
      className={clsx(
        'my-10 flex flex-col items-start justify-center px-8 py-10',
        'sm:my-20',
        'lg:my-0 xl:h-dvh',
      )}
      id="projects"
    >
      <h1 className="mb-8 flex items-center gap-2">
        <Image src={ImgSparkle} alt="sparkle" width={40} height={40} />
        <span className="text-3xl font-semibold text-[#30466B]">Projects</span>
      </h1>

      <div
        className={clsx(
          'flex w-full items-center justify-center gap-10 rounded-2xl bg-white/35 px-6 py-8 backdrop-blur-md',
          'h-full flex-col',
          'lg:flex-row xl:h-164',
        )}
      >
        {/* control arrow */}
        <div className="w-100">
          <div
            className={clsx(
              'mx-auto flex items-center justify-center gap-4',
              'sm:w-full sm:justify-between',
            )}
          >
            <button type="button" onClick={handlePrevProject}>
              <span className="sr-only">이전 프로젝트 보기</span>
              <Image
                src={ImgArrowLeft}
                alt="arrow left"
                width={50}
                height={50}
                className={clsx('arrow-left-animate h-6 w-6', 'sm:h-12 sm:w-12')}
              />
            </button>
            <h2 className="flex-col-center">
              <span className={clsx('text-xl font-bold text-[#30466B]', 'sm:text-2xl')}>
                {currentProject.title}
              </span>
              <span className="mt-1 font-light text-[#767676]">{currentProject.type}</span>
            </h2>
            <button type="button" onClick={handleNextProject}>
              <span className="sr-only">다음 프로젝트 보기</span>
              <Image
                src={ImgArrowRight}
                alt="arrow right"
                width={50}
                height={50}
                className={clsx('arrow-left-animate h-6 w-6', 'sm:h-12 sm:w-12')}
              />
            </button>
          </div>
          <Image
            src={currentProject.image}
            alt="project thumbnail"
            width={400}
            height={300}
            className={clsx('mx-auto mt-7 h-40 w-56', 'sm:mt-14 sm:h-66 sm:w-100')}
          />
        </div>

        <div className={clsx('flex w-full flex-col gap-8', 'lg:w-6/10')}>
          {/* 프로젝트 소개 */}
          <div>
            <div
              className={clsx(
                'mb-3 flex flex-col items-start justify-between',
                'sm:flex-row sm:items-center',
              )}
            >
              <h2 className={clsx('flex gap-2 text-xl font-bold text-[#30466B]', 'sm:text-2xl')}>
                <Image
                  src={ImgBlueSparkle}
                  alt="dot"
                  width={24}
                  height={24}
                  className={clsx('mb-4 h-7 w-7 object-contain', 'sm:mb-0 sm:h-8 sm:w-8')}
                />
                <span>프로젝트 소개</span>
              </h2>
              <div
                className={clsx(
                  'ml-10 flex items-center justify-center gap-4 text-[#484848]',
                  'sm:ml-0',
                )}
              >
                {currentProject.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx('cursor-pointer underline')}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <p
              className={clsx(
                'w-full rounded-2xl px-6 py-4 whitespace-pre-wrap text-[#484848]',
                'bg-[#CAD8F8]/70 backdrop-blur-md',
                'sm:px-8 sm:py-6',
              )}
            >
              {currentProject.desc}
            </p>
          </div>

          {/* 기술 스택 */}
          <div>
            <h2 className={clsx('mb-3 flex gap-2 text-xl font-bold text-[#30466B]', 'sm:text-2xl')}>
              <Image
                src={ImgBlueSparkle}
                alt="dot"
                width={24}
                height={24}
                className={clsx('h-7 w-7 object-contain', 'sm:mb-0 sm:h-8 sm:w-8')}
              />
              <span>기술 스택</span>
            </h2>
            <p
              className={clsx(
                'w-full rounded-2xl px-6 py-4 whitespace-pre-wrap text-[#484848]',
                'bg-[#CAD8F8]/70 backdrop-blur-md',
                'sm:px-8 sm:py-6',
              )}
            >
              {currentProject.techStack}
            </p>
          </div>

          {/* 주요 기능 및 특징 */}
          <div>
            <h2 className={clsx('mb-3 flex gap-2 text-xl font-bold text-[#30466B]', 'sm:text-2xl')}>
              <Image
                src={ImgBlueSparkle}
                alt="dot"
                width={24}
                height={24}
                className={clsx('h-7 w-7 object-contain', 'sm:mb-0 sm:h-8 sm:w-8')}
              />
              <span>주요 기능 및 특징</span>
            </h2>
            <ul
              className={clsx(
                'flex w-full flex-col gap-3 rounded-2xl px-6 py-4 text-[#484848]',
                'bg-[#CAD8F8]/70 backdrop-blur-md',
                'sm:px-8 sm:py-6',
              )}
            >
              {currentProject.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex gap-1 text-[#484848]">
                  <span>·</span>
                  <span dangerouslySetInnerHTML={{ __html: feature }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
