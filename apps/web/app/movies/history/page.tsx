import React, { Suspense } from 'react';

import DateControl from './components/DateControl';
import MovieRevaluationHistoryList from './components/MovieRevaluationHistoryList';
import SkeletonMovieItem from './components/SkeletonHistoryList';

const HistoryPage = async () => {
  return (
    <section className="layout flex flex-col gap-[28px] px-[42px] pt-[32px]">
      <DateControl />
      <Suspense fallback={<SkeletonMovieItem />}>
        <MovieRevaluationHistoryList />
      </Suspense>
    </section>
  );
};

export default HistoryPage;
