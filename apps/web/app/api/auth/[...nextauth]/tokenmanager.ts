import { method } from 'lodash';

import { createFormData } from './http';

// 토큰 유효성 검사 함수 (예: 카카오 API를 사용하여 검증)
export async function verifyToken(accessToken: string) {
  try {
    const response = await fetch('https://kapi.kakao.com/v1/user/access_token_info', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // 유효하면 true 반환
    return response.status === 200;
  } catch (error) {
    // 토큰이 유효하지 않거나 만료된 경우 false 반환
    console.error('토큰 유효성 검사 실패:', error);
    return false;
  }
}

// // refresh_token을 사용하여 새로운 access_token 발급
export async function refreshKakaoToken(refreshToken: string) {
  try {
    const response = await fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&client_id=${process.env.KAKAO_CLIENT_ID}&refresh_token=${refreshToken}&client_secret=${process.env.KAKAO_SECRET}`,
    });

    return response.json();
  } catch (error) {
    console.error('카카오 토큰 갱신 실패:', error);
    throw new Error('Failed to refresh Kakao token');
  }
}
