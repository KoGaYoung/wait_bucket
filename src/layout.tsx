import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Google의 Inter 폰트를 불러오는 코드
const inter = Inter({ subsets: ['latin'] });

// SEO에 사용
export const metadata: Metadata = {
  title: 'wait bucket',
  description: '버킷아 잠시만 기다려줘',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
