import Image from 'next/image'
import { sun } from '../../public/images/shapes'

const Header = () => {
  return (
    <nav className="header-width flex h-96 justify-between">
      <div className="flex-ctr-row cursor-default gap-12">
        <Image src={sun} width={32} height={32} alt="햇살 모양 아이콘" />
        <span className="title-5 font-bai font-bold">HANSOL</span>
      </div>
      <ul className="flex-ctr-row">
        <li className="nav-button">Home</li>
        <li className="nav-button">About</li>
        <li className="nav-button">Experience</li>
        <li className="nav-button">Portfolio</li>
        <li className="nav-button">Contact</li>
      </ul>
    </nav>
  )
}

export default Header
