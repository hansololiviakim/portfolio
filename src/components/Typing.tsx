'use client'

import TypewriterComponent from 'typewriter-effect'

const Typing = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          'UX를 생각하는 개발자',
          '기록과 공유를 좋아하는 개발자',
          '함께 일하고 싶은 개발자',
        ],
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default Typing
