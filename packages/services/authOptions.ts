import NextAuth, { Awaitable, CallbacksOptions, Session } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
import { OAuthConfig } from 'next-auth/providers/oauth';
import http from './http';
import { SignInResponse } from 'next-auth/react';

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
      const res = await http.get<{ jwt: string }>('/auth/kakao', {
        'kakao-token': account.access_token,
      });
      console.log(account, res);
      if (res) {
        this.jwt({ token: res.jwt, account, user });
      }
      // if ((res as any)?.statusCode > 200) throw new Error(JSON.stringify(res));

      return true; // true를 반환하면 로그인이 허용됨
    },
    async jwt({ token, account, user }: any) {
      console.log('토긑', account);
      if (account && user) {
        token.accessToken = account.access_token;
        token.accessTokenExpires = account.expires_at * 1000;
        token.refreshToken = account.refresh_token;

        return token;
      }

      const nowTime = Date.now();
      const accessTokenExpires = token.accessTokenExpires as number;
      const TEN_MINUTES_AGO_IN_MS = 60 * 10 * 1000; // 10분

      const shouldRefreshTime = accessTokenExpires - nowTime - TEN_MINUTES_AGO_IN_MS;

      if (shouldRefreshTime > 0) {
        return token;
      }

      return refreshAccessToken(token);
    },

    async session({ session, token }: any) {
      const sessionUser = {
        ...token,
      };

      delete sessionUser.refreshToken;
      session.user = sessionUser as any;

      return session;
    },

    async redirect({ url, baseUrl }: any) {
      // 로그인 후 리디렉션 URL 설정
      return baseUrl;
    },
  },
};

export default AuthOptions;
