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

const ReportPassModal = ({ open, handleClose }: Props) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <SBox sx={style}>
        <Typography variant="h6" component="h2">
          한 줄 평 정상 처리
        </Typography>
        <Typography sx={{ mt: 2 }}>해당 한 줄 평을 정상처리하겠습니까?</Typography>
        <div style={{ display: 'flex', gap: 20 }}>
          <Button variant="outlined" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" onClick={handleClose}>
            정상
          </Button>
        </div>
      </SBox>
    </Modal>
  );
};

export default ReportPassModal;

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
