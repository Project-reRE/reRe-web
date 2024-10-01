import { Box, Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContentsPage = () => {
  const navigate = useNavigate();

  return (
    <SWrapper>
      <Typography variant="h5">콘텐츠 관리 {'>'} 영화</Typography>
      <SCard>
        <Box>
          메인 탑 배너 관리
          <Button variant="contained" onClick={() => navigate('reports')}>
            관리
          </Button>
        </Box>
        <Box>
          데일리 랭킹 장르 관리
          <Button variant="contained" onClick={() => navigate('reports')}>
            관리
          </Button>
        </Box>
      </SCard>
    </SWrapper>
  );
};

export default ContentsPage;

const SWrapper = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SCard = styled(Card)`
  padding: 20px;
`;
