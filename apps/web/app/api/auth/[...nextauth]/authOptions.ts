import { Session } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { cookies } from 'next/headers';

const refreshAccessToken = async (token: string) => {};

const AuthOptions = {
  pages: {
    signIn: 'sign-in',
    error: '/sign-up',
  },
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ account, user }: any) {
      if (account.provider === 'kakao') {
        console.log(user.email);
        const cookieStore = cookies();

        const getToken = async () => {
          cookieStore.set('provider', account.provider, { httpOnly: true, secure: true, path: '/' });
          cookieStore.set('refresh_token', account.refresh_token, { httpOnly: true, secure: true, path: '/' });

          const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/kakao`, {
            method: 'GET',
            headers: {
              'kakao-token': `${account.access_token}`,
              'Content-Type': 'application/json',
            },
          });

          const data = await res.json();
          const jwt = data.jwt;
          if (jwt) {
            console.log(jwt);
            const expirationDate = new Date(account.expires_at * 1000);
            cookieStore.set('connect.sid', jwt, {
              httpOnly: true,
              secure: true,
              path: '/',
              // expires: expirationDate,
            });
          }

          return data;
        };

        const res = await getToken();

        if (res.statusCode === 404) {
          cookieStore.set('email', user.email, { httpOnly: true, secure: true, path: '/' });
          cookieStore.set('access_token', account.access_token, { httpOnly: true, secure: true, path: '/' });
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
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
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

export default AuthOptions;
