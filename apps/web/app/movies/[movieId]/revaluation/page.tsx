import React, { Suspense } from 'react';

import MovieReviewDetailInformation from '../MovieDefaultInformation';
import ConfirmModal from './ConfirmModal';
import RevaluationInputs from './RevaluationInputs';

type Props = {
  params: { movieId: string };
  searchParams: Record<string, string> | null | undefined;
};

const RevaluationCreatePage = async ({ params, searchParams }: Props) => {
  const show = searchParams?.show;
  const movieId = params.movieId;

  return (
    <>
      <MovieReviewDetailInformation movieId={movieId} />
      <RevaluationInputs movieId={movieId} />
      {show && <ConfirmModal movieId={movieId} searchParams={searchParams} />}
    </>
  );
};

export default RevaluationCreatePage;
