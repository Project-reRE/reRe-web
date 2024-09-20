import { useQuery } from '@tanstack/react-query';

import http from '../../../apps/web/app/api/auth/[...nextauth]/http';
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

export const getOpenBanner = async () => await http.get<GetListType<OpenBannerResponseDto>>('/open-banners');

export const useGetOpenBanner = () => {
  return useQuery({
    queryKey: ['open-banners'],
    queryFn: getOpenBanner,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default {
  useGetOpenBanner,
};
