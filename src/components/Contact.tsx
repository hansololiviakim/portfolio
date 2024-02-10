import Image from 'next/image'
import Link from 'next/link'
import { Title } from './common'
import { Contacts } from '@/data/contacts'
import { star } from '../../public/images/icons'

const Contact = () => {
  return (
    <div className="relative">
      <section className="contact-size">
        <Title title="Contact" desc="LOOKING FORWARD TO YOUR CONTACT" />
        <div className="flex-ctr-row">
          {Contacts.map(({ id, contact, link }) => (
            <Link
              key={id}
              href={link}
              target="_blank"
              className={`regular-b flex-ctr-col h-145 w-350 gap-6 border-2 border-bl font-bai ${id === 'github' && 'bg-bl text-white'}`}
            >
              <Image
                src={`/images/icons/${id}.png`}
                width={64}
                height={64}
                alt={`${id} 아이콘`}
                className={`${id === 'github' && 'invert'}`}
              />
              <span className="hover:hover-color hover:scale-110">{contact}</span>
            </Link>
          ))}
        </div>
      </section>
      {['left', 'right'].map((position) => (
        <Image
          key={position}
          src={star}
          width={30}
          height={30}
          alt=""
          className={`absolute z-[-1] ${position === 'left' ? 'left-[10%] top-1/3' : 'right-[10%] top-2/3'}`}
        />
      ))}
    </div>
  )
}

export default Contact
