import React, { HTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { RevaluationRequestDto } from '@repo/services';

import { enumToArrayType } from 'utils/enumToArray';

type Props = {
  register: UseFormRegister<RevaluationRequestDto>;
  title: string;
  buttonList: enumToArrayType;
  inputField: keyof RevaluationRequestDto;
  selectedButton: any;
};

const ButtonSection = ({ register, inputField, title, buttonList, selectedButton }: Props) => {
  const activeStyle = 'bg-[#4a6b43] text-[#d0e0cd] border-none' as HTMLAttributes<HTMLElement>['className'];

  return (
    <section className="mt-[64px] flex flex-col items-center gap-[32px]">
      <p className="text-2xl font-semibold text-white">{title}</p>
      <div className="grid grid-cols-3 gap-x-[8px] gap-y-[24px]">
        {buttonList.map((item) => {
          const isSelected = item.value === selectedButton;
          return (
            <label
              key={item.value}
              className={`flex h-12 w-[152px] items-center justify-center rounded-[80px] border border-[#444444] text-base text-[#919191] ${isSelected ? activeStyle : ''}`}
            >
              <input
                type="radio"
                checked={selectedButton === item.value}
                style={{ display: 'none' }}
                value={item.value}
                {...register(inputField)}
              />
              {item.label}
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default ButtonSection;
