import React, { Suspense } from 'react';

import Link from 'next/link';

import { Skeleton } from '@mui/material';

import { GetListType, MovieResponseDto } from '@repo/services';
import MovieItem from '@repo/ui/movieItem';

import { PATH } from 'constant/path';

type Props = {
  moviesData: GetListType<MovieResponseDto>;
  searchText: string;
};

const SearchResult = ({ moviesData, searchText }: Props) => {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />}>
      <section className="layout w-fit px-[42px] py-[32px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="flex items-center justify-start gap-[10px]">
              <div className="text-3xl font-bold text-white">'{searchText}' 검색 결과입니다.</div>
            </div>
            <p className="text-Gray70 text-lg font-normal">
              <strong>{moviesData.totalRecords}</strong>
              {' 작품'}
            </p>
          </div>
          <div className="flex flex-col gap-[48px]">
            <article className="flex flex-col gap-[14px]">
              <ul className="flex flex-wrap gap-x-[24px] gap-y-[24px]">
                {moviesData.results?.map(({ id, data }) => {
                  return (
                    <li key={id}>
                      <Link href={PATH.MOVIES + `/${id}`}>
                        <MovieItem data={data} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default SearchResult;
