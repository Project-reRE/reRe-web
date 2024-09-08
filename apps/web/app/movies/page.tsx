import dynamic from 'next/dynamic';

import { getMovies, getOpenBanner, getOpenMovieSets } from '@repo/services';

import EmptyBlankView from 'components/EmptyBlankView';

const Ranking = dynamic(() => import('./components/Ranking'));
const SearchResult = dynamic(() => import('./components/SearchResult'));

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const RankingPage = async ({ searchParams }: Props) => {
  const search = searchParams?.search ?? '';
  const moviesData = await getMovies({ title: search });
  const openMovieSetData = await getOpenMovieSets();
  const openBannerData = await getOpenBanner();

  const isSearch = Boolean(search);

  return (
    <>
      {isSearch ? (
        <>
          {moviesData ? (
            <SearchResult moviesData={moviesData} searchText={search} />
          ) : (
            <EmptyBlankView
              title={`'${search}'에 대한 검색결과가 없어요.`}
              description="개봉한지 5년이 지난 영화인지 확인해 보세요."
            />
          )}
        </>
      ) : (
        <Ranking openBannerData={openBannerData} openMovieSetData={openMovieSetData} />
      )}
    </>
  );
};

export default RankingPage;
