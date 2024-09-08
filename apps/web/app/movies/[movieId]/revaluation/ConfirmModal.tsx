import React from 'react';

import { Modal } from '@mui/material';

import { ModalBody } from 'components/ModalBody';

const ConfirmModal = () => {
  return (
    <Modal open={true}>
      <ModalBody
        title="재평가 완료하기"
        description="재평가가 완료되었어요!\n당신의 재평가가 의미있는 기록이 될거에요."
      />
    </Modal>
  );
};

export default ConfirmModal;
