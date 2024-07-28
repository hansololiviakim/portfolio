import Image from 'next/image'
import { Experiences } from '@/data/experience'
import { Title, ExpBox } from './common'
import { company, school } from '../../public/images/icons'
import { empty } from '../../public/images/shapes'
import Link from 'next/link'


const Experience = () => {
  const CAREER = 'CAREER'
  const CASPER_URL = 'https://casper.hyundai.com'

  return (
    <div className="relative">
      <section className="section-size">
        <Title title="Experience" desc="CAREER & EDUCATIONS & ACTIVITY" />

        <div className="flex-ctr-col gap-32">
        {Experiences.map(({ id, title, desc, detail, period }) => (
          <div
            key={id}
            className={`
              flex w-1060 flex-row justify-around border-2 border-bl bg-bg px-32 py-36
              ${id === CAREER ? 'bg-bl text-white' : 'items-center'}
              transition hover:scale-105
            `}
          >
            <div className={`flex-ctr h-48 w-48 ${id === CAREER ? `bg-re` : `bg-bl`}`}>
              <Image
                src={id === CAREER ? company : school}
                width={24}
                height={24}
                alt={`${id} 아이콘`}
              />
            </div>
            <div className="flex w-3/4 flex-col">
              <h2 className="title-5 font-bold">{title}</h2>
              <div>
                <span className={`large-n ${id === CAREER ? 'text-[#E6E3DE]' : 'text-dg'}`}>
                  {desc}
                </span>
                <ul>
                  {detail && detail.map((list, idx) => (
                    <li key={idx} className={`large-n ${id === 'CAREER' ? 'text-[#E6E3DE]' : ''}`}>
                      {id === CAREER && idx === 0 ? (
                        <span>
                          • Vue2, Nuxt2를 사용한
                          <ExpBox href={CASPER_URL} name="현대자동차 캐스퍼 웹 플랫폼" />
                          운영 및 추가 개발
                        </span>
                      ) : id === CAREER && idx === 1 ? (
                        <span>
                          • 캐스퍼 일렉트릭 프로젝트 참여하여
                          <ExpBox href={`${CASPER_URL}/estimation?estimationUrl=VTAwMDM4MjE5ODMx`} name="견적내기" />
                          및 견적서 공유, 마이페이지 구매 상세 등 페이지 담당
                        </span>
                      ) : id === CAREER && idx === 2 ? (
                        <span>
                          • 기존 페이지 유지보수, 코드 개선 및
                          <ExpBox href={`${CASPER_URL}/vehicles/recommend`} name="나에게 맞는 캐스퍼 추천" />
                          등 신규 페이지 제작
                        </span>
                      ) : id === 'EDUCATION' && idx === 1 ? (
                        <span>
                          • 함께 팀을 하고 싶은 사람이라는 동료 평가가 있었으며 수료 시
                          <ExpBox
                            href="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbcWY8p%2FbtsmOMl8Z1j%2FkKk334mXYuHZ5MgELZwz81%2Fimg.png"
                            name="팀워크 기여상"
                          />
                          수상
                        </span>
                      ) : (
                        <span>{list}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="regular-n flex flex-col items-end">
              <span className={`font-bai font-semibold ${id === CAREER ? 'text-white' : 'text-bl'}`}>
                {id}
              </span>
              <span className={`font-bai font-semibold ${id === CAREER ? 'text-re' : 'text-bl'}`}>
                {period}
              </span>
            </p>
          </div>
        ))}
      </div>
      </section>
      {['left-[-110px]', 'right-[-110px]'].map((position) => (
        <Image
          key={position}
          src={empty}
          width={260}
          height={420}
          className={`pos-y-ctr z-[-1] ${position}`}
          alt="테두리가 있는 아스타 모양 아이콘"
        />
      ))}
    </div>
  )
}

export default Experience
