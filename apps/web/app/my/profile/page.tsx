'use client';

import React from 'react';

const MyProfilePage = () => {
  const handleClickEmail = () => {
    // pevelopment@gmail.com
  };

  return (
    <div className="flex flex-col gap-[64px]">
      <div className="flex gap-[24px]">
        <div className="h-[150px] w-[150px] rounded-full bg-[#d9d9d9]" />
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Pretendard'] text-[28px] font-medium text-white">냉혹한 재평론가1</p>
            <div className="font-['Pretendard'] text-base font-normal text-[#cccccc]">남성 1985년생</div>
            <div className="font-['Pretendard'] text-lg font-medium text-[#c85a27]">
              재평가한 콘텐츠 수 : 000,000,000개
            </div>
          </div>
          <div className="font-['Pretendard'] text-base font-normal text-[#cccccc]">gihoikja@naver.com</div>
        </div>
      </div>
      <div>
        <p className="text-lg font-normal text-[#919191]">서비스 안내</p>
        <ul>
          <li className="border-Gray20 border-b-[1px] py-[24px] text-xl font-medium text-[#d1d1d1]">
            <a href="">공지사항 보기</a>
          </li>
          <li className="border-Gray20 border-b-[1px] py-[24px] text-xl font-medium text-[#d1d1d1]">
            <a href="">자주 묻는 질문과 답변보기</a>
          </li>
          <li className="py-[24px] text-xl font-medium text-[#d1d1d1]" onClick={handleClickEmail}>
            이메일로 문의하기
          </li>
        </ul>
      </div>
      <div>
        <p className="text-lg font-normal text-[#919191]">서비스 약관</p>
        <ul>
          <li className="border-Gray20 border-b-[1px] py-[24px] text-xl font-medium text-[#d1d1d1]">
            <a href="">서비스 이용약관 보기</a>
          </li>
          <li className="border-Gray20 border-b-[1px] py-[24px] text-xl font-medium text-[#d1d1d1]">
            <a href="">개인정보 처리방침 보기</a>
          </li>
          <li className="py-[24px] text-xl font-medium text-[#d1d1d1]">
            <a href="">운영정책 보기</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-lg font-normal text-[#919191]">라이선스</p>
        <ul>
          <li className="border-Gray20 border-b-[1px] py-[24px] text-xl font-medium text-[#d1d1d1]">
            <a href="">사용한 오픈소스 라이선스 보기</a>
          </li>
          <li className="border-Gray20 border-b-[1px] py-[24px] text-xl font-medium text-[#d1d1d1]">
            <a href="">사용한 오픈 API 보기</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <button className="inline-flex h-[52px] w-[343px] items-center justify-center gap-2.5 rounded-xl bg-[#444444] px-6 py-4 text-center font-['Pretendard'] text-[17px] font-medium text-[#919191]">
          로그아웃하기
        </button>
        <button className="text-center font-['Pretendard'] text-xl font-medium text-[#5e5e5e]">회원 탈퇴하기</button>
      </div>
    </div>
  );
};

export default MyProfilePage;
