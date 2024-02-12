import Image from 'next/image'
import { Title } from './common'
import PfBox from './common/PfBox'
import { sun } from '../../public/images/shapes'

const Portfolio = () => {
  return (
    <div className="relative">
      <section className="section-size h-[200dvh]">
        <Title title="Portfolio" desc="ACCOIMPLISHMENTS & REFONITIONS" />
        <PfBox />
      </section>
      {['left-[-110px]', 'right-[-110px]'].map((position) => (
        <Image
          key={position}
          src={sun}
          width={260}
          height={420}
          className={`
            pos-y-ctr z-[-1] ${position}
            ${position.includes('left') ? 'top-[20%]' : 'bottom-[20%]'}
          `}
          alt="햇살 모양 아이콘"
        />
      ))}
    </div>
  )
}

export default Portfolio
