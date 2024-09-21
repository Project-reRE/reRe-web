import { getSession } from 'next-auth/react';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { refreshKakaoToken, verifyToken } from 'api/auth/[...nextauth]/tokenmanager';

import { PATH } from 'constant/path';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const cookieStore = cookies();
  const access_token = cookieStore.get('connect.sid')?.value;
  const refresh_token = cookieStore.get('refresh_token')?.value;

  if (access_token) {
    requestHeaders.set('Authorization', `Bearer ${access_token}`);
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

  // 액세스 토큰이 없으면 로그인 페이지로 리디렉션
  if (!access_token) {
    // return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // 토큰 유효성 검사
  const isTokenValid = await verifyToken(access_token!);

  // 토큰이 만료되었으면, refresh_token을 이용해 새로운 토큰 발급
  // !isTokenValid && kakaoRefreshToken
  if (!isTokenValid && refresh_token) {
    // try {
    //   const data = await refreshKakaoToken(refresh_token);
    //   console.log(data);
    //   // // 새로운 토큰을 쿠키에 저장
    //   const response = NextResponse.redirect(request.url);
    //   response.cookies.set('connect.sid', data.access_token, {
    //     path: '/',
    //     httpOnly: true,
    //     secure: true,
    //     expires: new Date(data.expires_in * 1000),
    //   });
    //   // // refresh_token이 갱신되면 새로 저장
    //   if (data.refreshToken) {
    //     response.cookies.set('refresh_token', data.refreshToken, {
    //       path: '/',
    //       httpOnly: true,
    //       secure: true,
    //       maxAge: 30 * 24 * 60 * 60, // 30일
    //     });
    //   }
    //   return response;
    // } catch (error) {
    //   console.error('토큰 갱신 실패:', error);
    //   // 토큰 갱신 실패 시, 로그인 페이지로 리디렉션
    //   // return NextResponse.redirect(new URL('/sign-in', request.url));
    // }
  }

  return response;
}
