'use client'

import { useEffect } from 'react'

const Console = () => {
  useEffect(() => {
    console.log(`
    .∧＿∧
    （｡･ω･｡)つ━☆☆*。
    ⊂　　 ノ 　　　☆☆
    　し-Ｊ　　　°。+ * 。
    　　　　　　　　　.☆
    　　　　　　　　　 ｡ﾟﾟ･｡･ﾟﾟ。
    　　　　　　　　　　　 ｡ﾟ🎁
    `)
    console.log(
      '%c포트폴리오에 방문해주셔서 감사합니다!\n오늘 하루 즐거운 일이 생기는 마법을 선물로 드릴게요👀',
      'background:#BDB8AD; color:#161513; padding:3px; font-weight: 800;',
    )
  }, [])

  return <></>
}

export default Console
