import React from 'react';
import SignUpModalBody from './SignUpModalBody';

const SignUpPage = () => {
  const handleShowModal = () => {
    SignUpModalBody;
  };

  return (
    <form className="flex min-h-[calc(100vh-103px-165px)] flex-col items-center justify-center gap-[60px]">
      <div className="flex flex-col items-center gap-[37px]">
        <img className="h-[170px] w-[211.56px]" src="https://via.placeholder.com/212x170" />
        <div className="flex flex-col items-center justify-start gap-3">
          <p className="text-center text-xl font-semibold leading-relaxed text-white">거의 다 되었어요!</p>
          <p className="text-Gray60 text-center text-base font-medium leading-relaxed">
            이제 간략한 정보 입력과 동의만 하시면
            <br />
            재평가의 역사에 참여하실 수 있어요!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[24px]">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-center gap-[30px]">
            <span className="w-14 text-[15px] font-semibold leading-relaxed text-white">출생연도</span>
            <input
              className="text-Gray60 flex h-[34px] w-[260px] items-center border border-[#444444] px-2.5 py-2 text-[13px] font-medium leading-[18px]"
              placeholder="숫자로 4글자 입력해 주세요.(예: 2010)"
            />
          </div>
          <div className="flex items-center gap-[30px]">
            <span className="w-14 text-[15px] font-semibold leading-relaxed text-white">성별</span>
            <div className="flex items-center gap-10">
              <label className="flex items-center gap-2 text-center text-[13px] font-medium leading-[18px] text-white">
                <input type="radio" name="sex" defaultChecked />
                남자
              </label>
              <label className="flex items-center gap-2 text-center text-[13px] font-medium leading-[18px] text-white">
                <input type="radio" name="sex" />
                여자
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <label className="flex items-center gap-[8px]">
            <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
            <span className="font-['Pretendard'] text-sm font-semibold text-[#b3b3b3]">모두 동의하기</span>
          </label>
          <div className="h-[0px] w-[346px] border border-[#444444]" />
          <div className="flex flex-col gap-[12px]">
            <label className="text-Gray60 flex w-fit items-center gap-[8px] text-sm font-normal leading-[18px]">
              <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
              (필수) 만 14세 이상이에요.
            </label>
            <label className="text-Gray60 flex w-fit items-center gap-[8px] text-sm font-normal leading-[18px]">
              <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
              (필수) 서비스 이용약관 동의하기
            </label>
            <label className="text-Gray60 flex w-fit items-center gap-[8px] text-sm font-normal leading-[18px]">
              <input type="checkbox" className="h-6 w-6 rounded border border-[#5e5e5e] bg-neutral-800" />
              (필수) 개인정보 수집 및 이용 동의하기
            </label>
          </div>
        </div>
      </div>
      <button className="text-Gray60 flex h-[61px] w-[343px] items-center justify-center gap-2.5 rounded-xl bg-[#444444] px-6 py-4 text-2xl font-medium">
        회원 가입 및 로그인하기
      </button>
    </form>
  );
};

export default SignUpPage;
