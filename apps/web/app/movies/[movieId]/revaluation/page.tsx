import React, { Suspense } from 'react';

import MovieBanner from '../MovieBanner';
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
      <Suspense fallback={<h3>loagindsdsf</h3>}>
        <MovieBanner movieId={movieId} />
      </Suspense>
      <RevaluationInputs movieId={movieId} />
      {show && <ConfirmModal />}
    </>
  );
};

export default RevaluationCreatePage;
