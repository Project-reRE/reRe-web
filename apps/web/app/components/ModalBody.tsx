import React from 'react';

interface ModalProps {
  title: string;
  description: string;
  callback: () => void;
}

export const ModalBody = ({ title, description, callback }: ModalProps) => {
  const handleClose = () => {
    callback();
  };

  return (
    <div className="absolute left-[50%] top-[50%] flex h-fit w-fit translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-start gap-5 rounded-2xl bg-neutral-800 px-4 py-6">
      {title && <p className="whitespace-pre text-lg font-semibold text-white">{title}</p>}
      {description && (
        <p className="whitespace-pre text-center text-sm font-normal leading-[18px] text-white">{description}</p>
      )}
      <button
        onClick={handleClose}
        className="flex h-11 w-[311px] items-center justify-center rounded-lg bg-[#c85a27] text-[15px] font-medium text-white"
      >
        확인
      </button>
    </div>
  );
};
