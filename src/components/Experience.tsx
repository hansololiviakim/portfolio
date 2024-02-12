import Image from 'next/image'
import { Title, ExpBox } from './common'
import { empty } from '../../public/images/shapes'

const Experience = () => {
  return (
    <div className="relative">
      <section className="section-size">
        <Title title="Experience" desc="CAREER & EDUCATIONS & ACTIVITY" />
        <ExpBox />
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
