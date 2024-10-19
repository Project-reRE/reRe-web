'use client';

import React from 'react';

import Link from 'next/link';

import { useGetMovies } from '@repo/services';

import EmptyBlankView from 'components/EmptyBlankView';
import MovieItem from 'components/MovieItem';

import { PATH } from 'constant/path';

import SkeletonMovieList from './SkeletonMovieList';

type Props = {
  search: string;
};

const SearchResult = ({ search }: Props) => {
  const { data: moviesData, isLoading } = useGetMovies({ title: search });

  if (moviesData?.totalRecords === 0) {
    return (
      <EmptyBlankView
        title={`'${search}'에 대한 검색결과가 없어요.`}
        description="개봉한지 5년이 지난 영화인지 확인해 보세요."
      />
    );
  }

  return (
    <section className="layout w-fit px-[42px] py-[32px]">
      {isLoading ? (
        <SkeletonMovieList />
      ) : (
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="flex items-center justify-start gap-[10px]">
              <div className="text-3xl font-bold text-white">'{search}' 검색 결과입니다.</div>
            </div>
            <p className="text-Gray70 text-lg font-normal">
              <strong>{moviesData?.totalRecords ?? 0}</strong>
              {' 작품'}
            </p>
          </div>
          <div className="flex flex-col gap-[48px]">
            <article className="flex flex-col gap-[14px]">
              <ul className="flex flex-wrap gap-x-[24px] gap-y-[24px]">
                {moviesData?.results?.map(({ id, data }) => {
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
      )}
    </section>
  );
};

export default SearchResult;
