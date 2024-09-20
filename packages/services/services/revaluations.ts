import {
  QueryOptions,
  UseBaseQueryOptions,
  UseQueryOptions,
  UseQueryResult,
  queryOptions,
  useMutation,
  usePrefetchQuery,
  useQuery,
} from '@tanstack/react-query';

import http from '../../../apps/web/app/api/auth/[...nextauth]/http';
import { GetListType, removeUndefined } from './common';

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

interface SearchType {
  page?: number;
  limit?: number;
  movieId?: string;
  startDate?: string;
  endDate?: string;
}

export const getMyRevaluations = async ({ limit, movieId, startDate, endDate }: SearchType) =>
  await http.get<GetListType<RevaluationResponseDto>>('/my/revaluations', { limit, movieId, startDate, endDate });

export const useGetMyRevaluations = (
  { movieId, startDate, endDate }: SearchType,
  options?: Omit<UseQueryOptions<GetListType<RevaluationResponseDto> | any>, 'queryKey' | 'queryFn'>
) => {
  const limit = 10;
  const queryParams = removeUndefined({ limit, movieId, startDate, endDate }) as SearchType;

  return useQuery({
    queryKey: ['myRevaluations', queryParams],
    queryFn: () => getMyRevaluations(queryParams),
    staleTime: 1000 * 60 * 5,
    ...options,
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
