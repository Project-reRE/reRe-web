import NextAuth, { Awaitable, CallbacksOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
import { OAuthConfig } from 'next-auth/providers/oauth';
import http from './http';

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

  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      const res = await http.get('/auth/kakao', { 'kakao-token': account.access_token });
      return true; // true를 반환하면 로그인이 허용됨
    },
    async redirect({ url, baseUrl }: any) {
      // 로그인 후 리디렉션 URL 설정
      return baseUrl;
    },
    async session({ session, user }: any) {
      // 세션에 사용자 정보 추가
      session.user = user;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      // JWT 토큰에 사용자 정보 추가
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

export default AuthOptions;
