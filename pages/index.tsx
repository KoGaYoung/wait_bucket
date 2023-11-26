import { useState, useEffect } from 'react';
import axios from 'axios';
/**
 * 서비스 오픈 여부 API 호출 ('/open/${year}')
 * Y -> 내 트리 확인하기 버튼 노출
 * N -> wait 페이지로 리다이렉트
 */
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const response = await axios.get('/open/2023');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>This is the homepage of our Next.js application.</p>
      {/* 여기에 추가적인 컴포넌트나 내용을 렌더링할 수 있습니다. */}
    </div>
  );
};

export default Home;
