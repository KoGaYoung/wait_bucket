import { rest } from 'msw';
import { IResponse } from '@store/httpStore';

// 로컬 Mock API도 실제와 동일하게 데이터 보여지도록 구성
interface MockAxiosResponse<T> {
  data: T; // The server response
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: {}; // Axios request config
  request?: any; // Request that generated this response
}

/**
 * IResponse<T> -> MockAxiosResponse<IResponse<T>
 * @param data 
 * @returns 
 */
const convertMcokResponse = <T>(data: IResponse<T>) : MockAxiosResponse<IResponse<T>> => {
   const mockAxiosResponse: MockAxiosResponse<IResponse<T>> = {
      data,
      status: 200,
      statusText: 'OK',
      headers: { 'Content-Type': 'application/json' },
      config: {},
    };

    return mockAxiosResponse;
}

export const handlers = [
  rest.get('http://localhost:3000/open/:year', (req, res, ctx) => {
    const year = req.params.year;
    const isOpen = year === '2023';

    return res(ctx.status(200), ctx.json(convertMcokResponse({
        status: 200,
        code: 'success.code.00000',
        message: 'Success',
        data: { isOpen: isOpen ? 'Y' : 'N' },
      })));
  }),
  // 다른 API 핸들러들을 여기에 추가
];
