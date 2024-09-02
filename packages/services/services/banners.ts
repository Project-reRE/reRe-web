import http from '@repo/http';
import { useQuery } from '@tanstack/react-query';
import { GetListType } from './common';

export interface OpenBannerResponseDto {
  title: string;
  body: string;
  template: string;
  route: string;
  boxHexCode: string;
  displayOrder: number;
  imageUrl: string;
  display: boolean;
}

export const useGetOpenBanner = () => {
  return useQuery({
    queryKey: ['open-banners'],
    queryFn: () => http.get<GetListType<OpenBannerResponseDto>>('/open-banners'),
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default {
  useGetOpenBanner,
};
