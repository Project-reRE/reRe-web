// user 객체에 id와 acceessToken 프로퍼티 타입을 추가함
declare module 'next-auth' {
  interface User {
    accessToken: string;
  }
  interface Session {
    accessToken: string;
  }
  interface JWT {
    accessToken: string;
  }
}
