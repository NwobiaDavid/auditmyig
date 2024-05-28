'use client'

import { SessionProvider} from 'next-auth/react'
import {NextUIProvider} from "@nextui-org/react";

export default function Provider ({ children, session }) {
  return (
    <SessionProvider session={session}>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </SessionProvider>
  )
}