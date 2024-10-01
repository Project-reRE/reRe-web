import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import LoginFailedModal from '../components/modal/LoginFailedModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'constant/paths';

function Login() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    navigate(PATH.USER);
  };

  return (
    <>
      <LoginFailedModal open={open} handleClose={handleClose} />
      <SWrapper>
        <SLoginContainer>
          <div>로고 자리</div>
          <SInputBox>
            <TextField type="text" label="아이디" placeholder="아이디를 입력하세요" />
          </SInputBox>
          <SInputBox>
            <TextField type="password" label="비밀번호" placeholder="비밀번호를 입력하세요" />
          </SInputBox>
          <Button variant="contained" sx={{ width: '100%', height: 50 }} onClick={() => setOpen(true)}>
            로그인
          </Button>
        </SLoginContainer>
      </SWrapper>
    </>
  );
}

export default Login;

const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SLoginContainer = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const SInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
