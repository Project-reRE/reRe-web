import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FormControl, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material';
import styled from 'styled-components';

const PAGINATION_LIMIT = [5, 10, 20, 50, 100] as const;
export type PaginationLimitParam = (typeof PAGINATION_LIMIT)[number];

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
  setLimit: Dispatch<SetStateAction<PaginationLimitParam>>;
  tableTotalPages: number;
  tableDataSize: number;
  canHistoryPush?: boolean;
}

const CustomPagination = ({
  page,
  setPage,
  limit,
  setLimit,
  tableTotalPages,
  tableDataSize,
  canHistoryPush = true,
}: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number): void => {
    setPage(newPage);

    if (canHistoryPush) {
      searchParams.set('page', String(newPage));
      setSearchParams(searchParams);
    }
  };

  const handleLimitChange = (event: SelectChangeEvent): void => {
    setLimit(parseInt(event.target.value, 10) as PaginationLimitParam);
    setPage(1);

    if (canHistoryPush) {
      searchParams.set('limit', String(event.target.value));
      searchParams.set('limit', String(1));
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      {tableDataSize >= 5 && (
        <SPaginationContainer>
          <div className="pagination-box">
            <Pagination
              page={page}
              count={tableTotalPages}
              onChange={handlePageChange}
              showFirstButton
              showLastButton
              sx={{ position: 'relative' }}
              siblingCount={3}
            />
          </div>
          <FormControl className="limit-select-box" variant="standard">
            <span className="text marginRight15">Rows per page</span>
            <Select value={String(limit)} onChange={handleLimitChange}>
              {PAGINATION_LIMIT.map((limit) => (
                <MenuItem key={limit} value={limit}>
                  {limit}
                </MenuItem>
              ))}
            </Select>
            <span className="text marginRight15" style={{ marginLeft: '10px' }}>
              of {tableDataSize}
            </span>
          </FormControl>
        </SPaginationContainer>
      )}
    </>
  );
};

export default CustomPagination;

const SPaginationContainer = styled.div`
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .limit-select-box {
    flex-direction: row;
    align-items: center;
  }

  .pagination-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text {
    font-size: 14px;
    color: #6b778c;
  }

  .marginRight15 {
    margin-right: 15px;
  }

  .marginTop10 {
    margin-top: 10px;
    strong {
      margin-left: 10px;
    }
  }
`;
