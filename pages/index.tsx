import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '@store/useStore';

/**
 * 서비스 오픈 여부 API 호출 ('/open/${year}')
 * Y -> 내 트리 확인하기 버튼 노출
 * N -> wait 페이지로 리다이렉트
 */
const Home = () => {
  const router = useRouter();
  const { httpStore } = useStore();

    useEffect(()=> {
      httpStore
        .get<{ isOpen: 'Y' | 'N' }>('/open/2023', {})
        .then((res) => {
          console.log(res);
          if(res.isOpen === 'Y') {
             router.push('/wait');
          }
          else {
            // 내 트리 확인하기 버튼 노출
          }
        });
    },[]);


  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>This is the homepage of our Next.js application.</p>
      {/* 여기에 추가적인 컴포넌트나 내용을 렌더링할 수 있습니다. */}
    </div>
  );
};

export default Home;
