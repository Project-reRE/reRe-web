import { Suspense } from 'react';

import dynamic from 'next/dynamic';

import SkeletonMovieList from 'movies/components/SkeletonMovieList';

const Ranking = dynamic(() => import('movies/components/Ranking'), {
  suspense: true,
  ssr: true,
});

const SearchResult = dynamic(() => import('movies/components/SearchResult'), {
  suspense: true,
  ssr: false,
});

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const RankingPage = ({ searchParams }: Props) => {
  const search = searchParams?.search ?? '';
  const isSearch = Boolean(search);

  return (
    <>
      {isSearch ? (
        <Suspense fallback={<SkeletonMovieList />}>
          <SearchResult search={search} />
        </Suspense>
      ) : (
        <Suspense fallback={<div className="white">Loading...</div>}>
          <Ranking />
        </Suspense>
      )}
    </>
  );
};

export default RankingPage;
