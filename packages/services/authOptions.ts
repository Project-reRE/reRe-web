import NextAuth, { Awaitable, CallbacksOptions } from 'next-auth';
import KakaoProvider, { KakaoProfile } from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
import { OAuthConfig } from 'next-auth/providers/oauth';

export const AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? '',
      clientSecret: process.env.KAKAO_SECRET ?? '',
    }),
    // id,pw login
    // CredentialsProvider({
    //   id: 'rere',
    //   name: 'Credentials',
    //   credentials: {
    //     id: { label: 'Id', type: 'text', placeholder: '아이디를 입력해주세요' },
    //     password: { label: 'Password', type: 'password' },
    //   },

    //   async authorize(credentials, req) {
    //     const res = await fetch('/your/endpoint', {
    //       method: 'POST',
    //       body: JSON.stringify(credentials),
    //       headers: { 'Content-Type': 'application/json' },
    //     });
    //     const user = await res.json();

    //     // If no error and we have user data, return it
    //     if (res.ok && user) {
    //       return user;
    //     }
    //     // Return null if user data could not be retrieved
    //     return null;
    //   },
    // }),
  ],

  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }: any) {
  //     try {
  //       const { meta, data: token } = await http.get('/auth-kakao', { 'kakao-token': '' });
  //       // privateToken = token;

  //       return meta.code === 0 || `/signin?errorCode=${meta.code}`;
  //     } catch (error) {}
  //   },
  //   async redirect({ url, baseUrl }: any) {
  //     return baseUrl;
  //   },
  //   async session({ session, user, token }: any) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }: any) {
  //     return token;
  //   },
  // },

  pages: {
    signIn: '/login',
  },
};
