import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationLimitParam } from 'components/Pagination';

// TODO : key 값 네이밍 정해지면 수정
const usePagination = (initialLimit: PaginationLimitParam, pageNameKey: string = '') => {
  const [searchParams] = useSearchParams();
  const pageParams = Number(searchParams.get(pageNameKey + 'page') ?? 1);
  const limitParams = Number(searchParams.get(pageNameKey + 'limit') ?? 10) as PaginationLimitParam;

  const [page, setPage] = useState(pageParams === 0 ? 1 : pageParams);
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    setPage(pageParams);
    setLimit(limitParams);
  }, [limitParams, pageParams]);

  return { page, setPage, limit, setLimit };
};

export default usePagination;
