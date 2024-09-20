'use client';

import React from 'react';
import { useEffect, useState } from 'react';

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      const initMsw = await import('./index').then((res) => res.initMsw);
      await initMsw();
      setMswReady(true);
    };

    if (process.env.NODE_ENV === 'development' && !mswReady) {
      init();
    }
  }, [mswReady]);

  return <>{children}</>;
};
