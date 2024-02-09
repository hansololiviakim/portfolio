import Image from 'next/image'
import { Title } from './common'
import { fill } from '../../public/images/shapes'

const About = () => {
  return (
    <div className="relative">
      <section className="section-size">
        <Title title="About" desc="INTRODUCING MY MINDSET" />
        <div className="flex-ctr-row w-full">
          <p className="w-1/2 whitespace-pre-line font-bai text-65 font-bold leading-70">
            Wherever{'\n'}you go,{'\n'}to with{'\n'}all your hearts.
          </p>
          <p className="large-n whitespace-pre-line">
            어디를 가든지 마음을 다 해 가라.{'\n'}
            항상 마음에 새기고 실천하려 노력하는 문장입니다.{'\n\n'}
            이를 위해 사용자 뿐만 아니라 함께 일하는 동료들에게도{'\n'}
            <b className="text-re"> 긍정적인 경험</b>을 제공할 수 있을지 고민하며 코드를 작성합니다.
            {'\n\n'}
            또한 업무를 할 때는 <b className="text-re">능동적</b>으로 해야 할 일을 찾고,
            {'\n'}
            최선을 다해 <b className="text-re">기한 내 결과물을 산출</b>하려 노력합니다.{'\n\n'}
            업무도, 협업도 진심을 다해 <b className="text-re">함께 일하고 싶은 개발자</b>가
            되겠습니다.
          </p>
        </div>
      </section>
      <Image
        src={fill}
        width={260}
        height={420}
        className="pos-y-ctr right-[-110px] z-[-1]"
        alt=""
      />
    </div>
  )
}

export default About
