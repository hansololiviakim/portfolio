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
      {['left', 'right'].map((position) => (
        <Image
          key={position}
          src={empty}
          width={260}
          height={420}
          className={`pos-y-ctr z-[-1] ${position}-[-110px]`}
          alt=""
        />
      ))}
    </div>
  )
}

export default Experience
