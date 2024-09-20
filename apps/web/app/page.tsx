'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { PATH } from './constant/path';

const page = () => {
  const router = useRouter();
  router.push(PATH.MOVIES);
  return <div>hello world</div>;
};

export default page;
