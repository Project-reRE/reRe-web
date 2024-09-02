'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { EMOTION_TYPE, MOVIE_SPECIAL_POINT_TYPE } from '@repo/services';

import { enumToArray } from 'utils/enumToArray';

import { YUP_SCHEMA } from 'constant/schema';

import ButtonSection from './ButtonSection';
import InputSection from './InputSection';
import StaringSection from './StaringSection';

const RevaluationInputs = () => {
  const {
    handleSubmit,
    register, // onChange 등의 이벤트 객체 생성
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver({
      specialPoint: YUP_SCHEMA.REQUIRED,
      pastValuation: YUP_SCHEMA.REQUIRED,
      presentValuation: YUP_SCHEMA.REQUIRED,
      comment: YUP_SCHEMA.REQUIRED,
    }),
  });

  const handleChangeFormData = (data: any) => {
    console.log('data', data, errors);
  };

  // 전체 폼 값 동적 확인
  const [specialPoint, pastValuation, presentValuation, comment] = watch([
    'specialPoint',
    'pastValuation',
    'presentValuation',
    'comment',
  ]);

  return (
    <form onSubmit={handleSubmit(handleChangeFormData)} className="flex flex-col items-center">
      <StaringSection />
      <ButtonSection
        register={register}
        inputField="specialPoint"
        title="이 영화의 주목 포인트는 무엇인가요?"
        buttonList={enumToArray(MOVIE_SPECIAL_POINT_TYPE)}
        selectedButton={specialPoint}
      />
      <ButtonSection
        register={register}
        inputField="pastValuation"
        title="개봉 당시, 이 영화는 어땠나요?"
        buttonList={enumToArray(EMOTION_TYPE)}
        selectedButton={pastValuation}
      />
      <ButtonSection
        register={register}
        inputField="presentValuation"
        title="7월에 이 영화는 어땠나요?"
        buttonList={enumToArray(EMOTION_TYPE)}
        selectedButton={presentValuation}
      />
      <InputSection
        title="영화에 대해 한 줄 평을 남겨주세요"
        register={register}
        inputField="comment"
        maxLength={100}
        value={comment}
      />
      <button
        type="submit"
        className="bg-Orange50 mt-[32px] h-14 w-[341px] rounded-[10px] text-center text-2xl font-medium text-white"
      >
        재평가 완료하기
      </button>
    </form>
  );
};

export default RevaluationInputs;
