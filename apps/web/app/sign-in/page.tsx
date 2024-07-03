'use client';

import React from 'react';
import { signIn } from 'next-auth/react';

function SignInPage() {
  const signInKaKao = () => {
    signIn('kakao', { callbackUrl: 'http://localhost:3000/sign-in' });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold text-white">Login Page</h1>
      <button
        className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-500"
        onClick={signInKaKao}
      >
        Kakao로 계속하기
      </button>
    </div>
  );
}

export default SignInPage;
