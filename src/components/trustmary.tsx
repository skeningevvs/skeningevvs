'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function TrustmaryWidget() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const script = document.createElement('script')
    script.src = 'https://widget.trustmary.com/HPJWuf6jW'
    script.async = true
    
    script.onload = () => setIsLoaded(true)
    script.onerror = () => console.error('Failed to load Trustmary widget')
    
    if (container) {
      container.appendChild(script)
    }
    
    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div ref={containerRef}>
          {!isLoaded && <p className="text-center">Laddar recensioner...</p>}
        </div>
      </div>

      <div className="flex justify-center">
       <Button asChild>
          <a
            href="https://www.google.com/search?sa=X&sca_esv=8ed7b9c9fed93e72&sxsrf=ANbL-n6PfwE85w1HXk0SQOFdtdEfW0ENuA:1770806998886&q=Skeninge+VVS+AB+Recensioner&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY0NjY3MzYxMTcxtTQ1MTQ3NtzAyPiKUTo4OzUvMy89VSEsLFjB0UkhKDU5Na84Mz8vtWgRKz5ZAPQsD1tXAAAA&rldimm=13133763447459541731&tbm=lcl&hl=sv-SE&ved=2ahUKEwiKr4mRotGSAxXYHRAIHUxzIpMQ9fQKegQITBAG&biw=2560&bih=1271&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-bold bg-red-800 hover:scale-105 hover:bg-red-900 transition-transform duration-200 px-6 py-3 rounded text-white"
          >
            Lämna en recension!
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  )
}