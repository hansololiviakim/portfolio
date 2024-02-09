import Image from 'next/image'
import { Experiences } from '@/data/experience'
import { company, school } from '../../../public/images/icons'

const ExpBox = () => {
  const CAREER = 'CAREER'
  return (
    <div className="flex-ctr-col gap-32">
      {Experiences.map(({ id, title, desc, detail, period }) => (
        <div
          key={id}
          className={`
            flex w-1060 flex-row justify-around border-2 border-bl px-32 py-36
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
              <span className={`large-n ${id === CAREER ? 'text-[##E6E3DE]' : 'text-dg'}`}>
                {desc}
              </span>
              <ul>
                {detail &&
                  detail.map((list, idx) => (
                    <li key={idx} className="large-n text-[#E6E3DE]">
                      {list}
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
  )
}

export default ExpBox
