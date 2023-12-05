import { useRouter } from 'next/router';

const Wait = () => {
  const router = useRouter();

  /**
   * 버킷 기록하기 버튼 클릭이벤트
   * 로그인 -> my bucket
   * 비로그인 -> login
   */
  const onClickWriteButton = () => {

  };

  return (
    <div>
      <p>1월 1일에 만나요</p>
      <p>1월 1일까지 남은 시간</p>
      <button onClick={onClickWriteButton}>내 버킷 기록하기</button>
    </div>
  );
};

export default Wait;
