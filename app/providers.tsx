'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </SessionProvider>
  )
} 