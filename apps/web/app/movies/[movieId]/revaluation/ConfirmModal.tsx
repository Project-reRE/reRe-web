'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Modal } from '@mui/material';

import { ModalBody } from 'components/ModalBody';

import { PATH } from 'constant/path';

type Props = {
  movieId: string;
  searchParams: Record<string, string> | null | undefined;
  mode?: 'create' | 'edit';
};

const ConfirmModal = ({ movieId, searchParams, mode = 'create' }: Props) => {
  const router = useRouter();
  const modalType = searchParams?.type;
  const title = mode === 'create' ? '재평가 완료하기' : '재평가 수정하기';

  const modalProps = () => {
    switch (modalType) {
      case 'numStars':
        return {
          title,
          description: `평점은 0.5점부터 등록할 수 있어요.`,
          callback: () => router.back(),
        };
      case 'specialPoint':
        return {
          title,
          description: `이 영화의 주목할 포인트는 무엇인가요?`,
          callback: () => router.back(),
        };
      case 'pastValuation':
        return {
          title,
          description: `이 영화, 과거엔 어땠는지 알려주세요.\n긍정적인가요? 부정적인가요?`,
          callback: () => router.back(),
        };
      case 'presentValuation':
        return {
          title,
          description: `이 영화, 지금은 어떤지 알려주세요.\n긍정적인가요? 부정적인가요?`,
          callback: () => router.back(),
        };
      case 'comment':
        return {
          title,
          description: `당신의 의견을 한 줄 평으로 들려주세요.`,
          callback: () => router.back(),
        };
      case 'completed':
        return {
          title,
          description: `재평가가 완료되었어요!\n당신의 재평가가 의미있는 기록이 될거에요.`,
          callback: () => router.push(`${PATH.MOVIES}/${movieId}`),
        };
      case '409':
        return {
          title,
          description: `지난 달의 재평가엔 참여할 수 없어요.`,
          callback: () => router.back(),
        };
      default:
        return {
          title: '잘못된 경로 진입',
          description: `돌아가주세요`,
          callback: () => router.back(),
        };
    }
  };

  return (
    <Modal open={true}>
      <ModalBody {...modalProps()} />
    </Modal>
  );
};

export default ConfirmModal;
