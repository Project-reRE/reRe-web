import { Session } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

import http from './http';

const refreshAccessToken = async (token: string) => {};

const AuthOptions = {
  pages: {
    signIn: 'sign-in',
  },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_SECRET!,
    }),
  ],

  session: {
    strategy: 'jwt',
    // Seconds - How long until an idle ses
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      return true; // true를 반환하면 로그인이 허용됨
    },

    // 1. jwt 콜백에서 API의 JWT를 받아와 저장
    async jwt({ token, account, user }: any) {
      if (account && user) {
        token.accessToken = account.access_token;

        console.log(account.access_token);

        if (user) {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/kakao`, {
            method: 'GET',
            headers: {
              'kakao-token': `${account.access_token}`,
              'Content-Type': 'application/json',
            },
          });
          const { jwt } = await response.json();
          // API에서 받아온 JWT를 token 객체에 저장

          return { ...token, jwtToken: jwt }; // 반환된 token은 session 콜백에서 사용됨
        }
      }

      return token;
    },

    // 2. session 콜백에서 jwt를 세션에 포함
    async session({ session, token }: { session: Session; token: any }) {
      console.log(session, token.jwtToken);

      if (token.jwtToken) {
        http.headerInit(token.jwtToken);
      }

      if (session && !token.jwtToken) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/kakao`, {
            method: 'GET',
            headers: {
              'kakao-token': `${token.accessToken}`,
              'Content-Type': 'application/json',
            },
          });

          const { jwt } = await response.json();
          console.log('jwt 재발급', jwt);
          http.headerInit(jwt);
          return { ...session, token: jwt };
        } catch (e) {
          console.log(e);
        }
      }

      return { ...session, token: token.jwtToken };
    },

    async redirect({ url, baseUrl }: any) {
      // 로그인 후 리디렉션 URL 설정
      return baseUrl;
    },
  },
};

export default AuthOptions;
