import { rest } from 'msw';

interface Response {
  status: number;
  code: string;
  message: string;
  // data: T;
};

interface IOpen {
  isOpen: 'Y' | 'N'
}

export const handlers = [
  rest.get('http://localhost:3000/open/:year', (req, res, ctx) => {
    const year = req.params.year;

    // 여기서 서비스 오픈 여부를 결정합니다. 예를 들어, 2023년이라면 '오픈'으로 간주합니다.
    const isOpen = year === '2023';

    return res(
      ctx.status(200),
      ctx.json({ isOpen: 'Y' })
    );
  }),
  // 다른 API 핸들러들을 여기에 추가할 수 있습니다.
];
