import MovieItem from 'MovieItem.tsx';

import { Ranking1, Ranking2, Ranking3 } from '@repo/icon';
import { MovieDataType, MovieResponseDto } from '@repo/services';

import '../index.css';

type Props = {
  data?: MovieDataType;
  rankingNumber: number;
};

const RankingMovie = ({ data, rankingNumber }: Props) => {
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
  if (!data) return <></>;
  return <MovieItem children={<RankingNumberIcon />} data={data} />;
};

export default RankingMovie;
