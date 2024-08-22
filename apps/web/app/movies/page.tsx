'use client';

import RankingMovie from '@repo/ui/rankingMovie';
import RankingHeadCategory from '@repo/ui/rankingHeadCategory';
import { useSearchParams } from 'next/navigation';
import MovieItem from '@repo/ui/movieItem';
import { OpenMovieSetResponseDto, useGetMovies, useGetOpenBanner, useGetOpenMovieSets } from '@repo/services';
import Link from 'next/link';
import { PATH } from 'constant/path';
import TopBannerSlider from 'components/TopBannerSlider';

const RankingPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const { data: moviesData } = useGetMovies({ title: search });
  const { data: openBannersData } = useGetOpenBanner();
  const { data: openMovieSetData } = useGetOpenMovieSets();

  // todo : 스켈레톤
  if (moviesData?.results?.length === 0) return <></>;

  return (
    <>
      {moviesData && !!search ? (
        <section className="layout px-[42px] py-[32px]">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="flex items-center justify-start gap-[10px]">
                <div className="text-3xl font-bold text-white">'{search}' 검색 결과입니다.</div>
              </div>
              <p className="text-Gray70 text-lg font-normal">
                <strong>{moviesData.totalRecords}</strong>
                {' 작품'}
              </p>
            </div>
            <div className="flex flex-col gap-[48px]">
              <article className="flex flex-col gap-[14px]">
                <ul className="flex flex-wrap gap-x-[24px] gap-y-[24px]">
                  {moviesData.results?.map((movie) => {
                    return (
                      <li key={movie.id}>
                        <Link href={PATH.MOVIES + `/${movie.id}`}>
                          <MovieItem item={movie} />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="layout">{openBannersData && <TopBannerSlider items={openBannersData.results} />}</section>
          <section className="px-[42px] py-[32px]">
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
                openMovieSetData.results.map((data: OpenMovieSetResponseDto) => (
                  <div className="flex flex-col gap-[48px]">
                    <article className="flex flex-col gap-[14px]">
                      <RankingHeadCategory data={data} />
                      <ul className="flex justify-between">
                        <li>
                          <Link href={PATH.MOVIES + `/${data.data[0]?.id}`}>
                            <RankingMovie item={data.data[0]} rankingNumber={1} />
                          </Link>
                        </li>
                        <li>
                          <Link href={PATH.MOVIES + `/${data.data[1]?.id}`}>
                            <RankingMovie item={data.data[1]} rankingNumber={2} />
                          </Link>
                        </li>
                        <li>
                          <Link href={PATH.MOVIES + `/${data.data[2]?.id}`}>
                            <RankingMovie item={data.data[2]} rankingNumber={3} />
                          </Link>
                        </li>
                      </ul>
                    </article>
                  </div>
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default RankingPage;
