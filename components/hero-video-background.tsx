"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface HeroVideoBackgroundProps {
  videoSrc: string
  imageSrc: string
  imageAlt: string
  overlay?: boolean
  overlayColor?: string
}

export function HeroVideoBackground({ 
  videoSrc, 
  imageSrc, 
  imageAlt,
  overlay = true,
  overlayColor = "bg-gradient-to-b from-black/30 via-black/60 to-primary"
}: HeroVideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    
    if (!video) return
    
    const handleLoadedData = () => {
      setIsVideoLoaded(true)
    }
    
    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData)
    
    // Check if video is already loaded
    if (video.readyState >= 3) {
      setIsVideoLoaded(true)
    }
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Fallback image - always visible until video is loaded */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        priority
      />
      
      {/* Video - fades in when loaded */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        poster={imageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient overlay */}
      {overlay && <div className={`absolute inset-0 ${overlayColor} z-[1]`} />}
    </div>
  )
} 