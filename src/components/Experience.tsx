import Image from 'next/image'
import { Title, ExpBox } from './common'
import { empty } from '../../public/images/shapes'

const Experience = () => {
  return (
    <div className="relative">
      <Image
        src={empty}
        width={260}
        height={420}
        className="pos-y-ctr left-[-110px] z-[-1]"
        alt=""
      />
      <section className="section-size">
        <Title title="Experience" desc="CAREER & EDUCATIONS & ACTIVITY" />
        <ExpBox />
      </section>
      <Image
        src={empty}
        width={260}
        height={420}
        className="pos-y-ctr right-[-110px] z-[-1]"
        alt=""
      />
    </div>
  )
}

export default Experience
