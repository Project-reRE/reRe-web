import { Button, Card, MenuItem, Select, TextField, Typography } from '@mui/material';
import HorizontalTableLayout from 'components/HorizontalTableLayout';
import { movieReportListDummy } from 'constant/dummy';
import usePagination from 'hook/usePagination';
import styled from 'styled-components';

const TABLE_CONFIG = [
  { title: 'No', key: 'id' },
  { title: '데일리 랭킹 장르', key: 'preview' },
  { title: '표시 기간', key: 'reason' },
];
function DailyRankingGenreListPage() {
  const { page, setPage, limit, setLimit } = usePagination(10);

  return (
    <SWrapper>
      <Typography variant="h5">
        콘텐츠 관리 {'>'} 영화 {'>'} 데일리 랭킹 장르 관리
      </Typography>
      <SCard>
        <Button variant="contained">데일리 랭킹 장르 추가</Button>
        <HorizontalTableLayout
          tableData={movieReportListDummy}
          tableDataSize={1}
          tableTotalPages={10}
          tableDataConfig={TABLE_CONFIG}
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
        />
      </SCard>
    </SWrapper>
  );
}

export default DailyRankingGenreListPage;

const SWrapper = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SCard = styled(Card)`
  padding: 20px;
`;

const SSearchBox = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
`;

const SSearchItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: bold;
    min-width: max-content;
    width: 120px;
  }
`;
