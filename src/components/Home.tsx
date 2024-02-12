import Image from 'next/image'
import Typing from './Typing'
import { empty } from '../../public/images/shapes'
import { star } from '../../public/images/icons'

const Home = () => {
  return (
    <div className="relative">
      <section className="home-size relative">
        <h1 className="title-1 flex-ctr-col gap-8 font-semibold">
          안녕하세요,
          <strong className="text-re">
            <Typing />
          </strong>
          김한솔입니다.
        </h1>
        <Image src={empty} alt="" className="absolute z-[-1] opacity-20" />
        {['left', 'right'].map((position) => (
          <Image
            key={position}
            src={star}
            width={25}
            height={25}
            alt="별 모양 아이콘"
            className={`absolute z-[-1] opacity-20 ${position === 'left' ? 'left-[10%] top-2/3' : 'right-[10%] top-1/3'}`}
          />
        ))}
      </section>
      {['left', 'right'].map((position, idx) => (
        <Image
          key={idx}
          src={star}
          width={25}
          height={25}
          alt="별 모양 아이콘"
          className={`absolute z-[-1] opacity-20 ${position === 'left' ? 'left-[8%] top-1/3' : 'right-[8%] top-2/3'}`}
        />
      ))}
    </div>
  )
}

export default Home
