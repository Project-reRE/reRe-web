import React from 'react';

import { getFindOneMovie } from '@repo/services';

import MovieBanner from '../MovieBanner';
import RevaluationInputs from './RevaluationInputs';

type Props = {
  params: { movieId: string };
};

const RevaluationCreatePage = async ({ params }: Props) => {
  const { data } = await getFindOneMovie(params.movieId);

  return (
    <>
      <MovieBanner data={data} />
      <RevaluationInputs />
    </>
  );
};

export default RevaluationCreatePage;
