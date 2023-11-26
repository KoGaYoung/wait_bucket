/**
 *  메인 컴포넌트로 작동
 * 
 * 전역 CSS 적용
 * 레이아웃 설정
 * 상태 관리: Redux, Context API 등을 사용하여 애플리케이션의 전역 상태를 관리
 * 외부 리소스 로드: 글로벌한 설정이나 외부 리소스(예: 트, 외부 라이브러리)를 로드
 * @param param0 
 * @returns 
 */
import React from 'react';
import '../style/globals.css'; // 전역 스타일을 여기에 포함시킬 수 있습니다

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
