import React from 'react';

import { Skeleton } from '@mui/material';

const SkeletonMovieList = () => {
  return (
    <ul className="flex w-full flex-wrap gap-[24px]">
      {new Array(12).fill(0).map((_, index) => (
        <Skeleton key={index} width={340} height={300} />
      ))}
    </ul>
  );
};

export default SkeletonMovieList;
