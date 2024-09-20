import React from 'react';

import { Skeleton } from '@mui/material';

const SkeletonMovieItem = () => {
  return (
    <ul className="flex flex-wrap gap-[24px]">
      {new Array(6).fill(0).map((_, index) => (
        <Skeleton key={index} width={340} height={510} />
      ))}
    </ul>
  );
};

export default SkeletonMovieItem;
