import { UseQueryResult, useMutation, usePrefetchQuery, useQuery } from '@tanstack/react-query';

import http from '../../../apps/web/app/api/auth/[...nextauth]/http';
import { GetListType } from './common';

export enum MOVIE_SPECIAL_POINT_TYPE {
  '기획 의도' = 'PLANNING_INTENT',
  '감독의 연출' = 'DIRECTORS_DIRECTION',
  '출연진 연기력' = 'ACTING_SKILLS',
  '시나리오' = 'SCENARIO',
  'OST' = 'OST',
  '음향적사회적 요소' = 'SOCIAL_ISSUES',
  '시각적 요소' = 'VISUAL_ELEMENT',
  '음향적 이슈' = 'SOUND_ELEMENT',
}

export enum EMOTION_TYPE {
  '긍정적' = 'POSITIVE',
  '부정적' = 'NEGATIVE',
  '잘 모름' = 'NOT_SURE',
}

export type MovieSpecialPointStatisticsType = {
  [K in MOVIE_SPECIAL_POINT_TYPE]: number;
};

export type EmotionStatisticsType = {
  [K in EMOTION_TYPE]: number;
};

export interface RevaluationResponseDto {
  id: string;
  numStars: string;
  specialPoint: null;
  pastValuation: null;
  presentValuation: null;
  comment: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  movie: Movie;
  user: User;
  statistics: Statistics;
  revaluationLikes: any[];
  isLiked: boolean;
}

interface Statistics {
  id: string;
  numCommentLikes: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

interface User {
  id: string;
  externalId: string;
  nickName: string;
  description: string;
  profileUrl: string;
  email: string;
  provider: string;
  role: string;
  gender: boolean;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}

interface Movie {
  id: string;
  data: Data;
  createdAt: string;
}

interface Data {
  genre: string;
  title: string;
  actors: Actor[];
  rating: string;
  stills: null[];
  posters: null[];
  prodYear: string;
  directors: Director[];
  repRatDate: string;
  repRlsDate: string;
}

interface Director {
  directorId: string;
  directorNm: string;
  directorEnNm: string;
}

interface Actor {
  actorId: string;
  actorNm: string;
  actorEnNm: string;
}

export const getRevaluations = async ({ movieId }: { movieId: string }) =>
  await http.get<GetListType<RevaluationResponseDto>>('/revaluations', { limit: 25, movieId });

export const useGetRevaluations = ({ movieId }: { movieId: string }) => {
  return useQuery({
    queryKey: ['revaluations', movieId],
    queryFn: () => http.get<GetListType<RevaluationResponseDto>>('/revaluations', { limit: 25, movieId }),
    staleTime: 1000 * 60 * 5,
    enabled: !!movieId,
  });
};

export const getMyRevaluations = async ({ limit }: { limit: number }) =>
  await http.get<GetListType<RevaluationResponseDto>>('/my/revaluations', { limit });

export const useGetMyRevaluations = () => {
  const limit = 10;
  return useQuery({
    queryKey: ['myRevaluations', limit],
    queryFn: () => getMyRevaluations({ limit }),
    staleTime: 1000 * 60 * 5,
  });
};

export interface RevaluationRequestDto {
  movieId: string;
  numStars: number;
  specialPoint: MovieSpecialPointStatisticsType;
  pastValuation: EmotionStatisticsType;
  presentValuation: EmotionStatisticsType;
  comment: string;
}

export const usePostRevaluation = () => {
  return useMutation({ mutationFn: (data: RevaluationRequestDto) => http.post('/revaluations', data) });
};
