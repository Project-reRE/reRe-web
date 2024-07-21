'use client';

import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

import { PATH } from 'constant/path';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const { data } = useSession();
  const isLogin = Boolean(data?.expires);
  console.log(data?.user);

  const activeStyle = 'text-primary-orange-60 font-semibold' as HTMLAttributes<HTMLElement>['className'];

  const handleClickSignOut = () => {
    signOut();
  };

  return (
    <>
      <header className="flex w-full justify-between p-4 text-white">
        <nav>
          <ul className="flex h-full w-full gap-4 text-xl">
            <li>
              <Link href={PATH.MAIN}>로고</Link>
            </li>
            <li>
              <Link href={PATH.MOVIE} className={activeStyle}>
                영화
              </Link>
            </li>
            <li>
              <Link href={PATH.LIBRARY}>도서</Link>
            </li>
            <li>
              <Link href={PATH.MUSIC}>음반</Link>
            </li>
          </ul>
        </nav>

        {isLogin ? (
          <button onClick={handleClickSignOut}>로그아웃</button>
        ) : (
          <Link href={PATH.SIGN_IN} className="text-base">
            로그인
          </Link>
        )}
      </header>
      <header className="flex w-full justify-between p-4 text-white">
        <nav>
          <ul className="flex h-full w-full gap-4 text-lg">
            <li>
              <Link href={PATH.SIGN_IN}>데일리 랭킹</Link>
            </li>
            <li>
              <Link href={PATH.SIGN_IN}>히스토리</Link>
            </li>
          </ul>
        </nav>
        <div className="border border-white px-2.5 py-1.5">
          <input
            type="text"
            placeholder="개봉한지 5년이 지난 재평가가 필요한 영화를 찾아보세요"
            className="text-Gray60 text-sm font-medium"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
