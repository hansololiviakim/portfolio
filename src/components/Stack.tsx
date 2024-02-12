import Image from 'next/image'
import { star } from '../../public/images/icons'
import { Stacks } from '@/data/stacks'

const Stack = () => {
  const repeatStacks = Array.from({ length: 4 }).flatMap(() => Stacks)

  return (
    <section className="ml-[-5%] h-100 w-[110%] rotate-[-3deg] overflow-x-hidden bg-bl">
      <ul className="flex-ctr-row animate-slide h-full w-fit gap-60">
        {repeatStacks.map((name, idx) => (
          <li key={idx} className="flex-ctr-row large-b w-fit gap-40 font-bai text-white">
            <Image src={star} width={20} height={20} alt="별 모양 아이콘" />
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stack
