"use client"

import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function ClientDiagnosticWrapper({ children }: Props) {
  return <>{children}</>
}
