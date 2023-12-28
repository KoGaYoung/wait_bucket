import { makeAutoObservable } from 'mobx';

export type TSessionStore = {
  // 로그인 여부
  isLoggedIn: boolean;

  // 토큰
  token: string | null;

  // 사용자 정보
  userInfo: unknown | null;
};

/**
 * 유저 정보 전역상태로 관리
 * 쿠키 + JWT 토큰 -> 브라우저 종료 이후에도 로그인 세션 유지가능
 */
class SessionStore implements TSessionStore {
  isLoggedIn = false;

  token: string | null = null;

  userInfo: unknown | null = null;

  constructor() {
    makeAutoObservable(this);
    this.initializeSession();
  }

  initializeSession() {
    this.isLoggedIn = false;
    // 쿠키나 로컬 스토리지에서 JWT 토큰을 읽어와 상태를 초기화하는 로직
    // 토큰 유효성 검사 및 사용자 정보 로드 로직
  }

  /**
   * [todo] 쿠키나 로컬 스토리지에 토큰 저장
   * @param token
   * @param userInfo
   */
  login(token: string, userInfo: unknown) {
    this.token = token;
    this.userInfo = userInfo;
    this.isLoggedIn = true;
  }

  /**
   * [todo] 쿠키나 로컬 스토리지에서 토큰 제거
   */
  logout() {
    this.token = null;
    this.userInfo = null;
    this.isLoggedIn = false;
  }
}

export default SessionStore;
