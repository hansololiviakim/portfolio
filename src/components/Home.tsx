import Link from 'next/link'
import Image from 'next/image'
import { HomeLink } from '@/data/home'
import { photo } from '../../public/images/etc'
import { empty } from '../../public/images/shapes'
import { star } from '../../public/images/icons'

const Home = () => {
  return (
    <section className="home-size flex-row justify-around">
      <div>
        <h1 className="title-1 flex flex-col justify-center gap-8 font-semibold">
          안녕하세요,
          <strong className="text-re">UX를 생각하는 개발자</strong>
          김한솔입니다.
        </h1>
        <ul className="ml-5 mt-60 flex items-center gap-16">
          {HomeLink.map(({ id, title, url }) =>
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
      </div>
      <div className="relative w-500">
        <Image
          src={empty}
          width={400}
          height={400}
          alt=""
          className="pos-x-ctr absolute top-22 z-[-1]"
        />
        <Image src={photo} width={474} height={608} alt="" className="" />
      </div>
    </section>
  )
}

export default Home
