'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Twitter, Instagram, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

// This is a placeholder. In a real application, you'd fetch this data from an API or CMS
const images = [
  '/placeholder.svg?height=1080&width=1080',
  '/placeholder.svg?height=1080&width=1920',
  '/placeholder.svg?height=1350&width=1080',
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') nextImage()
      if (event.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Anthony Ramsay</h1>
        <nav className="flex items-center space-x-6">
          <Link href="/work" className="text-black hover:text-gray-600 transition-colors">
            Work
          </Link>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="mailto:anthony@example.com" className="text-black hover:text-gray-600 transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </nav>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="relative max-w-4xl max-h-[calc(100vh-200px)] w-full h-full">
          <Image
            src={images[currentImageIndex]}
            alt={`Work ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="contain"
          />
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 transition-colors p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Previous image</span>
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 transition-colors p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Next image</span>
          </button>
        </div>
      </main>
      
      <footer className="p-6 text-center">
        <p className="text-sm text-gray-400 font-light">&copy; 2024 Studio by Ramsay</p>
      </footer>
    </div>
  )
}

