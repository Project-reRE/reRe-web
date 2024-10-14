import React from 'react';

import Link from 'next/link';

import { EditIcon } from '@repo/icon';
import { getMyProfile } from '@repo/services';

import NameEditModal from './NameEditModal';

type Props = {
  params: { movieId: string };
  searchParams: Record<string, string> | null | undefined;
};

const MyProfileInformation = async ({ params, searchParams }: Props) => {
  const data = await getMyProfile();
  const show = searchParams?.show;

  return (
    <>
      {show && <NameEditModal />}
      <title>{data?.nickName}</title>
      <div className="flex gap-[24px]">
        <div className="h-[150px] w-[150px] rounded-full bg-[#d9d9d9]" />
        <div className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[8px]">
              <p className="text-[28px] font-medium text-white">{data?.nickName}</p>
              <button type="button">
                <Link href={'?show=true'}>
                  <EditIcon />
                </Link>
              </button>
            </div>
            <div className="text-base font-normal text-[#cccccc]">
              {data?.gender ? '남성' : '여성'} {data?.birthDate}년생
            </div>
            <div className="text-Orange50 text-lg font-medium">
              재평가한 콘텐츠 수 : {data?.statistics?.numRevaluations ?? 0}개
            </div>
          </div>
          <div className="text-base font-normal text-[#cccccc]">{data?.email}</div>
        </div>
      </div>
    </>
  );
};

export default MyProfileInformation;
