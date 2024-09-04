import React from 'react';

import { Metadata } from 'next';

import { getFindOneMovie } from '@repo/services';

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
  const data = await getFindOneMovie(params.movieId);

  return (
    <>
      <MovieBanner data={data.data} statistics={data.statistics} />
      <MovieDetailInformation data={data} />
    </>
  );
};

export default MovieDetailPage;
