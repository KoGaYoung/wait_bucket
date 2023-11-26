import { makeAutoObservable } from 'mobx';

export type TSessionStore = {};

/**
 * 유저 정보 전역상태로 관리
 */
class SessionStore implements TSessionStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default SessionStore;
