import React from 'react';

const MovieDetailPage = () => {
  return (
    <div className="flex flex-col">
      <div className="inline-flex h-[390px] items-center justify-start gap-7">
        <div className="absolute left-0 top-0">
          <img className="absolute h-[390px] w-[260px] shadow" src="https://via.placeholder.com/260x390" />
          <div className="absolute h-[843px] w-[1251px] bg-gradient-to-b from-black to-[#0c0c0c] blur-xl" />
        </div>
        <img className="h-[390px] w-[260px] shadow" src="https://via.placeholder.com/260x390" />
        <div className="inline-flex w-[344px] flex-col items-start justify-start gap-[76px]">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <div className="flex h-[70px] flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex h-[41px] flex-col items-start justify-start gap-1 self-stretch">
                  <div className="font-['Pretendard'] text-3xl font-semibold text-white">어바웃타임</div>
                  <div className="h-px self-stretch bg-[#919191]" />
                </div>
                <div className="font-['Pretendard'] text-lg font-medium text-white">2020</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <div className="inline-flex items-center justify-start gap-[5px]">
                <div className="font-['Pretendard'] text-[13px] font-semibold text-white">장르</div>
                <div className="font-['Pretendard'] text-[13px] font-normal text-white">로맨스, SF/판타지</div>
              </div>
              <div className="inline-flex items-center justify-start gap-[5px]">
                <div className="font-['Pretendard'] text-[13px] font-semibold text-white">감독</div>
                <div className="font-['Pretendard'] text-[13px] font-normal text-white">리차드 커스티스</div>
              </div>
              <div className="inline-flex items-start justify-start gap-[5px]">
                <div className="font-['Pretendard'] text-[13px] font-semibold text-white">출연</div>
                <div className="font-['Pretendard'] text-[13px] font-normal text-white">
                  레이첼 맥아담스, 도널 클리슨, 빌 나이, 마고 로비, 바네사 커비 등
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="font-['Pretendard'] text-[13px] font-normal text-white">7월 재평가 평점</div>
              <div className="inline-flex items-center justify-start gap-[5px]">
                <div className="font-['Elice DX Neolli'] text-[34px] font-bold text-[#c85a27]">4.2</div>
                <div className="flex items-start justify-start">
                  <div className="relative h-6 w-6">
                    <div className="absolute left-0 top-0 h-6 w-6 bg-[#d9d9d9]" />
                  </div>
                  <div className="relative h-6 w-6">
                    <div className="absolute left-0 top-0 h-6 w-6 bg-[#d9d9d9]" />
                  </div>
                  <div className="relative h-6 w-6">
                    <div className="absolute left-0 top-0 h-6 w-6 bg-[#d9d9d9]" />
                  </div>
                  <div className="relative h-6 w-6">
                    <div className="absolute left-0 top-0 h-6 w-6 bg-[#d9d9d9]" />
                  </div>
                  <div className="relative h-6 w-6">
                    <div className="absolute left-0 top-0 h-6 w-6 bg-[#d9d9d9]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
