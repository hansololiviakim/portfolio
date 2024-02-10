import { portfoliosType } from '@/types/globalTypes'
import { belog, dawhisky, diedie, tteokguk } from '../../public/images/thubmnails'

export const Portfolios: portfoliosType[] = [
  {
    id: 1,
    flag: 'TEAM',
    title: '니떡국 내떡국',
    stack: ['next.js', 'typescript', 'tailwind', 'tanstack-query'],
    desc: `2024년 새해 덕담을 주고 받을 수 있는 온라인 롤링페이퍼로,
      IT 커뮤니티인 디스콰이엇 프로덕트 트렌딩 1위 및 뉴스레터에 소개되었습니다.
      초기 세팅, 공통 컴포넌트, 룰렛, 편지 작성 등의 기능을 담당하였습니다.`,
    link: [
      { name: 'web', url: 'https://www.tteokguk.site' },
      { name: 'github', url: 'https://github.com/tteok-guk/tteokguk-front' },
      { name: 'write', url: 'https://dis.qa/mO9jQHz' },
    ],
    src: tteokguk,
  },
  {
    id: 2,
    flag: 'TEAM',
    title: 'DIEDIE.gg',
    stack: ['react', 'typescript', 'chart-js', 'styled-component'],
    desc: `리그 오브 레전드 유저 정보 조회 및 악성 유저 신고 커뮤니티입니다.
    초기 세팅, 공통 컴포넌트, 유저 정보 및 차트 등의 기능을 담당하였습니다.`,
    link: [
      { name: 'github', url: 'https://github.com/diedielolorg/diediefrontend' },
      { name: 'write', url: 'https://oliviakim.tistory.com/178' },
      { name: 'notion', url: 'https://bit.ly/diedie-notion' },
    ],
    src: diedie,
  },
  {
    id: 3,
    flag: 'PERSONAL',
    title: 'BELOG',
    stack: ['react', 'typescript', 'python', 'flask', 'mongo-db'],
    desc: `개발자를 위한 블로그 서비스인 벨로그를 클론코딩하였습니다.
    프론트 단만 담당했던 기존의 협업 프로젝트를
    서버, 프론트 풀스택 개인 프로젝트로 재구현하였습니다.`,
    link: [{ name: 'github', url: 'https://github.com/Be-log/be-log' }],
    src: belog,
  },
  {
    id: 4,
    flag: 'TEAM',
    title: 'DA WHISKY',
    stack: ['react', 'javascript', 'recoil', 'react-query', 'styled-component'],
    desc: `위스키의 진입 장벽을 낮추기 위한 위스키 체험 온라인 플랫폼입니다.
    초기 세팅, 공통 컴포넌트, 무한 스크롤, 카카오맵, 추천 검색어 등의
    기능을 담당하였고, PWA를 적용하였습니다.`,
    link: [
      { name: 'github', url: 'https://github.com/dawhisky/dawhisky-FE' },
      { name: 'write', url: 'https://oliviakim.tistory.com/121' },
      { name: 'notion', url: 'https://bit.ly/dawhisky-notion' },
    ],
    src: dawhisky,
  },
]
