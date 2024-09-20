import React from 'react';

import { InfoIcon } from '@repo/icon';
import { RevaluationResponseDto } from '@repo/services';

type Props = {
  item?: RevaluationResponseDto;
};

const ReviewCard = ({ item }: Props) => {
  const handleReportShowModal = () => {};

  return (
    <article className="flex h-fit w-full flex-col justify-between gap-[32px] rounded-xl bg-neutral-800 p-6">
      <div className="flex items-center justify-between gap-[10px]">
        <img className="h-11 w-11 rounded-full" src="https://via.placeholder.com/44x44" />
        <div className="flex w-full justify-between">
          <span className="text-Gray80 text-sm font-medium">도니보이</span>
          <div className="flex items-center justify-start gap-2">
            <div className="relative h-4 w-4" />
            <span className="text-Gray60 text-xs font-medium">0</span>
          </div>
        </div>
      </div>
      <div className="flex w-[420px] flex-col items-start justify-start gap-1">
        <div className="text-center">
          <span className="text-Gray80 text-sm font-normal leading-[18px]">재평가 평점은 </span>
          <span className="text-sm font-bold text-[#9fb1cf]">‘3.0’</span>
          <span className="text-Gray80 text-sm font-normal leading-[18px]"> 주목할 포인트는 </span>
          <span className="text-sm font-bold text-[#9fb1cf]">
            ‘출연진 연기력'
            <br />
          </span>
          <span className="text-Gray80 text-sm font-normal leading-[18px]">과거에는 </span>
          <span className="text-Olive50 text-sm font-bold">‘긍정적'</span>
          <span className="text-Gray80 text-sm font-normal leading-[18px]"> 현재는 </span>
          <span className="text-Orange50 text-sm font-bold">‘부정적'</span>
          <span className="text-Gray80 text-sm font-normal leading-[18px]">이라고 평가했어요.</span>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-[4px]">
          <p className="text-Gray70 text-xs font-normal">작성한 영화 한 줄 평</p>
          <p className="text-sm font-medium text-white">이별의 순간이 왔다고 해서 누군가의 마음이 변질되었나!</p>
        </div>
        <div className="flex gap-[10px]">
          {/* 아이콘 */}
          <button onClick={handleReportShowModal}>
            <InfoIcon />
          </button>
          <div className="text-Gray40 text-[10px] font-medium">YYYY.MM.DD</div>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
