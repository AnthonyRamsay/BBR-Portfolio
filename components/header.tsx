import Link from 'next/link'
import { Mail, Twitter, Instagram } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white hover:opacity-75 transition-opacity">
            YourName
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
              Blog
            </Link>
            <Link href="/work" className="text-white/80 hover:text-white transition-colors text-sm">
              Work
            </Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
              About
            </Link>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:you@example.com" className="text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

