'use client';

import React, { useEffect } from 'react';
import { signIn } from 'next-auth/react';

function LoginPage() {
  const test = async () => {
    const data = await http.get('/open-banners');
    console.log(data);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <h1 className="text-2xl font-bold text-white">Login Page</h1>
      <button className="text-white">Login with Google</button>
      <button
        className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-s-lg hover:bg-yellow-500"
        onClick={() => signIn()}
      >
        Login with Kakao
      </button>
    </div>
  );
}

export default LoginPage;
