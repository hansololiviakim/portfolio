import Image from 'next/image'
import { ImgSparkle } from '@/assets/elements'

export default function Projects() {
  return (
    <section className="h-dvh">
      <h1 className="flex items-center gap-2 pt-10">
        <Image src={ImgSparkle} alt="sparkle" width={40} height={40} />
        <span className="text-3xl font-semibold text-[##30466B]">Projects</span>
      </h1>
    </section>
  )
}
