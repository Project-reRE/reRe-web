import { Suspense } from 'react';

import Ranking from 'movies/components/Ranking';
import SearchResult from 'movies/components/SearchResult';

import SkeletonMovieList from '../components/SkeletonMovieList';

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
