import { Suspense } from 'react';

import dynamic from 'next/dynamic';

import SkeletonMovieList from './components/SkeletonMovieList';

const Ranking = dynamic(() => import('./components/Ranking'));
const SearchResult = dynamic(() => import('./components/SearchResult'));

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const RankingPage = async ({ searchParams }: Props) => {
  const search = searchParams?.search ?? '';
  // const [moviesData, openMovieSetData, openBannerData] = Promise.all([
  //   await getMovies({ title: search }),
  //   await getOpenMovieSets(),
  //   await getOpenBanner(),
  // ]);

  const isSearch = Boolean(search);

  return (
    <>
      {isSearch ? (
        <Suspense fallback={<SkeletonMovieList />}>
          <SearchResult search={search} />
        </Suspense>
      ) : (
        <Suspense>
          <Ranking />
        </Suspense>
      )}
    </>
  );
};

export default RankingPage;
