import Link from 'next/link'
import Image from 'next/image'
import { HomeLinks } from '@/data/homeLinks'
import Typing from './Typing'
import { empty } from '../../public/images/shapes'
import { star } from '../../public/images/icons'

const Home = () => {
  return (
    <section className="home-size relative">
      <h1 className="title-1 flex-ctr-col gap-8 font-semibold">
        안녕하세요,
        <strong className="text-re">
          <Typing />
        </strong>
        김한솔입니다.
      </h1>
      <ul className="ml-5 mt-60 flex items-center gap-16">
        {HomeLinks.map(({ id, title, url }) =>
          title ? (
            <li key={id}>
              <Link href={url} target="_blank" className="home-button">
                {title}
              </Link>
            </li>
          ) : (
            <Image key={id} width={20} height={20} src={star} alt="별모양 아이콘" />
          ),
        )}
      </ul>
      <Image src={empty} alt="" className="absolute z-[-1] opacity-20" />
      {['left', 'right'].map((position) => (
        <Image
          key={position}
          src={star}
          width={30}
          height={30}
          alt=""
          className={`absolute z-[-1] opacity-20 ${position === 'left' ? 'left-[8%] top-1/3' : 'right-[8%] top-2/3'}`}
        />
      ))}
    </section>
  )
}

export default Home
