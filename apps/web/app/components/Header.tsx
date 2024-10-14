'use client';

import React, { HTMLAttributes, useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import _ from 'lodash';

import { LogoIcon, MyIcon, SearchIcon } from '@repo/icon';

import { PATH } from 'constant/path';

function Header() {
  const { data } = useSession();
  const isLogin = Boolean(data?.expires);
  const router = useRouter();
  const currentPathname = usePathname();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') ?? '');
  const [isHeaderTop, setIsHeaderTop] = useState(true);

  const activeStyle = 'text-Orange60 font-semibold' as HTMLAttributes<HTMLElement>['className'];

  const isActive = (pathname: string) => {
    if (currentPathname.includes(pathname)) return true;
    return false;
  };

  const handleClickSignOut = () => {
    signOut();
  };

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = useCallback(() => {
    if (!searchValue) return;
    return router.push(`${PATH.MOVIES + PATH.RANKING}?search=${searchValue}`);
  }, [searchValue]);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsHeaderTop(true);
    } else {
      setIsHeaderTop(false);
    }
  }, []);

  useLayoutEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`container fixed top-0 z-30 flex flex-col text-white transition-all ${!isHeaderTop ? 'bg-Background' : ''}`}
    >
      <div className="flex h-[65px] justify-between p-4 text-white">
        <nav>
          <ul className="flex h-full w-full gap-4 text-xl">
            <li>
              <Link href={PATH.MAIN}>
                <LogoIcon style={{ width: 63, height: 30 }} />
              </Link>
            </li>
            <li>
              <Link
                href={PATH.MOVIES + `?tab=ranking`}
                className={isActive(PATH.MOVIES) || isActive(PATH.RANKING) ? activeStyle : ''}
              >
                영화
              </Link>
            </li>
            <li>
              <Link href={PATH.LIBRARY} className={isActive(PATH.LIBRARY) ? activeStyle : ''}>
                도서
              </Link>
            </li>
            <li>
              <Link href={PATH.MUSIC} className={isActive(PATH.MUSIC) ? activeStyle : ''}>
                음반
              </Link>
            </li>
          </ul>
        </nav>
        {isLogin ? (
          <Link href={PATH.MY} className="h-fit">
            <MyIcon />
          </Link>
        ) : (
          <Link href={PATH.SIGN_IN} className="text-base">
            로그인
          </Link>
        )}
      </div>
      <div className="flex w-full justify-between px-4 py-2 text-white">
        <nav>
          <ul className="flex h-full w-full items-center gap-4 text-lg">
            <li className="h-fit">
              <Link href={PATH.MOVIES + PATH.RANKING} className={isActive(PATH.RANKING) ? 'font-bold' : ''}>
                데일리 랭킹
              </Link>
            </li>
            <li className="h-fit">
              <Link href={PATH.MOVIES + PATH.HISTORY} className={isActive(PATH.HISTORY) ? 'font-bold' : ''}>
                히스토리
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex h-[36px] items-center gap-[10px] border border-white bg-[#141414] px-[10px]">
          <input
            id="searchInput"
            type="text"
            placeholder="개봉한지 5년이 지난 재평가가 필요한 영화를 찾아보세요"
            className="placeholder:text-Gray60 text-White w-[320px] text-sm font-medium"
            onChange={handleChangeSearchInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            defaultValue={searchValue}
          />
          <button type="button" onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
