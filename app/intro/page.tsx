"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function IntroPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showSkip, setShowSkip] = useState(false)

  useEffect(() => {
    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true)
    }, 2000)

    // Handle video loading
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsLoading(false)
      }
      
      // Redirect automatically when video ends
      videoRef.current.onended = () => {
        setIsVideoEnded(true)
        redirectToHome()
      }
    }

    return () => {
      clearTimeout(skipTimer)
    }
  }, [])

  // Add another effect to watch for isVideoEnded
  useEffect(() => {
    if (isVideoEnded) {
      redirectToHome()
    }
  }, [isVideoEnded])

  const redirectToHome = () => {
    // Wait a brief moment before redirecting
    setTimeout(() => {
      // Redirect to the /home path which contains our home content
      router.push("/home")
    }, 500)
  }

  const handleSkip = () => {
    setIsVideoEnded(true)
    if (videoRef.current) {
      videoRef.current.pause()
    }
    redirectToHome()
  }

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      )}
      
      <video 
        ref={videoRef}
        src="/assets/icons/intro.mp4" 
        autoPlay 
        playsInline
        muted
        className={`w-full h-full object-fill transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center justify-center backdrop-blur-sm bg-black/30 p-8 rounded-xl">
          <div className="animate-explode">
            <Image 
              src="/assets/icons/icon.ico" 
              width={240} 
              height={240} 
              alt="Sparkle Car Wash Logo" 
              className="mb-4"
            />
          </div>
          
          <Badge variant="outline" className="text-white border-white/40 px-4 py-1 mb-4 text-sm">
            Bine ați venit la
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            Sparkle <span className="text-primary">Car Wash</span>
          </h1>
          
          {showSkip && (
            <Button 
              onClick={handleSkip} 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30 text-white"
            >
              Intră în site
            </Button>
          )}
        </div>
      </div>
        
      {isVideoEnded && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center flex-col z-20">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  )
} 