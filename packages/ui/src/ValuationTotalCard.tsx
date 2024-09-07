import React from 'react';

type Props = {
  numStarsParticipants: number;
  currentMonth: string;
};

const ValuationTotalCard = ({ numStarsParticipants, currentMonth }: Props) => {
  return (
    <div className="flex h-[246px] flex-col gap-[35px] rounded-[14px] bg-neutral-800 px-[24px] py-[20px]">
      <p className="w-full text-[15px] font-medium leading-[18px] text-[#d1d1d1]">
        {currentMonth}월, 재평가에 참여한 사람들
      </p>
      <div className="flex flex-col gap-[5px]">
        <p className="text-xs font-normal leading-[14px] text-[#b3b3b3]">평가자 수</p>
        <p className="text-xl font-bold leading-[24px] text-[#d1d1d1]">{numStarsParticipants}명</p>
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="text-xs font-normal leading-normal text-[#b3b3b3]">평가자 수</p>
        <div className="flex gap-[8px]">
          <div className="flex flex-col gap-[8px]">
            <div className="h-[30px] w-[315px] rounded-lg bg-[#d05b5b]" />
            <p className="text-[13px] font-medium leading-[16px] text-[#d05b5b]">여성 65%</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="h-[30px] w-[145px] rounded-lg bg-[#47628f]" />
            <p className="text-[13px] font-medium leading-[16px] text-[#47628f]">여성 65%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuationTotalCard;
