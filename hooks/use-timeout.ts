"use client"

import { useEffect, useState } from "react"

export function useTimeout() {
  const [state, setState] = useState(false)
  useEffect(() => {
    const loading = setTimeout(() => {
      setState(true)
    }, 1000)
    return () => clearTimeout(loading)
  }, [])

  return { state }
}
