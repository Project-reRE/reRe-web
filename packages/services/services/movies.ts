import { UseQueryResult, usePrefetchQuery, useQuery } from '@tanstack/react-query';

import http from '../../../apps/web/app/api/auth/[...nextauth]/http';
import { GetListType } from './common';
import { EmotionStatisticsType, MovieSpecialPointStatisticsType } from './revaluations';

export type Director = {
  directorId: string;
  directorNm: string;
  directorEnNm: string;
};

export type Actor = {
  actorId: string;
  actorNm: string;
  actorEnNm: string;
};

export interface MovieData {
  title: string;
  genre: string;
  repRlsDate: string;
  directors: Director[];
  actors: Actor[];
  posters: string[];
  stills: string[];
  prodYear: string;
}

export interface NumRecentStarType {
  currentDate: string;
  numStars: number;
}

export type AgeType = {
  TEENS: number;
  TWENTIES: number;
  THIRTIES: number;
  FORTIES: number;
  FIFTIES_PLUS: number;
};

export type GenderType = {
  TEENS: number;
  TWENTIES: number;
  THIRTIES: number;
  FORTIES: number;
  FIFTIES_PLUS: number;
};

export interface MovieStatisticsType {
  id: string;
  numRecentStars: NumRecentStarType[];
  numStars: number;
  numStarsParticipants: number;
  numSpecialPoint: MovieSpecialPointStatisticsType;
  numPastValuation: EmotionStatisticsType;
  numPresentValuation: EmotionStatisticsType;
  numGender: GenderType;
  numAge: AgeType;
  currentDate: string;
  numSpecialPointTopThree: NumRank[];
  numPastValuationPercent: NumRank[];
  numPresentValuationPercent: NumRank[];
  numGenderPercent: NumRank[];
  numAgePercent: NumRank[];
}

export interface NumRank {
  rank: number;
  type: string;
  value: number;
}

export interface MovieResponseDto {
  id: string;
  data: MovieData;
  statistics: MovieStatisticsType[];
}

export interface OpenMovieSetResponseDto {
  genre: string;
  title: string;
  template: string;
  displayOrder: number;
  condition: string;
  data: {
    id: string;
    data: MovieData;
  }[];
}

export const getOpenMovieSets = async () => await http.get<GetListType<OpenMovieSetResponseDto>>(`/open-movie-sets`);

export const useGetOpenMovieSets = () =>
  useQuery({
    queryKey: ['open-movie-sets'],
    queryFn: getOpenMovieSets,
    staleTime: 1000 * 60 * 5,
  });

export const getMovies = async ({ title }: { title: string }) =>
  await http.get<GetListType<MovieResponseDto>>(`/movies`, { title, limit: 25 });

export const useGetMovies = ({ title }: { title: string }): UseQueryResult<GetListType<MovieResponseDto>> => {
  return useQuery({
    queryKey: ['movies', title],
    queryFn: () => getMovies({ title }),
    staleTime: 1000 * 60 * 5,
    enabled: !!title,
  });
};

export const getFindOneMovie = async (movieId: string) => await http.get<MovieResponseDto>(`/movies/${movieId}`);

export const useGetFindOneMovie = (movieId: string) =>
  useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getFindOneMovie(movieId),
    staleTime: 1000 * 60 * 5,
  });
