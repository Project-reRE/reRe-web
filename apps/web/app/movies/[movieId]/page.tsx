import React, { Suspense } from 'react';

import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { getFindOneMovie, getRevaluations } from '@repo/services';

const MovieBanner = dynamic(() => import('./MovieBanner'));
const MovieDetailInformation = dynamic(() => import('./MovieDetailInformation'));

type Props = {
  params: { movieId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getFindOneMovie(params.movieId);
  if (!data) return {};

  return {
    title: data.data.title,
  };
}

const MovieDetailPage = async ({ params }: Props) => {
  const movieData = await getFindOneMovie(params.movieId);
  const revaluationData = await getRevaluations({ movieId: params.movieId });

  return (
    <>
      <Suspense fallback={<h3>Loading</h3>}>
        <MovieBanner movieId={params.movieId} />
      </Suspense>
      <MovieDetailInformation movieData={movieData} revaluationData={revaluationData} />
    </>
  );
};

export default MovieDetailPage;
