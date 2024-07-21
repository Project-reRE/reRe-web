// 'use client';

import http from '@repo/services/http';
// import OpenBannerResponseDto from '@repo/services/types/banner';
import TopBannerSlider from '@repo/ui/topBannerSlider';
import RankingMovie from '@repo/ui/rankingMovie';
import RankingHeadCategory from '@repo/ui/rankingHeadCategory';

export default async function RankingPage() {
  // const bannerData = await http.get('/open-banners');
  // const movieData = await http.get('/open-movie-sets');

  return (
    <>
      {/* <TopBannerSlider items={bannerData.results} /> */}
      <section className="px-[42px]">
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
          <div className="flex flex-col gap-[48px]">
            <article className="flex flex-col gap-[14px]">
              <RankingHeadCategory />
              <ul className="flex justify-between">
                <li>
                  <RankingMovie item={''} rankingNumber={1} />
                </li>
                <li>
                  <RankingMovie item={''} rankingNumber={2} />
                </li>
                <li>
                  <RankingMovie item={''} rankingNumber={3} />
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
