module.exports = {
  // 코드가 실행될 환경을 설정  
  env: {
    // 브라우저 환경 코드
    browser: true,

    // Node.js 환경 코드
    node: true,

    // ECMAScript 2021 규칙 사용
    es2021: true
  },

  // eslint 규칙 확장
  extends: [
    // Airbnb의 JavaScript 스타일 가이드 적용
    "airbnb",

    // Airbnb 스타일 가이드 내 React Hooks 규칙 적용
    "airbnb/hooks", 

    // TypeScript 규칙 적용
    "plugin:@typescript-eslint/recommended", 

    // Next.js 기본 ESLint 설정 적용
    "next", 

    // Next.js의 Core Web Vitals 최적화 규칙 적용
    "next/core-web-vitals", 

    // Prettier 추천 설정 추가
    "plugin:prettier/recommended" 
  ],

  // typescript 코드 분석
  parser: "@typescript-eslint/parser",

  // ESLint가 코드를 분석할 때 사용하는 옵션들을 설정
  parserOptions: {
    ecmaFeatures: {
      // JSX 문법 사용 가능
      jsx: true 
    },

    // ECMAScript 2021 문법 사용
    ecmaVersion: '2021',

    // ES 모듈 문법 사용
    sourceType: 'module',

    // 프로젝트의 TypeScript 설정 파일
    project: "./tsconfig.json" 
  },

  // 리액트 버전 감지 설정
  settings: {
    react: {
      "version": "detect"
    },
  },

  // 커스텀 eslint 규칙
  rules: {
     // React 17 이상에서는 JSX에서 React를 import할 필요가 없음
    "react/react-in-jsx-scope": "off",

    // jsx 확장자 파일은 무조건 tsx 확장자로 사용해야함
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],

    // 모듈 경계 타입을 명시적으로 선언하지 않아도 됨
    "@typescript-eslint/explicit-module-boundary-types": "off", 

    // Prettier 규칙을 에러로 표시
    "prettier/prettier": "error",

    // 컴포넌트 화살표함수 허용
    "react/function-component-definition": [0, { "namedComponents": "arrow-function" }],

    // devDependancy에만 있는 설정도 사용 가능
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],

    // 확장자명 생략 가능
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },

  // ESLint 플러그인
  plugins: [
    // TypeScript 관련 ESLint 플러그인
    "@typescript-eslint",

    // React 관련 ESLint 플러그인
    "react", 

    // React Hooks 관련 ESLint 플러그인
    "react-hooks"
  ],

  // eslint 예외처리 제외 -> 스프레드 연산자 허용
  overrides: [
    {
      files: ['_app.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off'
      }
    }
  ]
};
