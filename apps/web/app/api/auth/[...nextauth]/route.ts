import NextAuth from 'next-auth/next';

import AuthOptions from './authOptions';

const handler = NextAuth(AuthOptions as any);
export { handler as GET, handler as POST };
