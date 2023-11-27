/**
 * 메인 컴포넌트로 작동
 * 전역 CSS 적용
 * 레이아웃 설정
 * 상태 관리: Redux, Context API 등을 사용하여 애플리케이션의 전역 상태를 관리
 * 외부 리소스 로드: 글로벌한 설정이나 외부 리소스(예: 폰트, 외부 라이브러리)를 로드
 * getServerSideProps로 먼저 받아와야할지 고려해보기
 */
import '@style/globals.css'; // 전역 스타일
import { StoreProvider } from '@store/useStore';
import { AppProps } from 'next/app';

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const { worker } = require("@mocks/browser");
  worker.start();
}

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;
