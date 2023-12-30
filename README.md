# wait_bucket
### 버킷아 잠시만 기다려줘

# 실행방법
~~~
npm install && npm run dev:lint
~~~

# 기술스택
~~~
server: aws 
back-end: nodeJS + express
front-end: nextJS + typescript

적용하고싶은 내용
next는 tailwind
mobx -> reactquery + zustand(or zotai) (migration)
router 라우터 정보 읽고 페이지 이동 개발자 편의도구 만들기 (mermaidJS)
swagger 파일 읽어서 api 호출 리스트 만들어주는 기능만들기
// storybook -> ui components에 적용
// jest -> 테스트 함수 작성
~~~

## 프로젝트 생성
~~~
npx create-next-app@latest wait_bucket --typescript
~~~


## 쾌적한 개발을 위해 모킹환경 구성
~~~
사용해오던 Mock.JS -> MSW를 사용한 이유
1. 실제 HTTP를 가로채서 더 실제와 같은 모킹환경 제공
2. node환경에서도 제공됨(프론트 백 동일하게 사용가능)
3. restful api, graphQL 지원함 (graphQL로 마이그레이션 해볼 의향이 있기에 이 이유가 가장 큼)

msw 2.x버전의 경우 next 14버전과 호환이 안된다. (공식 업데이트가 얼마 되지 않아 레퍼런스가 별로없다)
msw 1.x버전으로 개발
~~~

## 프로젝트 구조 
~~~
├── public
│   └── mockServiceWorker.js
├── pages (View, 폴더 구조에 맞춰서 라우터 자동생성)
│   ├── _app.tsx (메인 컴포넌트, 여기부터 실행 됨) 
│   ├── index.tsx ('/', 홈 화면에 해당)
│   ├── login.tsx
│   ├── wait.tsx
│   └── wish-tree.tsx 
├── src (주요 소스 코드)
│   ├── api (API 호출 관련 소스)
│   ├── components (공통 컴포넌트 - 버튼, 팝업 등)
│   ├── hooks (커스텀 훅 - 데이터 가져오기, 상태 관리)
│   ├── mock (모킹 msw)
│   ├── store (전역상태)
│   └── layout.tsx (페이지 전체 레이아웃)
├── style
│
├── next-env.d.ts (타입스크립트에 대한 설정)
├── next.config.js (서버 사이드 렌더링, 빌드 최적화, 환경 변수 설정, 웹팩(Webpack) 구성)
├── tsconfig.json (타입스크립트 컴파일러의 설정)
├── .eslintrc.json (eslint 설정)
├── .env (환경변수)
└── .env.local (로컬 환경변수)


* 편한대로 mobx 작업하고 react query 적용 예정
~~~

## 전역상태
~~~
httpStore: Axios 관련 restful api 공통 처리
sessionStore: 유저 정보 관련
~~~

### 기획부터 배포까지 모든걸 혼자 하다보니 draw.io로 작업하게되었다 [링크](https://app.diagrams.net/#G1gHRkVQwIO7IyHXJN_y9W7Tt8stH0KK6O)
![Uploading image.png…]()
