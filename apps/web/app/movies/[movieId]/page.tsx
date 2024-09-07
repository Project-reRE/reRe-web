import React from 'react';

import { Metadata } from 'next';

import { getFindOneMovie, getRevaluations } from '@repo/services';

import MovieBanner from './MovieBanner';
import MovieDetailInformation from './MovieDetailInformation';

type Props = {
  params: { movieId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getFindOneMovie(params.movieId);

  return {
    title: data.title,
  };
}

const MovieDetailPage = async ({ params }: Props) => {
  const movieData = await getFindOneMovie(params.movieId);
  const revaluationData = await getRevaluations({ movieId: movieData.id });

  return (
    <>
      <MovieBanner data={movieData.data} statistics={movieData.statistics} />
      <MovieDetailInformation movieData={movieData} revaluationData={revaluationData} />
    </>
  );
};

export default MovieDetailPage;
