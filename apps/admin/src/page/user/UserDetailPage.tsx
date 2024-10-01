import { Box, Button, Card, TextField, Typography } from '@mui/material';
import ReportConfirmModal from 'components/modal/ReportConfirmModal';
import ReportPassModal from 'components/modal/ReportPassModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function UserDetailPage() {
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
        <Typography variant="h5">유저 관리 {'>'} 유저 정보</Typography>
        <SCard>
          <Box>
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
          <SMovieCommentSection>
            <Typography variant="h5">작성한 영화 재평가(100개)</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
              <TextField fullWidth placeholder="영화 제목 또는 한 줄 평을 입력하세요" />
              <Button variant="contained">검색</Button>
            </Box>
            <ul>
              <li>
                <div>
                  <div className="title">
                    <div>분야</div>
                    <p>영화 제목이 여기에 표시됩니다.</p>
                  </div>
                  <p className="sub-title">
                    재평가 평점은 <strong>3.0</strong>, 주목할 포인트는 <strong>'출연진과'</strong>, 과거에는{' '}
                    <strong>'긍정적'</strong>
                  </p>
                  <div className="comment">
                    <p>[작성한 영화 한 줄 평]</p>
                    <p>어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸</p>
                  </div>
                  <div className="date">작성일 : YYYY-MM-DD HH:mm:SS | 추천 수 000000000개</div>
                </div>
                <Button variant="contained">숨기기</Button>
              </li>
              <li>
                <div>
                  <div className="title">
                    <div>분야</div>
                    <p>영화 제목이 여기에 표시됩니다.</p>
                  </div>
                  <p className="sub-title">
                    재평가 평점은 <strong>3.0</strong>, 주목할 포인트는 <strong>'출연진과'</strong>, 과거에는{' '}
                    <strong>'긍정적'</strong>
                  </p>
                  <div className="comment">
                    <p>[작성한 영화 한 줄 평]</p>
                    <p>어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸</p>
                  </div>
                  <div className="date">작성일 : YYYY-MM-DD HH:mm:SS | 추천 수 000000000개</div>
                </div>
                <Button variant="contained">숨기기</Button>
              </li>
              <li>
                <div>
                  <div className="title">
                    <div>분야</div>
                    <p>영화 제목이 여기에 표시됩니다.</p>
                  </div>
                  <p className="sub-title">
                    재평가 평점은 <strong>3.0</strong>, 주목할 포인트는 <strong>'출연진과'</strong>, 과거에는{' '}
                    <strong>'긍정적'</strong>
                  </p>
                  <div className="comment">
                    <p>[작성한 영화 한 줄 평]</p>
                    <p>어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸</p>
                  </div>
                  <div className="date">작성일 : YYYY-MM-DD HH:mm:SS | 추천 수 000000000개</div>
                </div>
                <Button variant="contained">숨기기</Button>
              </li>
              <li>
                <div>
                  <div className="title">
                    <div>분야</div>
                    <p>영화 제목이 여기에 표시됩니다.</p>
                  </div>
                  <p className="sub-title">
                    재평가 평점은 <strong>3.0</strong>, 주목할 포인트는 <strong>'출연진과'</strong>, 과거에는{' '}
                    <strong>'긍정적'</strong>
                  </p>
                  <div className="comment">
                    <p>[작성한 영화 한 줄 평]</p>
                    <p>어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸</p>
                  </div>
                  <div className="date">작성일 : YYYY-MM-DD HH:mm:SS | 추천 수 000000000개</div>
                </div>
                <Button variant="contained">숨기기</Button>
              </li>
              <li>
                <div>
                  <div className="title">
                    <div>분야</div>
                    <p>영화 제목이 여기에 표시됩니다.</p>
                  </div>
                  <p className="sub-title">
                    재평가 평점은 <strong>3.0</strong>, 주목할 포인트는 <strong>'출연진과'</strong>, 과거에는{' '}
                    <strong>'긍정적'</strong>
                  </p>
                  <div className="comment">
                    <p>[작성한 영화 한 줄 평]</p>
                    <p>어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸어쩌구!!!!! 저쩌꾸</p>
                  </div>
                  <div className="date">작성일 : YYYY-MM-DD HH:mm:SS | 추천 수 000000000개</div>
                </div>
                <Button variant="contained">숨기기</Button>
              </li>
            </ul>
          </SMovieCommentSection>
        </SCard>
        <SButtonBox>
          <Button variant="contained" onClick={() => setPassModalOpen(true)}>
            차단
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            목록
          </Button>
        </SButtonBox>
      </SWrapper>
    </>
  );
}

export default UserDetailPage;

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
    flex: 1;
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

const SMovieCommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ul {
    list-style: none;
    li {
      margin: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 20px;
      > button {
      }

      > div {
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        background-color: #f0f0f0;
        border: 1px solid rgba(255, 255, 255, 0.23);
        box-sizing: border-box;
        border-radius: 10px;

        .title {
          display: flex;
          align-items: center;
          gap: 20px;
          > div {
            padding: 0 12px;
            display: flex;
            align-items: center;
            height: 34px;
            background-color: black;
            color: white;
            border-radius: 3px;
            font-size: 16px;
            font-weight: bold;
          }
          > p {
            font-size: 16px;
            font-weight: bold;
            text-decoration: underline;
          }
        }

        .sub-title {
          strong {
            color: blue;
            font-weight: bold;
          }
        }

        .comment {
          p {
            font-weight: bold;
          }
          :nth-child(2) {
            color: blue;
          }
        }

        .date {
          color: gray;
        }
      }
    }
  }
`;
