import { useQuery } from '@tanstack/react-query';

import http from '@repo/http';

export interface MyProfileResponseDto {
  id: string;
  externalId: string;
  nickName: string;
  description?: string;
  profileUrl?: string;
  email: string;
  provider: string;
  role: string;
  gender: boolean;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export const getMyProfile = async () => await http.get<MyProfileResponseDto>('/my/profile');

export const useGetMyProfile = () =>
  useQuery({
    queryKey: ['myProfile'],
    queryFn: () => getMyProfile(),
    staleTime: Infinity,
    gcTime: Infinity,
  });
