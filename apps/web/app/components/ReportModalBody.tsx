'use client';

import React, { HTMLAttributes, useState } from 'react';

const ReportModalBody = () => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleClickOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const isActiveSendBtn = selectedOption !== null;
  const activeStyle = 'bg-Orange50 text-White' as HTMLAttributes<HTMLElement>['className'];

  return (
    <div className="flex flex-col gap-[20px] rounded-2xl bg-neutral-800 px-[16px] py-[24px]">
      <p className="text-center text-lg font-semibold text-white">신고하기</p>
      <ul className="flex flex-col gap-[12px]">
        <li className="text-sm font-normal text-[#d1d1d1]">
          <label className="flex gap-[10px]">
            <input type="radio" name="report" value={0} onChange={handleClickOption} />
            욕설 및 부적절한 표현
          </label>
        </li>
        <li className="text-sm font-normal text-[#d1d1d1]">
          <label className="flex gap-[10px]">
            <input type="radio" name="report" value={1} onChange={handleClickOption} />
            저작권 침해
          </label>
        </li>
        <li className="text-sm font-normal text-[#d1d1d1]">
          <label className="flex gap-[10px]">
            <input type="radio" name="report" value={2} onChange={handleClickOption} />
            타인의 명예 훼손
          </label>
        </li>
        <li className="text-sm font-normal text-[#d1d1d1]">
          <label className="flex gap-[10px]">
            <input type="radio" name="report" value={3} onChange={handleClickOption} />
            성적인 내용
          </label>
        </li>
      </ul>
      <div className="flex gap-[7.25px]">
        <button className="flex h-11 w-[151.42px] items-center justify-center rounded-lg bg-[#364a6c] text-[15px] font-medium text-white">
          취소
        </button>
        <button
          className={`bg-Gray30 text-Gray60 flex h-11 w-[151.42px] items-center justify-center rounded-lg text-[15px] font-medium ${isActiveSendBtn ? activeStyle : ''} `}
        >
          신고하기
        </button>
      </div>
    </div>
  );
};

export default ReportModalBody;
