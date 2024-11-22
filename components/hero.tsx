import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function Hero() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">I'm a web developer passionate about creating beautiful and functional websites.</p>
        <Button asChild>
          <Link href="#projects">View My Work</Link>
        </Button>
      </div>
    </section>
  )
}

