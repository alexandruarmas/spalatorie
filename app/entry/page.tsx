"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EntryPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/intro')
  }, [router])
  
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
    </div>
  )
} 