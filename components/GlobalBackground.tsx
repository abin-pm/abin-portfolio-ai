'use client';

import dynamic from 'next/dynamic';

const GlobalBackgroundInner = dynamic(() => import('./GlobalBackgroundInner'), {
  ssr: false,
  loading: () => null,
});

export function GlobalBackground() {
  return <GlobalBackgroundInner />;
}
