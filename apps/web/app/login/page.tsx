import React from 'react';

function LoginPage() {
  const handleGoogleLogin = () => {
    // Google 로그인 로직 추가
  };

  const handleKakaoLogin = () => {
    // 카카오 로그인 로직 추가
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen">
      <h1 className="text-2xl font-bold text-white">Login Page</h1>
      <button className="text-white">Login with Google</button>
      <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-s-lg hover:bg-yellow-500">
        Login with Kakao
      </button>
    </div>
  );
}

export default LoginPage;
