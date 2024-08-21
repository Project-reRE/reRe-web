import { getFindOneMovie, MovieResponseDto, useGetFindOneMovie } from '@repo/services';
import { dehydrate } from '@tanstack/react-query';
import getQueryClient from 'components/queryClient';
import { GetServerSideProps } from 'next';
import React from 'react';
import Image from 'next/image';

// export async function getServerSideProps(context: any) {
//   const { movieId } = context.params as { movieId: string };
//   const queryClient = getQueryClient();

//   // 서버에서 데이터를 미리 fetch
//   await queryClient.prefetchQuery({ queryKey: ['movie', movieId], queryFn: () => getFindOneMovie(movieId) });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

const MovieDetailPage = async ({ params }: { params: { movieId: string }; dehydratedState: any }) => {
  // const data = await http.get<MovieResponseDto>(`/movies/${params.movieId}`);
  // const data = await getFindOneMovie(params.movieId);

  return (
    <div className="flex flex-col">
      {/* background */}
      <div className="absolute left-0 top-0 z-[-1] flex h-[594px] w-full items-center justify-center overflow-hidden">
        {/* dim */}
        <div className="absolute left-0 top-0 h-[84px] w-full bg-gradient-to-t from-transparent to-[#141414]" />
        <div className="absolute bottom-0 left-0 h-[120px] w-full bg-gradient-to-b from-transparent to-[#141414]" />
        <Image
          src="/어바웃타임.jpg"
          className="absolute left-0 top-0 z-[-2] h-[594px] w-full bg-gradient-to-b blur-xl"
          alt="어바웃타임"
          width={0}
          height={594}
          sizes="100vw"
          style={{ width: '100%', maxHeight: 594 }}
          objectFit="contain"
        />

        {/* <img className="h-[390px] w-[260px]" src={data?.data.posters[0] ?? ''} alt={data?.data.title + '포스터'} /> */}
        {/* <Image
          className="h-[390px] w-[260px] shadow"
          src={data?.data.posters[0] ?? ''}
          width={260}
          height={390}
          alt={data?.data.title + '포스터'}
        /> */}
        <div className="inline-flex w-[344px] flex-col items-start justify-start gap-[76px]">
          <div className="flex flex-col items-start justify-start gap-[26px]">
            <div className="flex h-[70px] flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="flex h-[41px] flex-col items-start justify-start gap-1 self-stretch">
                  <span className="font-['Pretendard'] text-3xl font-semibold text-white">어바웃타임</span>
                  <div className="h-px self-stretch bg-[#919191]" />
                </div>
                <span className="font-['Pretendard'] text-lg font-medium text-white">2020</span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-1">
              <div className="inline-flex items-center justify-start gap-[5px]">
                <span className="font-['Pretendard'] text-[13px] font-semibold text-white">장르</span>
                <span className="font-['Pretendard'] text-[13px] font-normal text-white">로맨스, SF/판타지</span>
              </div>
              <div className="inline-flex items-center justify-start gap-[5px]">
                <span className="font-['Pretendard'] text-[13px] font-semibold text-white">감독</span>
                <span className="font-['Pretendard'] text-[13px] font-normal text-white">리차드 커스티스</span>
              </div>
              <div className="inline-flex items-start justify-start gap-[5px]">
                <span className="font-['Pretendard'] text-[13px] font-semibold text-white">출연</span>
                <span className="font-['Pretendard'] text-[13px] font-normal text-white">
                  레이첼 맥아담스, 도널 클리슨, 빌 나이, 마고 로비, 바네사 커비 등
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="font-['Pretendard'] text-[13px] font-normal text-white">7월 재평가 평점</span>
              <div className="inline-flex items-center justify-start gap-[5px]">
                <span className="font-['Elice DX Neolli'] text-[34px] font-bold text-[#c85a27]">4.2</span>
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
      <div className="inline-flex h-11 w-[1152px] items-center justify-center gap-5 bg-gradient-to-t from-[#0c0c0c] to-[#0c0c0c] px-[100px]">
        <div className="relative h-6 w-6" />
        <div className="flex items-center justify-start gap-2.5">
          <div className="font-['Pretendard'] text-3xl font-bold text-white">2024.07</div>
        </div>
        <div className="relative h-6 w-6" />
      </div>
    </div>
  );
};

export default MovieDetailPage;
