import React, { ReactNode } from 'react';

interface ModalProps {
  title: string;
  description?: string;
  callback?: () => void;
  cancelCallback?: () => void;
  cancelBtn?: boolean;
  checkBtnName?: string;
  children?: ReactNode;
  checkBtnDisabled?: boolean;
}

export const ModalBody = ({
  title,
  description,
  callback,
  checkBtnName = '확인',
  cancelBtn = false,
  cancelCallback,
  children,
  checkBtnDisabled = false,
}: ModalProps) => {
  const handleClickCancelBtn = () => {
    cancelCallback?.();
  };

  const handleClickCompleteBtn = () => {
    callback?.();
  };

  return (
    <div className="absolute left-[50%] top-[50%] flex h-fit w-[343px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-start gap-5 rounded-2xl bg-neutral-800 px-4 py-6">
      {title && <p className="whitespace-pre text-lg font-semibold text-white">{title}</p>}
      {description && (
        <p className="whitespace-pre text-center text-sm font-normal leading-[18px] text-white">{description}</p>
      )}
      {children && children}
      <div className="flex h-11 w-full gap-[7px]">
        {cancelBtn && (
          <button
            onClick={handleClickCancelBtn}
            className="flex w-full items-center justify-center rounded-lg bg-[#364B6D] text-[15px] font-medium text-white"
          >
            취소
          </button>
        )}
        <button
          disabled={checkBtnDisabled}
          onClick={handleClickCompleteBtn}
          className="flex w-full items-center justify-center rounded-lg bg-[#c85a27] text-[15px] font-medium text-white disabled:bg-[#454545] disabled:text-[#919191]"
        >
          {checkBtnName}
        </button>
      </div>
    </div>
  );
};
