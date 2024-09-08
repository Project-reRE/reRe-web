'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

interface ModalProps {
  title?: string;
  description?: string;
}

export const ModalBody = ({ title, description }: ModalProps) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="absolute left-[50%] top-[50%] flex h-fit w-fit translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-start gap-5 rounded-2xl bg-neutral-800 px-4 py-6">
      {title && <div className="text-lg font-semibold text-white">{title}</div>}
      {description && <div className="text-sm font-normal leading-[18px] text-white">{description}</div>}
      <button
        onClick={handleClose}
        className="flex h-11 w-[311px] items-center justify-center rounded-lg bg-[#c85a27] text-[15px] font-medium text-white"
      >
        확인
      </button>
    </div>
  );
};
