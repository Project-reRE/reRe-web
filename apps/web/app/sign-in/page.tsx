'use client';

import React, { HTMLAttributes } from 'react';
import { signIn } from 'next-auth/react';
import { AppleSocialIcon, GoogleSocialIcon, KakaoSocialIcon, LogoIcon } from '@repo/icon';

const EmptyBox = () => (
  <div className="flex h-6 w-6 items-center justify-center px-0.5 pb-[2.53px] pt-[3px] opacity-0" />
);

function SignInPage() {
  const signInKaKao = () => {
    signIn('kakao', { callbackUrl: 'http://localhost:3000/sign-in' });
  };

  const buttonStyle =
    'flex h-[52px] w-[360px] items-center justify-between rounded-lg px-5 py-3.5 ' as HTMLAttributes<HTMLElement>['className'];

  return (
    <div className="flex min-h-[calc(100vh-103px-165px)] flex-col items-center justify-center gap-[76px]">
      <div>
        <span className="text-base font-semibold leading-relaxed text-white">그거, 지금 봐도 재밌을까?</span>
        <LogoIcon />
        <span className="text-Gray60 text-2xl font-medium leading-relaxed">콘텐츠 재평가 플랫폼</span>
      </div>
      <div className="flex flex-col gap-[16px]">
        <button className={buttonStyle + 'bg-[#ffe812]'} onClick={signInKaKao}>
          <KakaoSocialIcon />
          <div className="text-[15px] text-[#131415]">Kakao로 계속하기</div>
          <EmptyBox />
        </button>
        <button className={buttonStyle + 'bg-black'}>
          <AppleSocialIcon />
          <div className="text-[15px] text-white">Apple로 계속하기</div>
          <EmptyBox />
        </button>
        <button className={buttonStyle + 'bg-white'}>
          <GoogleSocialIcon />
          <div className="text-[15px] text-[#141414]">Google로 계속하기</div>
          <EmptyBox />
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
