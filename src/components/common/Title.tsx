import Image from 'next/image'
import { CommonTitleType } from '@/types/globalTypes'
import { sun } from '../../../public/images/shapes'

const Title = ({ title, desc }: CommonTitleType) => {
  return (
    <div className="flex-ctr-col boder-blue-500 mb-60 h-168 justify-between">
      <Image src={sun} width={48} height={48} alt="태양 모양 아이콘" />
      <h1 className="title-2 mt-15 font-bai font-bold">{title}</h1>
      <span className="large-n font-bai font-semibold tracking-widest">{desc}</span>
    </div>
  )
}

export default Title
