import React, { Suspense } from 'react';

import Link from 'next/link';

import { Skeleton } from '@mui/material';

import { PATH } from 'constant/path';

import MyProfileInformation from './MyProfileInformation';

type Props = {
  params: { movieId: string };
  searchParams: Record<string, string> | null | undefined;
};

const MyProfilePage = ({ params, searchParams }: Props) => {
  return (
    <section className="layout center flex max-w-[952px] flex-col gap-[64px] pb-[140px] pt-[84px]">
      <Suspense
        fallback={
          <div className="flex h-[152px] items-center gap-[24px]">
            <Skeleton style={{ borderRadius: '100%', transform: 'none' }} width={150} height={150} />
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-[8px]">
                <Skeleton style={{ transform: 'none' }} width={120} />
                <Skeleton style={{ transform: 'none' }} width={150} />
                <Skeleton style={{ transform: 'none' }} width={200} />
              </div>
              <Skeleton style={{ transform: 'none' }} width={140} />
            </div>
          </div>
        }
      >
        <MyProfileInformation params={params} searchParams={searchParams} />
      </Suspense>
      <div>
        <p className="text-Gray60 text-lg font-normal">서비스 안내</p>
        <ul>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              공지사항 보기
            </a>
          </li>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              자주 묻는 질문과 답변보기
            </a>
          </li>
          <li className="text-Gray80 py-[24px] text-xl font-medium">이메일로 문의하기</li>
        </ul>
      </div>
      <div>
        <p className="text-Gray60 text-lg font-normal">서비스 약관</p>
        <ul>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              서비스 이용약관 보기
            </a>
          </li>
          <li className="border-Gray20 text-Gray80 border-b-[1px] py-[24px] text-xl font-medium">
            <a href="" target="block">
              개인정보 처리방침 보기
            </a>
          </li>
          <li className="text-Gray80 py-[24px] text-xl font-medium">
            <a href="https://revaluation.notion.site/72ff79808476490aa5feb170caa59652" target="block">
              운영정책 보기
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-Gray60 text-lg font-normal">라이선스</p>
        <ul>
          <li className="text-Gray80 py-[24px] text-xl font-medium">
            <a href="" target="block">
              사용한 오픈 API 보기
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[24px]">
        <button className="text-Gray60 inline-flex h-[52px] w-[343px] items-center justify-center gap-2.5 rounded-xl bg-[#444444] px-6 py-4 text-center text-[17px] font-medium">
          로그아웃하기
        </button>
        <Link href={PATH.WITHDRAW} className="text-Gray40 text-center text-xl font-medium">
          회원 탈퇴하기
        </Link>
      </div>
    </section>
  );
};

export default MyProfilePage;
