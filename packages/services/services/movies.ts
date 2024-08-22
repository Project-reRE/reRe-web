import http from '@repo/http';
import { usePrefetchQuery, useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetListType } from './common';

export interface MovieResponseDto {
  id: string;
  data: {
    title: string;
    genre: string;
    repRlsDate: string;
    directors: {
      directorNm: string;
      directorEnNm: string;
      directorId: string;
    }[];
    actors: {
      actorNm: string;
      actorEnNm: string;
      actorId: string;
    }[];
    posters: ['Unknown Type: http://file.koreafilm.or.kr/thm/02/99/18/37/tn_DPK021861.jpg'];
    stlls: ['Unknown Type: http://file.koreafilm.or.kr/thm/01/copy/00/66/74/tn_DST840308.jpg'];
  };
}

export interface OpenMovieSetResponseDto {
  title: string;
  template: string;
  displayOrder: number;
  condition: string;
  data: MovieResponseDto[];
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
