// 'use client';

import http from '@repo/services/http';
// import OpenBannerResponseDto from '@repo/services/types/banner';
import TopBannerSlider from '@repo/ui/topBannerSlider';
import RankingMovie from '@repo/ui/rankingMovie';
import MovieItem from '@repo/ui/movieItem';

import RankingHeadCategory from '@repo/ui/rankingHeadCategory';

export default async function RankingPage() {
  // const bannerData = await http.get('/open-banners');
  // const movieData = await http.get('/open-movie-sets');

  return (
    <>
      <section className="px-[42px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="flex items-center justify-start gap-[10px]">
              <div className="text-3xl font-bold text-white">‘마이너리티 리포트' 검색 결과입니다.</div>
            </div>
            <p className="text-Gray70 text-lg font-normal">
              <strong>12</strong>
              {' 작품'}
            </p>
          </div>
          <div className="flex flex-col gap-[48px]">
            <article className="flex flex-col gap-[14px]">
              <ul className="flex justify-between">
                <li>
                  <MovieItem />
                </li>
                <li>
                  <MovieItem />
                </li>
                <li>
                  <MovieItem />
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
