import React, { ReactNode } from 'react';
import '../index.css';

interface ModalProps {
  title?: string;
  description?: string;
}

export const ModalBody = ({ title, description }: ModalProps) => {
  return (
    <div className="flex h-fit w-fit flex-col items-center justify-start gap-5 rounded-2xl bg-neutral-800 px-4 py-6">
      {title && <div className="text-lg font-semibold text-white">{title}</div>}
      {description && <div className="text-sm font-normal leading-[18px] text-white">{description}</div>}
      <button className="flex h-11 w-[311px] items-center justify-center rounded-lg bg-[#c85a27] text-[15px] font-medium text-white">
        확인
      </button>
    </div>
  );
};
