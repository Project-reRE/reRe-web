import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { RevaluationRequestDto } from '@repo/services';

type Props = {
  register: UseFormRegister<RevaluationRequestDto>;
  inputField: keyof RevaluationRequestDto;
  title: string;
  value?: string;
  maxLength?: number;
};

const InputSection = ({ register, inputField, title, maxLength, value }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <section className="mt-[64px] flex flex-col items-center gap-[32px]">
      <p className="text-2xl font-semibold text-white">{title}</p>
      <label className="relative h-[122px] w-[472px] rounded-lg bg-neutral-800 p-[16px]">
        <textarea
          {...register(inputField)}
          className="text-White w-full resize-none text-sm font-normal leading-[18px] placeholder:text-[#777777]"
          placeholder="작성한 한 줄 평에 부적절한 내용이 있을 경우, 사전 안내 없이 삭제될 수 있어요."
          maxLength={maxLength}
          onKeyDown={handleKeyDown}
        />
        <span className="absolute bottom-[16px] right-[16px] text-xs font-medium text-[#919191]">
          {value?.length ?? 0}/{maxLength}
        </span>
      </label>
    </section>
  );
};

export default InputSection;
