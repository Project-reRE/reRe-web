import { Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import { cookies } from 'next/headers';

const refreshAccessToken = async (token: string) => {};

const getGoogleCredentials = () => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET!;

  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID');
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET');
  }

  return { clientId, clientSecret };
};

const AuthOptions = {
  pages: {
    signIn: 'sign-in',
    error: '/sign-up',
  },
  providers: [
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ account, user }: any) {
      const cookieStore = cookies();

      const getToken = async (account: any) => {
        cookieStore.set('provider', account.provider, { httpOnly: true, secure: true, path: '/' });
        if (account.refresh_token) {
          cookieStore.set('refresh_token', account.refresh_token, { httpOnly: true, secure: true, path: '/' });
        }

        const tokenHeader = () => {
          switch (account.provider) {
            case 'kakao':
              return { 'kakao-token': `${account.access_token}` };
            case 'google':
              return { 'google-token': `${account.access_token}` };
            default:
              return { 'apple-token': `${account.access_token}` };
          }
        };

        const headers = {
          'Content-Type': 'application/json',
          ...tokenHeader(),
        } as HeadersInit | any;

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/${account.provider}`, {
          method: 'GET',
          headers,
        });

        const data = await res.json();
        const jwt = data.jwt;
        if (jwt) {
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

      const res = await getToken(account);
      if (res.statusCode === 404) {
        cookieStore.set('email', user.email, { httpOnly: true, secure: true, path: '/' });
        cookieStore.set('access_token', account.access_token, { httpOnly: true, secure: true, path: '/' });
        return false;
      } else {
        return true;
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
      return url.startsWith(baseUrl) ? url : baseUrl;

      // // Allows relative callback URLs
      // if (url.startsWith('/')) return `${baseUrl}${url}`;
      // // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return url;
      // return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default AuthOptions;
