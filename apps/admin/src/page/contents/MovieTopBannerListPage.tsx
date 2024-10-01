import { Button, Card, Typography } from '@mui/material';
import HorizontalTableLayout from 'components/HorizontalTableLayout';
import { movieReportListDummy } from 'constant/dummy';
import usePagination from 'hook/usePagination';
import styled from 'styled-components';

const TABLE_CONFIG = [
  { title: 'No', key: 'id' },
  { title: '미리보기', key: 'preview' },
  { title: '클릭 수(Web)', key: 'reason' },
  { title: '클릭 수(App)', key: 'reportedAt' },
];

function MovieTopBannerListPage() {
  const { page, setPage, limit, setLimit } = usePagination(10);

  return (
    <SWrapper>
      <Typography variant="h5">
        콘텐츠 관리 {'>'} 영화 {'>'} 메인 탑 배너 관리
      </Typography>
      <SCard>
        <Button variant="contained">메인 탑 배너 추가</Button>
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

export default MovieTopBannerListPage;

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
