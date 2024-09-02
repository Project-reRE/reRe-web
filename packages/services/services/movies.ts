import { UseQueryResult, usePrefetchQuery, useQuery } from '@tanstack/react-query';

import http from '@repo/http';

import { GetListType } from './common';
import { EmotionStatisticsType, MovieSpecialPointStatisticsType } from './revaluations';

export type DirectorType = {
  directorNm: string;
  directorEnNm: string;
  directorId: string;
};

export type ActorType = {
  actorNm: string;
  actorEnNm: string;
  actorId: string;
};

export interface MovieDataType {
  title: string;
  genre: string;
  repRlsDate: string;
  directors: DirectorType[];
  actors: ActorType[];
  posters: string[];
  stills: string[];
}

export interface MovieStatisticsType {
  id: string;
  numRecentStars: {
    targetDate: string;
    numStars: number;
  }[];
  numStars: number;
  numStarsParticipants: number;
  numSpecialPoint: MovieSpecialPointStatisticsType;
  numPastValuation: EmotionStatisticsType;
  numPresentValuation: EmotionStatisticsType;
  numGender: {
    MALE: number;
    FEMALE: number;
  };
  numAge: {
    TEENS: number;
    TWENTIES: number;
    THIRTIES: number;
    FORTIES: number;
    FIFTIES_PLUS: number;
  };
  targetDate: string;
  // movie: null;
}

export interface MovieResponseDto {
  id: string;
  data: MovieDataType;
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
    data: MovieDataType;
  }[];
}

export const useGetOpenMovieSets = () =>
  useQuery({
    queryKey: ['open-movie-sets'],
    queryFn: () => http.get<GetListType<OpenMovieSetResponseDto>>(`/open-movie-sets`),
    staleTime: 1000 * 60 * 5,
  });

export const useGetMovies = ({ title }: { title: string }): UseQueryResult<GetListType<MovieResponseDto>> => {
  return useQuery({
    queryKey: ['movies', title],
    queryFn: () => http.get<GetListType<MovieResponseDto>>('/movies', { title, limit: 25 }),
    staleTime: 1000 * 60 * 5,
    enabled: !!title,
  });
};

export const getFindOneMovie = async (movieId: string) => await http.get<MovieResponseDto>(`/movies/${movieId}`);

export const useGetFindOneMovie = (movieId: string) =>
  usePrefetchQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getFindOneMovie(movieId),
    staleTime: 1000 * 60 * 5,
  });
