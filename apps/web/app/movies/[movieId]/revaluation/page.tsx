import React from 'react';

import { getFindOneMovie } from '@repo/services';

import MovieBanner from '../MovieBanner';
import RevaluationInputs from './RevaluationInputs';

type Props = {
  params: { movieId: string };
};

const RevaluationCreatePage = async ({ params }: Props) => {
  const movieId = params.movieId;
  const data = await getFindOneMovie(movieId);

  return (
    <>
      <MovieBanner data={data.data} statistics={data.statistics} />
      <RevaluationInputs movieId={movieId} />
    </>
  );
};

export default RevaluationCreatePage;
