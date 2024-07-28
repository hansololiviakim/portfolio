import Image from 'next/image'
import Link from 'next/link'

const ExpBox = ({ href = '', name = '' }: { href: string, name: string }) => {
  return (
    <div className="inline-block mx-5">
      <Link
      href={href}
      target="_blank"
      className="font-medium underline hover:text-re"
      >
        { name }
      </Link>
      {' '}
    </div>
  )
}

export default ExpBox
