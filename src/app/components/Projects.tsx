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
    <section className="flex h-dvh flex-col items-start justify-center px-8" id="projects">
      <h1 className="mb-8 flex items-center gap-2">
        <Image src={ImgSparkle} alt="sparkle" width={40} height={40} />
        <span className="text-3xl font-semibold text-[#30466B]">Projects</span>
      </h1>

      <div className="flex-row-center h-164 w-full gap-10 rounded-2xl bg-white/35 px-6 py-8 backdrop-blur-md">
        <div className="w-100">
          <div className="flex items-center justify-between">
            <button type="button" onClick={handlePrevProject}>
              <span className="sr-only">이전 프로젝트 보기</span>
              <Image
                src={ImgArrowLeft}
                alt="arrow left"
                width={50}
                height={50}
                className="arrow-left-animate"
              />
            </button>
            <h2 className="flex-col-center">
              <span className="text-2xl font-bold text-[#30466B]">{currentProject.title}</span>
              <span className="mt-1 font-light text-[#767676]">{currentProject.type}</span>
            </h2>
            <button type="button" onClick={handleNextProject}>
              <span className="sr-only">다음 프로젝트 보기</span>
              <Image
                src={ImgArrowRight}
                alt="arrow right"
                width={50}
                height={50}
                className="arrow-right-animate"
              />
            </button>
          </div>
          <Image
            src={currentProject.image}
            alt="project thumbnail"
            width={400}
            height={300}
            className="mt-14"
          />
        </div>

        <div className="flex w-6/10 flex-col gap-8">
          {/* 프로젝트 소개 */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex gap-2 text-2xl font-bold text-[#30466B]">
                <Image
                  src={ImgBlueSparkle}
                  alt="dot"
                  width={24}
                  height={24}
                  className="h-8 w-8 object-contain"
                />
                <span>프로젝트 소개</span>
              </h2>
              <div className="flex items-center gap-4 text-[#484848]">
                {currentProject.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer underline"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <p
              className={clsx(
                'w-full rounded-2xl px-8 py-6 whitespace-pre-wrap text-[#484848]',
                'bg-[#CAD8F8]/70 backdrop-blur-md',
              )}
            >
              {currentProject.desc}
            </p>
          </div>

          {/* 기술 스택 */}
          <div>
            <h2 className="mb-3 flex gap-2 text-2xl font-bold text-[#30466B]">
              <Image
                src={ImgBlueSparkle}
                alt="dot"
                width={24}
                height={24}
                className="h-8 w-8 object-contain"
              />
              <span>기술 스택</span>
            </h2>
            <p
              className={clsx(
                'w-full rounded-2xl px-8 py-6 text-[#484848]',
                'bg-[#CAD8F8]/70 backdrop-blur-md',
              )}
            >
              {currentProject.techStack}
            </p>
          </div>

          {/* 주요 기능 및 특징 */}
          <div>
            <h2 className="mb-3 flex gap-2 text-2xl font-bold text-[#30466B]">
              <Image
                src={ImgBlueSparkle}
                alt="dot"
                width={24}
                height={24}
                className="h-8 w-8 object-contain"
              />
              <span>주요 기능 및 특징</span>
            </h2>
            <ul
              className={clsx(
                'flex w-full flex-col gap-3 rounded-2xl px-8 py-6 text-[#484848]',
                'bg-[#CAD8F8]/70 backdrop-blur-md',
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
