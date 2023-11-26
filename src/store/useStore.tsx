import React, { createContext, useContext, useMemo } from 'react';
import SessionStore, { TSessionStore } from '@store/sessionStore';
import HttpStore, { THttpStore } from '@store/httpStore';

// 전역 상태 타입
export interface GlobalContextType {
  sessionStore: TSessionStore;
  httpStore: THttpStore;
}

// 컨택스트 생성
const globalContext = createContext<GlobalContextType | null>(null);

// 전역으로 설정하기 위한 프로바이더 생성
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const httpStore: THttpStore = useMemo(() => new HttpStore(), []);
  const sessionStore: TSessionStore = useMemo(() => new SessionStore(), []);

  const value = useMemo(() => ({
    httpStore,
    sessionStore
  }), [
    httpStore,
    sessionStore
  ]);

  return (
    <globalContext.Provider value={value}>
      {children}
    </globalContext.Provider>
  );
};

// null 예외처리
export const useStore = (): GlobalContextType => {
  const context = useContext(globalContext);

  if (context === null) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return context;
};
