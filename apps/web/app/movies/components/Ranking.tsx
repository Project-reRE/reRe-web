import React, { Suspense } from 'react';

import { Skeleton } from '@mui/material';

import DailyRank from 'components/DailyRank';

import TopBanner from './TopBanner';

const Ranking = () => {
  return (
    <>
      <section className="layout">
        <Suspense fallback={<Skeleton style={{ width: '100%' }} height={552} />}>
          <TopBanner />
        </Suspense>
      </section>
      <section className="px-[42px] py-[32px]">
        <Suspense fallback={<Skeleton style={{ width: '100%' }} height={200} />}>
          <DailyRank />
        </Suspense>
      </section>
    </>
  );
};

export default Ranking;
