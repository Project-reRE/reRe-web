import { Box, Button, Card, Typography } from '@mui/material';
import ReportConfirmModal from 'components/modal/ReportConfirmModal';
import ReportPassModal from 'components/modal/ReportPassModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MovieReportDetailPage() {
  const navigate = useNavigate();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [passModalOpen, setPassModalOpen] = useState(false);

  const handleClosePassModal = () => {
    setPassModalOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  return (
    <>
      <ReportConfirmModal open={confirmModalOpen} handleClose={handleCloseConfirmModal} />
      <ReportPassModal open={passModalOpen} handleClose={handleClosePassModal} />
      <SWrapper>
        <Typography variant="h5">
          운영 관리 {'>'} 영화 {'>'} 재평가 신고 관리 {'>'} 상세 내용
        </Typography>
        <SCard>
          <Box>
            <Typography variant="h5">피신고인 정보</Typography>
            <SUserInfoContainer>
              <SSearchItem>
                <Typography variant="body1">닉네임</Typography>
                <Typography variant="body1">유저의 닉넴</Typography>
              </SSearchItem>
              <SSearchItem>
                <Typography variant="body1">가입일</Typography>
                <Typography variant="body1">유저의 닉넴</Typography>
              </SSearchItem>
              <SSearchItem>
                <Typography variant="body1">이메일</Typography>
                <Typography variant="body1">유저의 닉넴</Typography>
              </SSearchItem>
              <SSearchItem>
                <Typography variant="body1">SNS</Typography>
                <Typography variant="body1">유저의 닉넴</Typography>
              </SSearchItem>
              <SSearchItem>
                <Typography variant="body1">성별</Typography>
                <Typography variant="body1">유저의 닉넴</Typography>
              </SSearchItem>
              <SSearchItem>
                <Typography variant="body1">연령대</Typography>
                <Typography variant="body1">유저의 닉넴</Typography>
              </SSearchItem>
              <SSearchItem>
                <Typography variant="body1">상태</Typography>
                <Typography variant="body1">활성화</Typography>
              </SSearchItem>
            </SUserInfoContainer>
          </Box>
          <Box>
            <Typography variant="h5">
              신고 상세 내역 <Button variant="contained">대기</Button>
            </Typography>
          </Box>
        </SCard>

        <SButtonBox>
          <div>
            <Button variant="contained" onClick={() => setConfirmModalOpen(true)}>
              숨기기
            </Button>
            <Button variant="contained" onClick={() => setPassModalOpen(true)}>
              정상
            </Button>
          </div>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            목록
          </Button>
        </SButtonBox>
      </SWrapper>
    </>
  );
}

export default MovieReportDetailPage;

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

const SUserInfoContainer = styled.div`
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

const SButtonBox = styled.div`
  padding: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div > :nth-child(1) {
    margin-right: 20px;
  }
`;
