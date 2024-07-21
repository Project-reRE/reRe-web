import '../index.css';
import { Ranking1, Ranking2, Ranking3 } from '@repo/icon';

type Props = {
  item: any;
  rankingNumber: number;
};

const RankingMovie = ({ item, rankingNumber }: Props) => {
  const RankingNumberIcon = () => {
    switch (rankingNumber) {
      case 1:
        return <Ranking1 />;
      case 2:
        return <Ranking2 />;
      default:
        return <Ranking3 />;
    }
  };
  return (
    <div className="flex gap-[10px]">
      <img className="relative h-[300px] w-[200px] rounded" src="https://via.placeholder.com/200x300" />
      <div className="flex w-[130px] flex-col items-start justify-between pb-2.5 pt-4">
        <RankingNumberIcon />
        <div className="flex w-full flex-col gap-[30px]">
          <div className="flex flex-col gap-[8px]">
            <div>
              <p className="ellipsis text-base font-medium text-white">영화이름</p>
              <div className="bg-Gray60 mt-[4px] h-[1px]" />
            </div>
            <p className="text-Gray60 text-sm font-medium">2024</p>
          </div>
          <div className="gap[4px] flex flex-col">
            <div className="flex gap-[5px]">
              <span className="text-Gray30 shrink-0 text-[13px] font-semibold">장르</span>
              <span className="text-Gray60 ellipsis flex-col text-[13px] font-normal">액션, 역사, 로맨스, 드라마</span>
            </div>
            <div className="flex gap-[5px]">
              <span className="text-Gray30 shrink-0 text-[13px] font-semibold">장르</span>
              <span className="text-Gray60 ellipsis flex-col text-[13px] font-normal">액션, 역사, 로맨스, 드라마</span>
            </div>
            <div className="flex gap-[5px]">
              <span className="text-Gray30 shrink-0 text-[13px] font-semibold">장르</span>
              <span className="text-Gray60 ellipsis flex-col text-[13px] font-normal">액션, 역사, 로맨스, 드라마</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingMovie;
