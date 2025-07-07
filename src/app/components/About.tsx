'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { ImgBlueSparkle, ImgControl, ImgSparkle } from '@/assets/elements'
import { ImgReact, ImgDevelop, ImgHandShake, ImgSprout } from '@/assets/icons'
import { motion } from 'framer-motion'

export default function About() {
  const timeline = [
    {
      title: '기술 스택',
      desc: '<b>React, Next, TypeScript, TailwindCSS, SCSS</b>를 이용해 개발한 경험이 있으며 하이브리드 렌더링을 구현할 수 있습니다.',
      icon: ImgReact,
    },
    {
      title: '개발자에서 엔지니어로',
      desc: '엔지니어는 <b>시스템 전체를 이해하고 설계적 관점에서 최적의 솔루션을 찾는 사람</b>이라고 생각합니다. 기능 구현을 넘어서 더 나은 구조와 효율을 고민하는 개발자가 되고자 합니다.',
      icon: ImgDevelop,
    },
    {
      title: '일하는 방식',
      desc: '나만 이해하는 UX, 코드가 아닌 <b>사용자와 동료 개발자가 함께 이해할 수 있는 코드를 지향</b>합니다. 이를 위해 사용자의 입장에서 생각하고, 디테일이 있는 UX를 구현하기 위해 노력합니다.',
      icon: ImgHandShake,
    },
    {
      title: '성장하는 즐거움',
      desc: '익숙하지 않은 상황에도 당황하지 않고, <b>전체적인 흐름을 바라보며 성장하는 과정 속의 즐거움</b>을 찾습니다.',
      icon: ImgSprout,
    },
  ]

  return (
    <section className="flex h-dvh flex-col items-start justify-center px-8" id="about">
      <motion.h1
        className="mb-16 flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Image src={ImgSparkle} alt="sparkle" width={40} height={40} />
        <span className="text-3xl font-semibold text-[#30466B]">About</span>
      </motion.h1>

      <div className="w-full">
        <div className="relative">
          {/* 중앙 세로선 */}
          <div className="absolute top-0 left-1/2 z-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-t from-[#CAD8F8] to-[#BBC4F4]" />

          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className={clsx(
                  'relative flex items-center',
                  idx % 2 === 0 ? 'justify-start' : 'justify-end',
                )}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: 'easeOut' }}
              >
                <div
                  className={clsx(
                    'w-5/12 rounded-xl bg-white/35 p-4 backdrop-blur-md',
                    idx % 2 === 0 ? 'mr-auto' : 'ml-auto',
                  )}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Image
                      src={ImgBlueSparkle}
                      alt="dot"
                      width={20}
                      height={20}
                      className="h-6 w-6 object-contain"
                    />
                    <span className="text-xl font-bold text-[#30466B]">{item.title}</span>
                  </div>
                  <p
                    className="text-justify text-[#484848]"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
                <motion.div
                  className="absolute top-6 left-1/2 z-10 flex -translate-x-1/2 rounded-full shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image src={ImgControl} alt="dot" width={40} height={40} />
                </motion.div>
                <motion.div
                  className="absolute top-7.5 left-1/2 z-20 flex -translate-x-1/2 rounded-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image src={item.icon} alt={`${item.title} icon`} width={24} height={24} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
