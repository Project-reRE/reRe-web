import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { PATH } from 'constant/path';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const cookieStore = cookies();
  const accessToken = cookieStore.get('connect.sid')?.value;

  if (accessToken) {
    requestHeaders.set('Authorization', `Bearer ${accessToken}`);
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (request.nextUrl.pathname.startsWith(PATH.SIGN_IN)) {
    // 요청 url이 Login이거나 createAccount일 경우 && 토큰값이 있다면
    // 로그인된 상태로 인지, Home 으로 redirect
    // if (accessToken) return NextResponse.redirect('/');
  }

  return response;
}
