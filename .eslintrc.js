module.exports = {
  // 코드가 실행될 환경을 설정  
  env: {
    browser: true, // 브라우저 환경 코드
    node: true, // Node.js 환경 코드
    es2021: true // ECMAScript 2021 규칙 사용
  },

  // eslint 규칙 확장
  extends: [
    "airbnb", // Airbnb의 JavaScript 스타일 가이드 적용
    "airbnb/hooks", // Airbnb 스타일 가이드 내 React Hooks 규칙 적용
    "plugin:@typescript-eslint/recommended", // TypeScript 규칙 적용
    "next", // Next.js 기본 ESLint 설정 적용
    "next/core-web-vitals", // Next.js의 Core Web Vitals 최적화 규칙 적용
    "plugin:prettier/recommended" // Prettier 추천 설정 추가
  ],

  // typescript 코드 분석
  parser: "@typescript-eslint/parser", // TypeScript 코드를 분석하기 위한 파서

  // ESLint가 코드를 분석할 때 사용하는 옵션들을 설정
  parserOptions: {
    ecmaFeatures: {
      jsx: true // JSX 문법 사용 가능
    },
    ecmaVersion: '2021', // ECMAScript 2021 문법 사용
    sourceType: 'module', // ES 모듈 문법 사용
    project: "./tsconfig.json" // 프로젝트의 TypeScript 설정 파일
  },

  // 리액트 버전 감지 설정
  settings: {
    react: {
      "version": "detect" // React 버전 자동 감지
    }
  },

  // 커스텀 eslint 규칙
  rules: {
    "react/react-in-jsx-scope": "off", // React 17 이상에서는 JSX에서 React를 import할 필요가 없음
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }], // .tsx 확장자에서 JSX 사용 허용
    "@typescript-eslint/explicit-module-boundary-types": "off", // 모듈 경계 타입을 명시적으로 선언하지 않아도 됨
    "prettier/prettier": "error", // Prettier 규칙을 에러로 표시
    "react/function-component-definition": [0, { "namedComponents": "arrow-function" }] // 컴포넌트 화살표함수 허용
  },

  // ESLint 플러그인
  plugins: [
    "@typescript-eslint", // TypeScript 관련 ESLint 플러그인
    "react", // React 관련 ESLint 플러그인
    "react-hooks" // React Hooks 관련 ESLint 플러그인
  ],

  // eslint 예외처리 제외
  overrides: [
    {
      files: ['_app.tsx'], // 또는 파일의 경로에 맞게 조정
      rules: {
        'react/jsx-props-no-spreading': 'off'
      }
    }
  ]
};
