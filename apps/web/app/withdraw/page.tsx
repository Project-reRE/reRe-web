'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { EmptyIcon } from '@repo/icon';
import { useDeleteMy } from '@repo/services';

import { PATH } from 'constant/path';

const WithdrawPage = () => {
  const router = useRouter();
  const { mutate: deleteUser } = useDeleteMy();

  const handleDeleteUser = () => {
    deleteUser(undefined, {
      onSuccess: () => {
        sessionStorage.clear();
        router.push(PATH.MAIN);
      },
    });
  };

  const handleClickCancelBtn = () => {
    router.push(PATH.MY);
  };

  return (
    <section className="layout flex flex-col items-center justify-center gap-[32px] py-[136px]">
      <p className="text-center text-xl font-semibold leading-relaxed text-[#d1d1d1]">정말로 탈퇴하시겠어요?</p>
      <div className="flex w-fit flex-col items-center gap-[24px]">
        <EmptyIcon />
        <p className="text-center text-base font-medium leading-relaxed text-[#919191]">
          아직 당신의 현명한 재평가를 기다리는 콘텐츠가 있어요. <br />
          재평가를 통해 다시 한 번 영화의 가치를 판단해 주세요.
        </p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className="text-center text-xl font-semibold text-[#e39672]">
          내가 그를 만나고 싶다고 말해줘.
          <br />
          그리고 나에게 다시 돌아와 달라고.
        </p>
        <p className="text-center text-sm font-normal text-[#919191]">- 영화 러브 액츄얼리에서</p>
      </div>
      <div className="mb-[16px] flex flex-col gap-[12px]">
        <p className="text-sm font-semibold text-[#b3b3b3]">탈퇴 시, 유의사항</p>
        <ol className="flex w-[346px] flex-col items-start justify-start gap-1 rounded-lg bg-neutral-800 px-1.5 py-4">
          <li className="text-sm font-medium text-[#919191]">1. 탈퇴 시, 작성한 콘텐츠는 삭제되지 않습니다.</li>
          <li className="text-sm font-medium text-[#919191]">
            2. 탈퇴 시, 삭제된 회원 및 계정 정보는 복구할 수 없습니다.
          </li>
          <li className="text-sm font-medium text-[#919191]">
            3. 탈퇴 시, 관련 법령 상 보관 의무가 있는 정보를 제외한 회원 및 계정 정보는 삭제됩니다.
          </li>
        </ol>
        <div className="flex gap-2">
          <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
          <p className="text-sm font-normal leading-[18px] text-[#919191]">위의 내용을 확인하였으며 모두 동의합니다.</p>
        </div>
      </div>
      <button
        className="h-14 w-[346px] rounded-[10px] bg-[#364b6d] text-center text-2xl font-medium text-white"
        onClick={handleClickCancelBtn}
      >
        다시 생각하기
      </button>
      <button
        className="h-14 w-[346px] rounded-[10px] bg-[#444444] text-center text-2xl font-medium text-[#919191]"
        onClick={handleDeleteUser}
      >
        회원 탈퇴하기
      </button>
    </section>
  );
};

export default WithdrawPage;
