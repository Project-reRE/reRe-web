import React from 'react';

import Link from 'next/link';

import { OpenMovieSetResponseDto, getOpenMovieSets } from '@repo/services';
import { ColorMap } from '@repo/tailwind-config/theme';
import RankingHeadCategory from '@repo/ui/rankingHeadCategory';

import RankingMovie from 'components/RankingMovie';

import { PATH } from 'constant/path';

const DailyRank = async () => {
  const openMovieSetData = await getOpenMovieSets();
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="flex items-center justify-start gap-[10px]">
          <div className="text-3xl font-bold text-white">데일리 랭킹</div>
          <div className="bg-Navy50 flex items-center justify-center gap-[10px] rounded px-2 py-[5px]">
            <div className="text-Navy100 text-sm font-medium">전일 00시 00분 ~ 23시 59분 집계</div>
          </div>
        </div>
        <div className="text-Gray70 text-lg font-normal">가장 많이 재평가받은 장르별 영화 TOP 3</div>
      </div>
      {openMovieSetData &&
        openMovieSetData.results.map((data: OpenMovieSetResponseDto, idx: number) => (
          <div className="flex flex-col gap-[48px]" key={idx}>
            <article className="flex flex-col gap-[14px]">
              <RankingHeadCategory
                data={data}
                color={
                  [
                    { bgColor: ColorMap.Orange40, textColor: ColorMap.Orange90, titleColor: ColorMap.Orange60 },
                    { bgColor: ColorMap.Green40, textColor: ColorMap.Green80, titleColor: ColorMap.Green70 },
                    { bgColor: ColorMap.Cyan50, textColor: ColorMap.Cyan90, titleColor: ColorMap.Cyan60 },
                  ][idx % 3]
                }
              />
              <ul className="flex justify-between">
                <li>
                  <Link href={PATH.MOVIES + `/${data.data[0]?.id}`}>
                    <RankingMovie data={data.data[0]?.data} rankingNumber={1} />
                  </Link>
                </li>
                <li>
                  <Link href={PATH.MOVIES + `/${data.data[1]?.id}`}>
                    <RankingMovie data={data.data[1]!.data} rankingNumber={2} />
                  </Link>
                </li>
                <li>
                  <Link href={PATH.MOVIES + `/${data.data[2]?.id}`}>
                    <RankingMovie data={data.data[2]?.data} rankingNumber={3} />
                  </Link>
                </li>
              </ul>
            </article>
          </div>
        ))}
    </div>
  );
};

export default DailyRank;
