import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '@store/useStore';

interface IOpen {
  isOpen: 'Y' | 'N';
}

/**
 * 서비스 오픈 여부 API 호출 ('/open/${year}')
 * Y -> 내 트리 확인하기 버튼 노출
 * N -> wait 페이지로 리다이렉트
 */
const Home = () => {
  const router = useRouter();
  const { httpStore } = useStore();

  useEffect(() => {
    httpStore.get<IOpen>('/open/2023').then((res) => {
      if (res.status !== 200) {
        return;
      }

      // 서비스 오픈 전
      if (res.data.isOpen !== 'N') {
        router.push('/wait');
      } else {
        // 내 소원 트리 확인하기 버튼 노출
      }
    });
  }, [httpStore, router]);

  return (
    <div>
      <h1>Welcome to Our Website!!!!!!!!</h1>
      <p>This is the homepage of our Next.js application.</p>
      {/* 여기에 추가적인 컴포넌트나 내용을 렌더링할 수 있습니다. */}
    </div>
  );
};

export default Home;
