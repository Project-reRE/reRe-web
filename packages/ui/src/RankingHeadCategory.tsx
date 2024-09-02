import { OpenMovieSetResponseDto } from '@repo/services';
import { ColorMap } from '@repo/tailwind-config/theme';

type Props = {
  data: OpenMovieSetResponseDto;
  color?: {
    bgColor: string;
    textColor: string;
    titleColor: string;
  };
};

const RankingHeadCategory = ({
  data,
  color = { bgColor: ColorMap.Orange40, textColor: ColorMap.Orange90, titleColor: ColorMap.Orange60 },
}: Props) => {
  return (
    <div className="bg-Gray20 flex h-[49px] w-full gap-[10px] rounded-bl-lg rounded-tl-lg p-2.5">
      <div
        className={`flex h-[29px] w-fit items-center justify-center rounded-[80px] px-[12px] text-base font-semibold`}
        style={{ backgroundColor: color.bgColor, color: color.textColor }}
      >
        {data.genre}
      </div>
      <p className={`text-lg font-semibold`} style={{ color: color.titleColor }}>
        {data.title}
      </p>
    </div>
  );
};

export default RankingHeadCategory;
