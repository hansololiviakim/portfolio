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
    desc: '현대자동차 최초 온라인 판매 차량인 캐스퍼 플랫폼 운영과 신규 모델 프로젝트에 참여했습니다.\nUI/UX 개선, 신규 모델 견적 및 계약 로직 구축 등 전반적인 프론트엔드 업무를 수행했습니다.',
    techStack: 'Nuxt2, Vue2, Vuex, Scss, Element UI',
    features: [
      '<b>Node.js v14 → v20 업그레이드와 패키지 매니저(yarn → pnpm) 전환</b>을 주도해,<br />가상환경의 메모리 부족 이슈를 해결하고 <b>빌드 시간을 5분에서 1분 40초로 단축</b>했습니다.',
      '전기차 신규 모델 추가 및 현대자동차 임직원 전용 캐스퍼 구매서비스 구축 프로젝트에서<br /><b>전기차 보조금·세제 혜택·직원 할인 기능 개발을 전담</b>했습니다.',
      '중복되는 UI 템플릿과 함수 코드를 <b>공통화하여 라인 수를 줄이고 업무 효율을 개선</b>했습니다.',
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
      '<b>PR·Issue 템플릿을 제작 및 도입</b>하여 개발 내역을 체계화하고 협업 효율성을 높였습니다.',
      '플레이스 페이지에 레스토랑 리스트 데이터 필더링과 페이지네이션을 적용하였고,<br /><b>카카오맵 지도 중심 이동에 따른 데이터 호출 및 마커/오버레이 커스텀</b> 기능을 구현했습니다.',
      '<b>react-calendar를 기반 캘린더 페이지</b>를 제작하고, 로그인 및 날짜별 데이터에 따라 동적 UI를 구현했습니다.',
      '<b>파이썬 크롤러</b>를 개발해 네이버맵 기준 회사 근처 식당 300여 개의 데이터를 자동 수집했습니다.',
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
      '<b>canvas 태그와 애니메이션</b>을 활용해 떡국 고명을 뽑을 수 있는 룰렛 컴포넌트를 구현했습니다.<br /><b>룰렛에는 가중치 기반 확률 알고리즘을 적용하여 옵션 별 등장 확률을 세밀하게 조정</b>했습니다.',
      '회원가입 없이도 주요 기능을 직접 경험할 수 있도록<b> 게스트 모드를 구현</b>해 사용자의 진입 장벽을 낮췄습니다.',
      '<b>3개월의 운영기간 중 전체 순 방문자(UV) 대비 49%의 회원 전환율, 60~80%의 재방문율을 달성</b>했습니다.<br />또한, 롤링페이퍼 오픈 당일 평균 체류 시간도 최대 9분 23초까지 증가하는 성과를 거두었습니다.',
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
      '<b>900개 데이터에 무한 스크롤·이미지 Lazy Loading</b>을 적용해 성능을 개선하고,<br />Lighthouse 성능 점수는 60점에서 80점, 검색엔진 최적화 점수는 100점으로 향상시켰습니다.',
      '<b>페이지별 인증/인가 route와 Axios Interceptor</b> 를 구현하여 중복 코드와 휴먼 감소시켰습니다.',
      '<b>추천 검색어(디바운스)·지도 기반 리스트 자동 갱신</b> 등 사용자 편의성을 높이는 핵심 기능을 직접 구현했습니다.',
    ],
  },
]
