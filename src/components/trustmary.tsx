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
       <Button asChild className="text-xl font-bold px-2 py-2 h-auto">
          <a
            href="https://www.google.com/search?q=Skeninge+VVS+AB+Recensioner&ludocid=13133763447459541731&client=ms-android-motorola-rvo3&cs=1&hs=0JfU&hl=sv&sa=X&ved=0CCIQ9fQKKABqFwoTCKi38IW40ZIDFQAAAAAdAAAAABAF&biw=411&bih=770&dpr=1.75#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-sky-800 hover:scale-105 hover:bg-sky-900 transition-transform duration-200"
          >
            Lämna en recension!
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  )
}