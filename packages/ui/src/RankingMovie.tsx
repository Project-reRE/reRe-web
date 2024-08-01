import MovieItem from 'MovieItem.tsx';
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
  return <MovieItem children={<RankingNumberIcon />} />;
};

export default RankingMovie;
