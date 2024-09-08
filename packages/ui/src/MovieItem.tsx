import { MovieData } from '@repo/services';

type Props = {
  children?: React.ReactNode;
  data: MovieData;
};

const MovieItem = ({ children, data }: Props) => {
  if (!data) return <></>;
  const yearsData = data.repRlsDate.slice(0, 4);
  const actorsText = data.actors.map((el) => el.actorNm).join(', ');
  const directorsText = data.directors.map((el) => el.directorNm).join(', ');

  return (
    <div className="flex gap-[10px]">
      <img className="relative h-[300px] w-[200px] rounded" src={data.posters[0]} />
      <div className="flex w-[130px] flex-col items-start justify-end pb-2.5 pt-4">
        <div className="flex w-full flex-col gap-[30px]">
          {children && children}
          <div className="flex flex-col gap-[8px]">
            <div>
              <p className="ellipsis text-base font-medium text-white">{data.title}</p>
              <div className="bg-Gray60 mt-[4px] h-[1px]" />
            </div>
            <p className="text-Gray60 text-sm font-medium">{yearsData}</p>
          </div>
          <div className="gap[4px] flex flex-col">
            <div className="flex gap-[5px]">
              <span className="text-Gray30 shrink-0 text-[13px] font-semibold">장르</span>
              <span className="text-Gray60 ellipsis flex-col text-[13px] font-normal">{data.genre}</span>
            </div>
            <div className="flex gap-[5px]">
              <span className="text-Gray30 shrink-0 text-[13px] font-semibold">감독</span>
              <span className="text-Gray60 ellipsis flex-col text-[13px] font-normal">{actorsText}</span>
            </div>
            <div className="flex gap-[5px]">
              <span className="text-Gray30 shrink-0 text-[13px] font-semibold">출연</span>
              <span className="text-Gray60 ellipsis flex-col text-[13px] font-normal">{directorsText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
