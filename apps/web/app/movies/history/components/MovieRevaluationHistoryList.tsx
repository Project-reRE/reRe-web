import React from 'react';

import { getMyRevaluations } from '@repo/services';

import MyHistoryMovieItem from './MyHistoryMovieItem';

const MovieRevaluationHistoryList = async () => {
  const myRevaluationList = await getMyRevaluations({ limit: 10 });

  return (
    <ul className="flex flex-wrap gap-[24px]">
      {myRevaluationList?.results.map((item) => <MyHistoryMovieItem item={item} key={item.id} />)}
    </ul>
  );
};

export default MovieRevaluationHistoryList;
