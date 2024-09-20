'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema, object } from 'yup';

import { deleteCookie, getCookie } from 'utils/cookie';

import { YUP_SCHEMA } from 'constant/schema';

import SignUpModalBody from './SignUpModalBody';

const SignUpPage = () => {
  const router = useRouter();

  const schema: ObjectSchema<any> = object({
    birthDate: YUP_SCHEMA.REQUIRED,
    gender: YUP_SCHEMA.REQUIRED,
  });

  const {
    handleSubmit,
    register, // onChange 등의 이벤트 객체 생성
  } = useForm({
    defaultValues: {
      gender: true,
      birthDate: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSignUp = async (data: any) => {
    const provider = await getCookie('provider');
    const accessToken = await getCookie('access_token');
    const email = (await getCookie('email')) ?? '';

    if (provider) {
      router.replace('/');
    }

    const _data = {
      ...data,
      gender: data.gender === '남자' ? true : false,
      email,
      provider,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(_data),
      headers: {
        'oAuth-token': `${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 200) {
      signIn('kakao');
      deleteCookie('access_token');
    }
  };

  useEffect(() => {
    return () => {
      deleteCookie('access_token');
    };
  }, []);

  const test = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignUp, test)}
      className="layout flex min-h-[calc(100vh-103px)] flex-col items-center justify-center gap-[60px] py-[74px]"
    >
      <div className="flex flex-col items-center gap-[37px]">
        <img className="h-[170px] w-[211.56px]" src="https://via.placeholder.com/212x170" />
        <div className="flex flex-col items-center justify-start gap-3">
          <p className="text-center text-xl font-semibold leading-relaxed text-white">거의 다 되었어요!</p>
          <p className="text-Gray60 text-center text-base font-medium leading-relaxed">
            이제 간략한 정보 입력과 동의만 하시면
            <br />
            재평가의 역사에 참여하실 수 있어요!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[24px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-center gap-[30px]">
            <span className="w-14 text-[15px] font-semibold leading-relaxed text-white">출생연도</span>
            <input
              {...register('birthDate')}
              className="text-Gray60 flex h-[34px] w-[260px] items-center border border-[#444444] px-2.5 py-2 text-[13px] font-medium leading-[18px]"
              placeholder="숫자로 4글자 입력해 주세요.(예: 2010)"
              maxLength={4}
            />
          </div>
          <div className="flex items-center gap-[30px]">
            <span className="w-14 text-[15px] font-semibold leading-relaxed text-white">성별</span>
            <div className="flex items-center gap-10">
              <label className="flex items-center gap-2 text-center text-[13px] font-medium leading-[18px] text-white">
                <input {...register('gender')} type="radio" defaultChecked value={'남자'} />
                남자
              </label>
              <label className="flex items-center gap-2 text-center text-[13px] font-medium leading-[18px] text-white">
                <input {...register('gender')} type="radio" value={'여자'} />
                여자
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <label className="flex items-center gap-[8px]">
            <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
            <span className="font-['Pretendard'] text-sm font-semibold text-[#b3b3b3]">모두 동의하기</span>
          </label>
          <div className="h-[0px] w-[346px] border border-[#444444]" />
          <div className="flex flex-col gap-[12px]">
            <label className="text-Gray60 flex w-fit items-center gap-[8px] text-sm font-normal leading-[18px]">
              <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
              (필수) 만 14세 이상이에요.
            </label>
            <label className="text-Gray60 flex w-fit items-center gap-[8px] text-sm font-normal leading-[18px]">
              <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
              (필수) 서비스 이용약관 동의하기
            </label>
            <label className="text-Gray60 flex w-fit items-center gap-[8px] text-sm font-normal leading-[18px]">
              <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
              (필수) 개인정보 수집 및 이용 동의하기
            </label>
          </div>
        </div>
      </div>
      <button className="text-Gray60 flex h-[61px] w-[343px] items-center justify-center gap-2.5 rounded-xl bg-[#444444] px-6 py-4 text-2xl font-medium">
        회원 가입 및 로그인하기
      </button>
    </form>
  );
};

export default SignUpPage;
