import { Box, Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MovieOperatePage = () => {
  const navigate = useNavigate();

  return (
    <SWrapper>
      <Typography variant="h5">운영 관리 {'>'} 영화</Typography>
      <SCard>
        <Box>
          재평가 신고 관리{' '}
          <Button variant="contained" onClick={() => navigate('reports')}>
            관리
          </Button>
        </Box>
      </SCard>
    </SWrapper>
  );
};

export default MovieOperatePage;

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
