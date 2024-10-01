import { Button, Card, MenuItem, Select, TextField, Typography } from '@mui/material';
import HorizontalTableLayout from 'components/HorizontalTableLayout';
import { movieReportListDummy } from 'constant/dummy';
import { PATH } from 'constant/paths';
import usePagination from 'hook/usePagination';
import styled from 'styled-components';

const TABLE_CONFIG = [
  { title: 'ID', key: 'id' },
  { title: '피신고인 이메일', key: 'email' },
  { title: '최근 신고 사유', key: 'reason' },
  { title: '최근 신고일', key: 'reportedAt' },
];

function MovieReportListPage() {
  const { page, setPage, limit, setLimit } = usePagination(10);

  return (
    <SWrapper>
      <Typography variant="h5">
        운영 관리 {'>'} 영화 {'>'} 재평가 신고 관리
      </Typography>
      <SCard>
        <SSearchBox>
          <SSearchItem>
            <Typography variant="body1">신고일</Typography>
            <TextField
              type="date"
              name="startAt"
              fullWidth
              InputProps={{ inputProps: { min: '1970-01-01', max: '2999-12-31' } }}
            />
            ~
            <TextField
              type="date"
              name="endAt"
              fullWidth
              InputProps={{ inputProps: { min: '1970-01-01', max: '2999-12-31' } }}
            />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">신고 사유</Typography>
            <Select fullWidth defaultValue={'all'}>
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="1">욕설 및 부적절한 표현</MenuItem>
              <MenuItem value="2">저작권 침해</MenuItem>
              <MenuItem value="3">타인의 명예훼손</MenuItem>
              <MenuItem value="4">성적인 내용</MenuItem>
            </Select>
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">신고인 이메일</Typography>
            <TextField fullWidth placeholder="유저의 이메일을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">신고인 닉네임</Typography>
            <TextField fullWidth placeholder="유저의 닉네임을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">피신고인 이메일</Typography>
            <TextField fullWidth placeholder="유저의 이메임을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">피신고인 닉네임</Typography>
            <TextField fullWidth placeholder="유저의 닉네임을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">영화 제목</Typography>
            <TextField fullWidth placeholder="영화 제목을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">한 줄 평</Typography>
            <TextField fullWidth placeholder="한 줄 평 내용을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">상태</Typography>
            <Select fullWidth defaultValue={'all'}>
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="1">대기</MenuItem>
              <MenuItem value="2">가리기</MenuItem>
            </Select>
          </SSearchItem>
          <SSearchItem>
            <Button fullWidth variant="outlined">
              초기화
            </Button>
            <Button fullWidth variant="contained">
              검색
            </Button>
          </SSearchItem>
        </SSearchBox>
        <HorizontalTableLayout
          tableData={movieReportListDummy}
          tableDataSize={1}
          tableTotalPages={10}
          tableDataConfig={TABLE_CONFIG}
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          params="id"
          link={PATH.OPERATE + '/movie/reports'}
        />
      </SCard>
    </SWrapper>
  );
}

export default MovieReportListPage;

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
