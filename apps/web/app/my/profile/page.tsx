'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';
import http from 'http';

import { useGetMyProfile } from '../../../../../packages/services/services/users';

const MyProfilePage = () => {
  const { data: myProfileData } = useGetMyProfile();

  const handleClickEmail = () => {
    // pevelopment@gmail.com
  };

  console.log(myProfileData);

  return (
    <div className="flex flex-col gap-[64px]">
      <div className="flex gap-[24px]">
        <div className="h-[150px] w-[150px] rounded-full bg-[#d9d9d9]" />
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[28px] font-medium text-white">{myProfileData?.nickName}</p>
            <div className="text-base font-normal text-[#cccccc]">남성 1985년생</div>
            <div className="text-Orange50 text-lg font-medium">재평가한 콘텐츠 수 : 000,000,000개</div>
          </div>
          <div className="text-base font-normal text-[#cccccc]">gihoikja@naver.com</div>
        </div>
      </div>
      <div>
        <p className="text-Gray60 text-lg font-normal">서비스 안내</p>
        <ul>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              공지사항 보기
            </a>
          </li>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              자주 묻는 질문과 답변보기
            </a>
          </li>
          <li className="text-Gray80 py-[24px] text-xl font-medium" onClick={handleClickEmail}>
            이메일로 문의하기
          </li>
        </ul>
      </div>
      <div>
        <p className="text-Gray60 text-lg font-normal">서비스 약관</p>
        <ul>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              서비스 이용약관 보기
            </a>
          </li>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              개인정보 처리방침 보기
            </a>
          </li>
          <li className="text-Gray80 py-[24px] text-xl font-medium">
            <a href="https://revaluation.notion.site/72ff79808476490aa5feb170caa59652" target="block">
              운영정책 보기
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-Gray60 text-lg font-normal">라이선스</p>
        <ul>
          <li className="text-Gray80 py-[24px] text-xl font-medium">
            <a href="" target="block">
              사용한 오픈 API 보기
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <button className="text-Gray60 inline-flex h-[52px] w-[343px] items-center justify-center gap-2.5 rounded-xl bg-[#444444] px-6 py-4 text-center text-[17px] font-medium">
          로그아웃하기
        </button>
        <button className="text-Gray40 text-center text-xl font-medium">회원 탈퇴하기</button>
      </div>
    </div>
  );
};

export default MyProfilePage;
