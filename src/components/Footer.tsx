import Image from 'next/image'
import { sun } from '../../public/images/shapes'

const Footer = () => {
  return (
    <footer className="flex-ctr h-260 bg-bl font-bai text-gr">
      <div className="header-width flex h-fit w-full items-end justify-around">
        <p>
          <div className="flex gap-12">
            <Image src={sun} width={32} height={32} alt="" />
            <span className="title-5 font-bold text-white">HANSOL</span>
          </div>
          <div className="mt-25 flex flex-col">
            <span>
              This page is created for personal portfolio purpose and not for commercial use.
            </span>
            <span>This copyright for the design template belongs to Flowbase.</span>
          </div>
        </p>
        <p>Last Updated 2024-02</p>
      </div>
    </footer>
  )
}

export default Footer
