import { cache } from 'react';

import { QueryClient } from '@tanstack/react-query';

const getQueryClient = cache(() => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5분 동안 캐시된 데이터를 유지
        gcTime: 1000 * 60 * 10, // 10분 후 캐시된 데이터를 삭제
      },
    },
  });
});

export default getQueryClient;
