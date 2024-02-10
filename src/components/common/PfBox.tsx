import Image from 'next/image'
import Link from 'next/link'
import { Portfolios } from '@/data/portfolios'

const PfBox = () => {
  return (
    <div className="flex-ctr-col mt-30 gap-100">
      {Portfolios.map(({ id, flag, title, stack, desc, link, src }) => (
        <div
          key={id}
          className={`${id % 2 ? 'flex-ctr-row' : 'flex-ctr-row flex-row-reverse'} gap-50`}
        >
          <Image
            src={src}
            width={500}
            height={300}
            alt={`${title} 웹사이트 메인 페이지 캡쳐 이미지`}
          />
          <div className="flex h-full flex-col justify-around">
            <span className="small-n w-fit bg-re px-10 py-2 font-bai font-semibold tracking-widest text-white">{`${flag} PROJECT`}</span>
            <h2
              className={`title-2 font-bold ${/[a-zA-Z]/g.test(title) ? 'font-bai' : 'font-pre'}`}
            >
              {title}
              <span className="large-n mt-5 block cursor-pointer font-bai font-normal text-gr hover:text-re">
                #{stack.join(' #')}
              </span>
            </h2>
            <p className="whitespace-pre-line text-18 leading-25">{desc}</p>
            <div className="flex gap-20">
              {link.map(({ name, url }) => (
                <Link key={name} href={url} target="_blank" className="transition hover:scale-125">
                  <Image
                    src={`/images/icons/${name}.png`}
                    width={30}
                    height={30}
                    alt={`${name} 아이콘`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PfBox
