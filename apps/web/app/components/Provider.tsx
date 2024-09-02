'use client';

import React, { ReactElement, useState } from 'react';

import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import theme from '../../theme';

interface Props {
  children: ReactElement;
}

function Providers({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());
  const REFRESH_DAYS = 3600 * 24 * 20; // 20 days

  return (
    // <MSWComponent>
    <SessionProvider refetchInterval={REFRESH_DAYS}>
      <QueryClientProvider client={queryClient}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <InitColorSchemeScript attribute="class" />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
    // </MSWComponent>
  );
}

export default Providers;
