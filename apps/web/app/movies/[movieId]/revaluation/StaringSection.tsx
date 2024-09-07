'use client';

import React, { useState } from 'react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { StarIcon } from '@repo/icon';
import { RevaluationRequestDto } from '@repo/services';

import { StyledRating } from 'components/StyledRating';

type Props = {
  register: UseFormRegister<RevaluationRequestDto>;
  inputField: keyof RevaluationRequestDto;
  value: number;
  setValue: UseFormSetValue<RevaluationRequestDto>;
};

const StaringSection = ({ setValue }: Props) => {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <section className="mt-[64px] flex flex-col items-center gap-[16px]">
      <div className="flex flex-col items-center gap-[24px]">
        <p className="text-2xl font-semibold text-white">지금은 몇 점 주시겠어요?</p>
        <span className="text-[32px] font-bold text-[#db7647]">{ratingValue.toFixed(1)}</span>
        <StyledRating
          precision={0.5}
          icon={<StarIcon width={40} height={40} />}
          emptyIcon={<StarIcon fill="#919191" width={40} height={40} />}
          style={{ width: 'fit-content', gap: 10 }}
          onChange={(_, value) => {
            setRatingValue(value ?? 0);
            setValue('numStars', value ?? 0);
          }}
          sx={{
            '.MuiRating-iconFilled': {
              minWidth: 40,
            },
          }}
        />
      </div>
      <p className="text-center text-base font-normal leading-tight text-[#919191]">재평가 평점을 등록해 주세요.</p>
    </section>
  );
};

export default StaringSection;
