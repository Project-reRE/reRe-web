import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

import { PATH } from 'constant/path';

function Header() {
  const activeStyle = 'text-primary-orange-60 font-semibold' as HTMLAttributes<HTMLElement>['className'];

  return (
    <>
      <header className="p-4 w-full flex justify-between text-white">
        <nav>
          <ul className="w-full h-full flex gap-4 text-xl">
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
        <Link href={PATH.LOGIN} className="text-base">
          로그인
        </Link>
      </header>
      <header className="p-4 w-full flex justify-between text-white">
        <nav>
          <ul className="w-full h-full flex gap-4 text-lg">
            <li>
              <Link href={PATH.LOGIN}>데일리 랭킹</Link>
            </li>
            <li>
              <Link href={PATH.LOGIN}>히스토리</Link>
            </li>
          </ul>
        </nav>
        <div className="px-2.5 py-1.5 w-[240px] border border-white">
          <input type="text" placeholder="재평가하고 싶은 영화가 있나요?" />
        </div>
      </header>
    </>
  );
}

export default Header;
