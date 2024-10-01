import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import CustomPagination, { PaginationLimitParam } from './Pagination';
import { useNavigate } from 'react-router-dom';

interface HorizontalTableDataConfigType {
  title: string;
  key: string;
  value?: string;
  detail?: string;
  link?: string;
  param?: string;
  valueParam?: string;
}

type Props = {
  tableData: any; // tableData 에 들어올 수 있는 데이터가 많아서 'any' 타입
  tableDataSize: number; // Data 길이
  tableDataConfig: HorizontalTableDataConfigType[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
  setLimit: Dispatch<SetStateAction<PaginationLimitParam>>;
  tableTotalPages: number; // total page 수
  params?: string;
  link?: string;
};

const HorizontalTableLayout = ({
  tableData,
  tableDataSize,
  tableDataConfig,
  page,
  setPage,
  limit,
  setLimit,
  tableTotalPages,
  params,
  link,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ overflowX: 'auto', width: '100%' }}>
      <Table>
        <TableHead>
          <TableRow>
            {tableDataConfig.map(({ title }: HorizontalTableDataConfigType, index) => (
              <TableCell key={index}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBodyContainer>
          {tableData.map((data: any) => (
            <TableCursorRow
              hover
              pointer={params ? 'true' : 'false'}
              onClick={() => {
                if (params) {
                  navigate(params === 'id' ? `${link}/${data.id}` : `${link}/${data[params]}`);
                }
              }}
            >
              {tableDataConfig.map(
                ({ key, value, detail, link, param, valueParam }: HorizontalTableDataConfigType, index) => {
                  switch (key) {
                    case 'status':
                      return <TableCell key={index}>{data[key] ? '활성화' : '차단'}</TableCell>;
                    default:
                      return <TableCell key={index}>{data[key]}</TableCell>;
                  }
                }
              )}
            </TableCursorRow>
          ))}
        </TableBodyContainer>
      </Table>
      <CustomPagination
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        tableTotalPages={tableTotalPages}
        tableDataSize={tableDataSize}
      />
    </Box>
  );
};

export default HorizontalTableLayout;

const TableBodyContainer = styled(TableBody)`
  overflow: auto;
`;

const TableCursorRow = styled(TableRow)<{ pointer?: string }>`
  cursor: ${({ pointer }) => (pointer === 'true' ? 'pointer' : 'default')};
`;
