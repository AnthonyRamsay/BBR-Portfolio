'use client'

import { useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function Background() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <video
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source src="/your-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 left-6 text-white/80 hover:text-white transition-colors z-10 flex items-center space-x-2"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
        <span className="text-sm">{isMuted ? 'unmute' : 'mute'}</span>
      </button>
    </div>
  )
}

