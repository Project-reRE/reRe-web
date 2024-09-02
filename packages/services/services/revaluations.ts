import { UseQueryResult, usePrefetchQuery, useQuery } from '@tanstack/react-query';

import http from '@repo/http';

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
}

export const useGetRevaluations = ({
  movieId,
  userId,
}: {
  movieId: string;
  userId?: string;
}): UseQueryResult<GetListType<RevaluationResponseDto>> => {
  return useQuery({
    queryKey: ['revaluations', movieId, userId],
    queryFn: () => http.get<GetListType<RevaluationResponseDto>>('/revaluations', { limit: 25, movieId, userId }),
    staleTime: 1000 * 60 * 5,
    enabled: !!movieId,
  });
};

export const useGetMyRevaluations = ({
  movieId,
}: {
  movieId: string;
}): UseQueryResult<GetListType<RevaluationResponseDto>> => {
  return useQuery({
    queryKey: ['myRevaluations', movieId],
    queryFn: () => http.get<GetListType<RevaluationResponseDto>>('/my/revaluations', { movieId, limit: 25 }),
    staleTime: 1000 * 60 * 5,
    enabled: !!movieId,
  });
};
