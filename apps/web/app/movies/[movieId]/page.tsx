import React from 'react';

import { Metadata } from 'next';

import { getFindOneMovie, getRevaluations } from '@repo/services';

import MovieBanner from './MovieDefaultInformation';
import MovieDetailInformation from './MovieReviewDetailInformation';

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

  console.log(revaluationData);

  return (
    <>
      <MovieBanner movieId={params.movieId} />
      <MovieDetailInformation movieData={movieData} revaluationData={revaluationData} />
    </>
  );
};

export default MovieDetailPage;
