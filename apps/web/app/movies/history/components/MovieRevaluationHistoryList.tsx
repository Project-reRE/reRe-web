import React from 'react';

import { getMyRevaluations } from '@repo/services';

import { getStartAndEndDate } from 'utils/getStartAndEndDate';

import EmptyBlankView from 'components/EmptyBlankView';

import MyHistoryMovieItem from './MyHistoryMovieItem';

type Props = {
  startDate?: string;
};

const MovieRevaluationHistoryList = async ({ startDate: _startDate }: Props) => {
  const { startDate, endDate } = getStartAndEndDate(
    Number(_startDate?.split('-')[0]),
    Number(_startDate?.split('-')[1])
  );
  const myRevaluationList = await getMyRevaluations({ page: 1, limit: 10, startDate, endDate });
  const isEmpty = myRevaluationList?.totalRecords === 0;

  if (isEmpty) {
    return (
      <EmptyBlankView
        title={`이번 달, 당신이 재평가할 영화는\n어떤 영화인가요?`}
        element="button"
        btnTxt="재평가 하러가기"
      />
    );
  }

  return (
    <ul className="flex flex-wrap gap-[24px]">
      {myRevaluationList?.results.map((item) => <MyHistoryMovieItem item={item} key={item.id} />)}
    </ul>
  );
};

export default MovieRevaluationHistoryList;
