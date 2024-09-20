import { useMutation, useQuery } from '@tanstack/react-query';

import http from '../../../apps/web/app/api/auth/[...nextauth]/http';

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
  statistics: {
    id: string;
    numRevaluations: number;
  };
}

export const getMyProfile = async () => await http.get<MyProfileResponseDto>('/my/profile');

export const useGetMyProfile = () =>
  useQuery({
    queryKey: ['myProfile'],
    queryFn: () => getMyProfile(),
    staleTime: Infinity,
    gcTime: Infinity,
  });

export const useDeleteMy = () => {
  return useMutation({ mutationFn: () => http.delete('/my/users') });
};
