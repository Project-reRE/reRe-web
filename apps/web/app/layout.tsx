import { ReactElement } from 'react';

import type { Metadata } from 'next';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Providers from 'components/Provider';

import '../global.css';

export const metadata: Metadata = {
  title: {
    template: '%s - 리리(reRE): 콘텐츠 재평가 플랫폼',
    default: '데일리 랭킹',
  },
  description:
    '그 영화 지금 봐도 재밌을까? 현재 시점에서 바라본 과거 콘텐츠의 재평가 결과가 궁금하다면 리리(reRE)에서 확인해 보세요!',
};

export default function RootLayout({
  children,
  // pageProps,
}: Readonly<{
  children: ReactElement;
  // pageProps: any;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`bg-Background m-auto h-full w-full min-w-[1152px] max-w-[1152px]`}>
        <Providers>
          <>
            <Header />
            {children}
            {/* {cloneElement(children, pageProps)} */}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
}
