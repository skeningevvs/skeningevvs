'use client'

import { useEffect, useRef, useState } from 'react'

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
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div ref={containerRef}>
          {!isLoaded && <p className="text-center">Laddar recensioner...</p>}
        </div>
      </div>
    </section>
  )
}