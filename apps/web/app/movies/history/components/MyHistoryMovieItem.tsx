'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { RevaluationResponseDto } from '@repo/services';

import { PATH } from 'constant/path';

import DefaultImage from '../../../../public/assets/default_img.png';

type Props = {
  item: RevaluationResponseDto;
};

const MyHistoryMovieItem = ({ item }: Props) => {
  const router = useRouter();

  const handleMoveRevaluationEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`${PATH.MOVIES}/${item.movie.id}/revaluation?mode=edit`);
  };

  return (
    <div className="group relative h-[510px] w-[340px] cursor-pointer overflow-hidden rounded-[15px]">
      <Image
        src={item.movie.data.posters[0] ?? DefaultImage}
        alt={item.movie.data.title + '포스터 이미지'}
        width={340}
        height={510}
        quality={100}
        placeholder="empty"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end gap-[24px] bg-black/80 px-[20px] py-[24px] opacity-0 transition-all group-hover:opacity-100">
        <div>
          <p className="mb-[4px] text-2xl font-semibold text-white">{item.movie.data.title}</p>
          <p className="text-base text-[#b3b3b3]">{item.movie.data.prodYear} 개봉</p>
        </div>
        <div>
          <span className="text-sm leading-[18px] text-[#d1d1d1]">재평가 평점은 </span>
          <strong className="text-sm text-[#9fb1cf]">‘{item.numStars}’</strong>
          <span className="text-sm leading-[18px] text-[#d1d1d1]"> 주목할 포인트는 </span>
          <strong className="text-sm text-[#9fb1cf]">
            ‘{item.specialPoint}'
            <br />
          </strong>
          <span className="text-sm leading-[18px] text-[#d1d1d1]">과거에는 </span>
          <strong className="text-sm text-[#93b745]">‘{item.pastValuation}'</strong>
          <span className="text-sm leading-[18px] text-[#d1d1d1]"> 현재는 </span>
          <strong className="text-sm text-[#c85a27]">'{item.presentValuation}'</strong>
          <span className="text-sm leading-[18px] text-[#d1d1d1]">이라고 평가했어요.</span>
        </div>
        <div>
          <p className="mb-[4px] text-sm font-normal text-[#d1d1d1]">작성한 영화 한 줄 평</p>
          <p className="text-sm font-medium text-white">{item.comment}</p>
        </div>
        <div className="flex w-full justify-between">
          <button
            className="flex h-[35px] w-[142px] items-center justify-center gap-2.5 rounded-[500px] bg-[#c85a27] text-base font-medium text-white"
            onClick={handleMoveRevaluationEdit}
          >
            재평가 수정하기
          </button>
          <button className="flex h-[35px] w-[142px] items-center justify-center gap-2.5 rounded-[500px] bg-[#749037] text-base font-medium text-white">
            재평가 삭제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyHistoryMovieItem;
