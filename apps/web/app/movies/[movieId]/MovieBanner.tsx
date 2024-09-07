import React from 'react';

import Image from 'next/image';

import { StarIcon } from '@repo/icon';
import { ActorType, DirectorType, MovieDataType, MovieStatisticsType } from '@repo/services';

import { StyledRating } from 'components/StyledRating';

type Props = {
  data: MovieDataType;
  statistics: MovieStatisticsType[];
};

const MovieBanner = ({ data, statistics }: Props) => {
  const yearsData = data.repRlsDate.slice(0, 4);
  const actorsText = data.actors.map((el: ActorType) => el.actorNm).join(', ');
  const directorsText = data.directors.map((el: DirectorType) => el.directorNm).join(', ');

  const isCurrentRating = statistics && statistics?.[0]?.numStars;

  return (
    <div className="relative left-0 top-0 z-[-1] flex h-[594px] w-full items-end justify-center overflow-hidden">
      {/* dim */}
      <div className="absolute left-0 top-0 h-[84px] w-full bg-gradient-to-t from-transparent to-[#141414]" />
      <div className="absolute bottom-0 left-0 h-[120px] w-full bg-gradient-to-b from-transparent to-[#141414]" />
      <Image
        src={data.stills?.[0] ?? data.posters?.[0] ?? ''}
        className="absolute left-0 top-0 z-[-2] h-[594px] w-full bg-gradient-to-b blur-xl"
        alt={data.title + '스틸 이미지'}
        fill
        style={{ width: '100%', maxHeight: 594 }}
        placeholder="empty"
      />
      <div className="mb-[60px] flex items-center justify-center gap-[28px]">
        <div className="relative">
          <figure style={{ width: 260, height: 390 }}>
            <Image src={data.posters[0] ?? ''} alt={data.title + '포스터 이미지'} fill placeholder="empty" />
          </figure>
          <span className="absolute bottom-[-24px] text-xs text-[#777777]">출처 : KMdb</span>
        </div>
        <div className="flex flex-col gap-[26px]">
          <div className="flex h-[70px] flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex h-[41px] flex-col gap-1">
                <span className="ellipsis text-3xl font-semibold text-white">{data.title}</span>
                <div className="bg-Gray60 h-px self-stretch" />
              </div>
              <span className="ellipsis text-lg font-medium text-white">{yearsData}</span>
            </div>
          </div>
          <ul className="flex max-w-[400px] flex-col gap-1">
            <li className="flex gap-[5px]">
              <span className="flex-shrink-0 text-[13px] font-semibold text-white">장르</span>
              <span className="ellipsis text-[13px] font-normal text-white">{data.genre}</span>
            </li>
            <li className="flex gap-[5px]">
              <span className="flex-shrink-0 text-[13px] font-semibold text-white">감독</span>
              <span className="ellipsis text-[13px] font-normal text-white">{directorsText}</span>
            </li>
            <li className="flex gap-[5px]">
              <span className="flex-shrink-0 text-[13px] font-semibold text-white">출연</span>
              <span className="ellipsis text-[13px] font-normal text-white">{actorsText}</span>
            </li>
          </ul>
          {isCurrentRating && (
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-normal text-white">7월 재평가 평점</span>
              <div className="flex items-center gap-[5px]">
                <span className="font-['Elice DX Neolli'] text-[34px] font-bold text-[#c85a27]">
                  {statistics?.[0]?.numStars}
                </span>
                <StyledRating
                  defaultValue={statistics?.[0]?.numStars}
                  precision={0.1}
                  readOnly
                  icon={<StarIcon width={16} height={16} />}
                  emptyIcon={<StarIcon fill="#919191" width={16} height={16} />}
                  style={{ width: 'fit-content', gap: 8 }}
                  sx={{
                    '.MuiRating-iconFilled': {
                      minWidth: 16,
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
