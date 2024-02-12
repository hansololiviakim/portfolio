import Image from 'next/image'
import Link from 'next/link'
import { HeaderLinks } from '@/data/headerLinks'
import { sun } from '../../public/images/shapes'
import { star } from '../../public/images/icons'

const Header = () => {
  return (
    <nav className="header-width flex h-96 justify-between">
      <div className="flex-ctr-row cursor-default gap-12">
        <Image src={sun} width={32} height={32} alt="햇살 모양 아이콘" />
        <span className="title-5 font-bai font-bold">HANSOL</span>
      </div>
      <ul className="flex items-center gap-16">
        {HeaderLinks.map(({ id, title, url }) =>
          title ? (
            <li key={id}>
              <Link href={url} target="_blank" className="header-button">
                {title}
              </Link>
            </li>
          ) : (
            <Image key={id} width={16} height={16} src={star} alt="별 모양 아이콘" />
          ),
        )}
      </ul>
    </nav>
  )
}

export default Header
