'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema, object } from 'yup';

import {
  EMOTION_TYPE,
  MOVIE_SPECIAL_POINT_TYPE,
  RevaluationRequestDto,
  useGetMyRevaluations,
  usePostRevaluation,
} from '@repo/services';

import { enumToArray } from 'utils/enumToArray';

import { YUP_SCHEMA } from 'constant/schema';

import ButtonSection from './ButtonSection';
import InputSection from './InputSection';
import StaringSection from './StaringSection';

type Props = {
  movieId: string;
};

const RevaluationInputs = ({ movieId }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isEditMode = Boolean((searchParams.get('mode') ?? 'create') === 'edit');
  const { data: revaluationData } = useGetMyRevaluations({ movieId }, { enabled: isEditMode });
  const { mutate: postRevaluation } = usePostRevaluation();

  const schema: ObjectSchema<any> = object({
    movieId: YUP_SCHEMA.REQUIRED,
    numStars: YUP_SCHEMA.NUM_REQUIRED,
    specialPoint: YUP_SCHEMA.REQUIRED,
    pastValuation: YUP_SCHEMA.REQUIRED,
    presentValuation: YUP_SCHEMA.REQUIRED,
    comment: YUP_SCHEMA.REQUIRED,
  });

  const reviewData = revaluationData?.results[0];

  const {
    handleSubmit,
    register, // onChange 등의 이벤트 객체 생성
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      movieId,
      numStars: reviewData?.numStars ?? 0.5,
      specialPoint: reviewData?.specialPoint ?? null,
      pastValuation: reviewData?.pastValuation ?? null,
      presentValuation: reviewData?.presentValuation ?? null,
      comment: reviewData?.comment ?? null,
    },
    resolver: yupResolver(schema),
  });

  // 전체 폼 값 동적 확인
  const [numStars, specialPoint, pastValuation, presentValuation, comment] = watch([
    'numStars',
    'specialPoint',
    'pastValuation',
    'presentValuation',
    'comment',
  ]);

  const onValid = (data: RevaluationRequestDto) => {
    console.log('data', data);
    postRevaluation(data, {
      onSuccess: () => {
        router.push('?show=true&type=completed', { scroll: false });
      },
      onError: () => {
        router.push('?show=true&type=409', { scroll: false });
      },
    });
  };

  const onInvalid = (SubmitErrorHandler: any) => {
    if (SubmitErrorHandler['numStars']) {
      router.push('?show=true&type=numStars', { scroll: false });
    } else if (SubmitErrorHandler['specialPoint']) {
      router.push('?show=true&type=specialPoint', { scroll: false });
    } else if (SubmitErrorHandler['pastValuation']) {
      router.push('?show=true&type=pastValuation', { scroll: false });
    } else if (SubmitErrorHandler['presentValuation']) {
      router.push('?show=true&type=presentValuation', { scroll: false });
    } else {
      router.push('?show=true&type=comment', { scroll: false });
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col items-center">
      <StaringSection register={register} inputField="numStars" value={numStars} setValue={setValue} />
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
        register={register}
        title="영화에 대해 한 줄 평을 남겨주세요"
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
