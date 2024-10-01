import {
  Button,
  Card,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import HorizontalTableLayout from 'components/HorizontalTableLayout';
import { userListDummy } from 'constant/dummy';
import { PATH } from 'constant/paths';
import usePagination from 'hook/usePagination';
import styled from 'styled-components';

const TABLE_CONFIG = [
  { title: 'ID', key: 'id' },
  { title: '이메일', key: 'email' },
  { title: '닉네임', key: 'username' },
  { title: 'SNS', key: 'sns' },
  { title: '가입일', key: 'createdAt' },
  { title: '상태', key: 'status' }, // 활성화, 차단
];

function UserListPage() {
  const { page, setPage, limit, setLimit } = usePagination(10);

  return (
    <SWrapper>
      <Typography variant="h5">유저 관리</Typography>
      <SCard>
        <SSearchBox>
          <SSearchItem>
            <Typography variant="body1">가입일</Typography>
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
            <Typography variant="body1">닉네임</Typography>
            <TextField fullWidth placeholder="유저의 닉네임을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">이메일</Typography>
            <TextField fullWidth placeholder="유저의 이메일을 입력하세요." />
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">SNS</Typography>
            <Select fullWidth defaultValue={'all'}>
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="kakao">카카오</MenuItem>
              <MenuItem value="apple">애플</MenuItem>
            </Select>
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">성별</Typography>
            <Select fullWidth defaultValue={'all'}>
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="m">남성</MenuItem>
              <MenuItem value="f">여성</MenuItem>
            </Select>
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">연령대</Typography>
            <Select fullWidth defaultValue={'all'}>
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="10">10대</MenuItem>
              <MenuItem value="20">20대</MenuItem>
              <MenuItem value="30">30대</MenuItem>
              <MenuItem value="40">40대</MenuItem>
              <MenuItem value="50">50대+</MenuItem>
            </Select>
          </SSearchItem>
          <SSearchItem>
            <Typography variant="body1">상태</Typography>
            <RadioGroup sx={{ display: 'flex', flexDirection: 'row' }} defaultValue={'all'}>
              <FormControlLabel value={'all'} control={<Radio />} label="전체" />
              <FormControlLabel value={'true'} control={<Radio />} label="활성화" />
              <FormControlLabel value={'false'} control={<Radio />} label="차단" />
            </RadioGroup>
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
          tableData={userListDummy}
          tableDataSize={1}
          tableTotalPages={10}
          tableDataConfig={TABLE_CONFIG}
          page={page}
          setPage={setPage}
          limit={limit}
          setLimit={setLimit}
          params="id"
          link={PATH.USER}
        />
      </SCard>
    </SWrapper>
  );
}

export default UserListPage;

const SWrapper = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* align-items: center; */
  /* justify-content: center; */
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
    min-width: 50px;
  }
`;
