import { ImgCasper, ImgDawhisky, ImgKiring, ImgTteokguk } from '@/assets/projects'

export const projectList = [
  {
    id: 0,
    image: ImgCasper,
    title: '현대자동차 캐스퍼',
    type: '실무 프로젝트',
    links: [
      {
        title: 'Website',
        url: 'https://casper.hyundai.com',
      },
    ],
    desc: '현대자동차 최초 온라인 전용 판매 차량이자 연간 판매량 약 4만대를 달성한 캐스퍼의 운영 및 개발을 담당했습니다.\nUI/UX 개선, 신규 모델 견적 및 계약 로직 구축 등 전반적인 프론트엔드 업무를 수행했습니다.',
    techStack: 'Nuxt2, Vue2, Vuex, Scss, Element UI',
    features: [
      '<b>Node.js v14 → v20 업그레이드와 패키지 매니저(yarn → pnpm) 전환</b>을 전담해,<br />가상환경의 디스크 부족 이슈를 해결하고 <b>로컬 빌드 시간을 5분에서 1분 40초로 67% 단축</b>했습니다.',
      '전기차 신규 모델 추가 및 현대자동차 임직원 전용 캐스퍼 구매서비스 구축 프로젝트에서<br /><b>전기차 보조금·세제 혜택·직원 할인 기능 개발을 전담</b>했습니다.',
      '중복되는 UI 템플릿과 함수 코드를 <b>공통화하여 중복 컴포넌트를 15% 이상 감소시켜 업무 효율을 개선</b>했습니다.',
    ],
  },
  {
    id: 1,
    image: ImgKiring,
    title: '키링',
    type: '사이드 프로젝트',
    links: [
      {
        title: 'Website',
        url: 'https://kiring.vercel.app',
      },
      {
        title: 'FE Github',
        url: 'https://github.com/kitworks-kiring/kiring-frontend',
      },
      {
        title: 'Crawler Github',
        url: 'https://github.com/kitworks-kiring/kiring-map-crawler',
      },
    ],
    desc: '회사원들이 더 편리하게 직장 생활을 할 수 있는 방법을 고민하며 시작한 프로젝트입니다.\n키링은 회사 근처 식당 리스트, 교통 정보, 캘린더, 커뮤니티 기능을 하나로 모은 올인원 웹앱입니다.',
    techStack: 'Next.js, Typescript, Zustand, Tanstack-Query, TailwindCSS',
    features: [
      '플레이스(식당 리스트) 페이지의 전체 구조를 설계하고,<br /><b>리스트-카카오맵 연동, 커스텀 마커 및 오버레이 기능</b>을 구현했습니다.',
      '<b>가로 스크롤 및 드래그(터치/마우스) 기능을 지원하는 커스텀 훅</b>을 개발해<br />PC와 모바일 모두 일관된 사용자 경험을 제공했습니다.',
      '이전 사이드프로젝트에서 개발 컨벤션과 문서화가 부족했던 경험을 바탕으로,<br /><b>AI 코드 리뷰 연동</b>을 통한 코드 품질 관리와 <b>GitHub Projects, Issues, PR을 활용한<br />문서화 프로세스</b>를 구축하여 팀원 간 개발 현황 공유와 협업 효율성을 크게 개선했습니다.',
    ],
  },
  {
    id: 2,
    image: ImgTteokguk,
    title: '니떡국 내떡국',
    type: '사이드 프로젝트',
    links: [
      {
        title: 'FE Github',
        url: 'https://github.com/tteok-guk/tteokguk-front',
      },
      {
        title: 'Disquiet Article(1)',
        url: 'https://dis.qa/mO9jQHz',
      },
      {
        title: 'Disquiet Article(2)',
        url: 'https://dis.qa/edzI3',
      },
    ],
    desc: '니떡국 내떡국은 2024년 새해 덕담을 주고받을 수 있는 온라인 롤링페이퍼입니다.\n룰렛을 이용해 다양한 고명을 뽑고, 그릇에 올려 개성있는 떡국을 만들고, 공유할 수 있습니다.',
    techStack: 'Next.js, Recoil, Tanstack Query, TailwindCSS, Shadcn/ui',
    features: [
      '<b>CSS transform</b>을 활용해 사용자 액션에 따라 동적으로 회전하는 애니메이션 룰렛을 구현했습니다.<br /><b>룰렛에는 가중치 기반 확률 알고리즘을 적용하여 옵션 별 등장 확률을 세밀하게 조정</b>했습니다.',
      '3개월 운영 기간 동안 <b>전체 순 방문자(UV) 대비 49%의 회원 전환율</b>을 달성했으며,<br />홍보 및 광고 집행, UX 분석 툴 연동, 기술 아티클 작성 등 개발 외적인 마케팅 및 <b>운영 경험</b>도 쌓을 수 있었습니다.',
      'IT 프로덕트 커뮤니티 디스콰이엇에서 출시 하루 만에 <b>위클리 프로덕트 1위</b>를 달성했으며,<br />게시한 팀 협업 후기가 뉴스레터에 소개되었습니다.',
    ],
  },
  {
    id: 3,
    image: ImgDawhisky,
    title: '다위스키',
    type: '사이드 프로젝트',
    links: [
      {
        title: 'FE Github',
        url: 'https://github.com/dawhisky/dawhisky-FE',
      },
      {
        title: 'Team Notion',
        url: 'https://team-spirits.notion.site/DA-WHISKY-8cd5298ee7fe4921983d820d87681467',
      },
    ],
    desc: '다위스키는 “위스키에 관련된 정보를 한 곳에서 모아 볼 순 없을까?” 라는 물음에서 시작되었습니다.\n풍부한 위스키 경험을 위해 위스키 검색, 기록, 위스키바 탐색 및 줄서기 기능을 제공합니다.',
    techStack: 'React, Recoil, React-Query, Styled-Component',
    features: [
      '<b>900개 데이터에 무한 스크롤·이미지 Lazy Loading</b>을 적용해 성능을 개선하고,<br />Lighthouse 성능 점수는 60점에서 80점, 검색엔진 최적화 점수는 85점으로 향상시켰습니다.',
      '<b>페이지별 인증/인가 route와 Axios Interceptor</b> 를 구현하여 중복 코드와 휴먼 에러를 감소시켰습니다.',
      '<b>추천 검색어(디바운스)·지도 기반 리스트 자동 갱신</b> 등 사용자 편의성을 높이는 핵심 기능을 직접 구현했습니다.',
    ],
  },
]
