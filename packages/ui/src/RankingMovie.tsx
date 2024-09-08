import { Ranking1, Ranking2, Ranking3 } from '@repo/icon';
import { MovieData } from '@repo/services';

import '../index.css';
import MovieItem from './MovieItem';

type Props = {
  data?: MovieData;
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
