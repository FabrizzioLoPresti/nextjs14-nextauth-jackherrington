'use client'

import { useState, useEffect } from "react"

type Props = {}

export default function ApiForClientPage({}: Props) {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch('/api/whoami')
      const { name } = await response.json()
      setName(name)
    }

    fetchName()
  }, [])

  return (
    <div className="mx-auto max-w-7xl">
      {name && <p className="text-2xl">Hello, {name}!</p>}
    </div>
  )
}