import { Box, Button, Modal, Typography } from '@mui/material';
import styled from 'styled-components';

type Props = {
  open: boolean;
  handleClose: () => void;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const LoginFailedModal = ({ open, handleClose }: Props) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <SBox sx={style}>
        <Typography variant="h6" component="h2">
          로그인
        </Typography>
        <Typography sx={{ mt: 2 }}>아이디 또는 비밀번호가 잘못되었습니다.</Typography>
        <Button variant="contained" onClick={handleClose}>
          확인
        </Button>
      </SBox>
    </Modal>
  );
};

export default LoginFailedModal;

const SBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 10px;

  button {
    width: 100px;
  }
`;
