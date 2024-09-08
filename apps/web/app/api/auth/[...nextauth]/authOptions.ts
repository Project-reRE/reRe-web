import { Session } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { cookies } from 'next/headers';

const refreshAccessToken = async (token: string) => {};

const AuthOptions = {
  pages: {
    signIn: 'sign-in',
  },
  providers: [
    //  provider: 'kakao',
    //  type: 'oauth',
    //  providerAccountId: '3608367125',
    //  access_token: 'WbDrmYfgN3oGIcI81zHfZFhFmqCvNxNLAAAAAQo9c-sAAAGR0LhsieiSikwhugC4',
    //  token_type: 'bearer',
    //  refresh_token: 'ncXh1mUaITh8oNz4jzIEMJtCxbqclmF4AAAAAgo9c-sAAAGR0LhshOiSikwhugC4',
    //  expires_at: 1725805231,
    //  scope: 'account_email',
    //  refresh_token_expires_in: 5183999
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
    async signIn({ account }: any) {
      if (account) {
        const cookieStore = cookies();

        cookieStore.set('provider', account.provider, { httpOnly: true, secure: true, path: '/' });
        cookieStore.set('expires_at', account.expires_at, { httpOnly: true, secure: true, path: '/' });
        cookieStore.set('refresh_token', account.refresh_token, { httpOnly: true, secure: true, path: '/' });

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/kakao`, {
          method: 'GET',
          headers: {
            'kakao-token': `${account.access_token}`,
            'Content-Type': 'application/json',
          },
        });
        const { jwt } = await response.json();

        if (jwt) {
          cookieStore.set('connect.sid', jwt, {
            httpOnly: true,
            secure: true,
            path: '/',
          });
        }
        return true; // true를 반환하면 로그인이 허용됨
      }

      return false;
    },

    // 1. jwt 콜백에서 API의 JWT를 받아와 저장
    async jwt({ token }: any) {
      return token;
    },

    // 2. session 콜백에서 jwt를 세션에 포함
    async session({ session }: { session: Session }) {
      return session;
    },

    async redirect({ url, baseUrl }: any) {
      // 로그인 후 리디렉션 URL 설정
      return baseUrl;
    },
  },
};

export default AuthOptions;
