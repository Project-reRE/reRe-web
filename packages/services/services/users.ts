import http from '@repo/http';
import { useQuery } from '@tanstack/react-query';

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

export const useGetMyProfile = () =>
  useQuery({
    queryKey: ['myProfile'],
    queryFn: () => http.get<MyProfileResponseDto>('/my/profile'),
    staleTime: Infinity,
    gcTime: Infinity,
  });
