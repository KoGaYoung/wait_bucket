# wait_bucket
### 버킷아 잠시만 기다려줘

# 실행방법
~~~
npm install && npm run dev:lint
~~~

# 기술스택
~~~
server: oracle clude free tier
back-end: nodeJS
front-end: nextJS + typescript

-> 오라클클라우드 가입 오류로 일단 모킹환경구성해서 작업한다..^^ㅠㅠ
(aws에 올려야지....)
~~~

## 프로젝트 생성
~~~
npx create-next-app@latest wait_bucket --typescript
~~~

## eslint 적용 + prettier 적용
~~~
npm eslint --init

eslintrc.js 파일 수정

npm install concurrently --save-dev

package.json 파일 script 수정
"lint": "eslint . --ext .js,.jsx,.ts,.tsx",
"dev:lint": "concurrently \"npm run dev\" \"npm run lint\""

prettier 적용
npm install --save-dev prettier
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
.eslintrc.js 수정
.prettierrc 파일 생성 + 커스텀 옵션 추가

.vscode 폴더 생성 후 setting.json 추가
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
├── pages (페이지 컴포넌트 저장, 구조에 맞춰서 자동 라우터 생성)
│   ├── _app.tsx (메인 컴포넌트, 얘부터 실행 됨 ) 
│   ├── index.tsx (애플리케이션의 루트, '/' 홈화면에 해당됨 )
│   ├── login.tsx
│   ├── wait.tsx
│   └── wish-tree.tsx 
├── src (주요 소스 코드를 저장)
│   ├── api (API 호출, 관련 소스)
│   ├── components (공통 컴포넌트 - 버튼, 팝업 등)
│   ├── hooks (커스텀 훅 - 데이터 가져오기, 상태 관리)
│   ├── mock (모킹 msw - )
│   ├── store (전역상태)
│   └── layout.tsx (페이지 전체 레이아웃)
├── style
│
├── next-env.d.ts (타입스크립트에 대한 설정)
├── next.config.js (서버 사이드 렌더링, 빌드 최적화, 환경 변수 설정, 웹팩(Webpack) 구성)
├── tsconfig.json (타입스크립트 컴파일러의 설정)
├── .eslintrc.json (eslint 설정)
└── .env.local (환경변수)


* 편한대로 mobx 작업하고 react query 적용 예정
~~~

### 기획부터 배포까지 모든걸 혼자 하다보니 draw.io로 작업하게되었다 [링크](https://app.diagrams.net/#G1gHRkVQwIO7IyHXJN_y9W7Tt8stH0KK6O)
<img width="1361" alt="image" src="https://github.com/KoGaYoung/wait_bucket/assets/36693355/b6ef4c3b-d497-46b2-8a8b-289557330cf1">
