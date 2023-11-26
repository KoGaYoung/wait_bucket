import { makeAutoObservable } from 'mobx';

export type THttpStore = {
};

/**
 * axios 공통 처리
 * request, response interceptor 구현
 * 네트워크 상태 메롱인 경우 처리로직 구현
 */
class HttpStore implements THttpStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default HttpStore;
