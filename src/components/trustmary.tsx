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
              <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-sky-700 mb-4">Recensioner Från Våra Kunder</h2>
      
       <Button asChild className="text-xl  font-bold px-2 py-2 h-auto">
          <a
            href="https://www.google.com/search?client=ms-android-motorola-rvo3&hs=6JfU&sca_esv=fa25cb492db56b5e&hl=sv&biw=411&bih=770&sxsrf=ANbL-n633dqWCvAr7jmYU0oUkKuQCL2ugw:1770813269823&q=skeninge+vvs+ab+recensioner&uds=ALYpb_ncDc7jTlmw6Mmq7NjuX5c-YbAJTFiy94v5--J3o-7Hd5-Qwj--aWZrMPuT7aS_Peb-dU5LWutdOSQ6agLqR7ZfhqF9B2bxj-nrqZ2pFgJFUKj9S0dzyggbJFgWE7_xIO1tOYFJ1PF0k9NtZ7fQVDXgbDSBRFmlDaSMkr64QqlmUquFoxEo0xRU3cfilaHfkQbU1Bm6&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWZy_TFBDV5x0007YCcClzOzECOcAsdisysy4oWU6TaV3-6Xd1S5Os21OueUy8Ag1psYfuvgSe0wEbeAsFI_ALCBKtTeQnRh-mZLPuykhpGGWt51ypA%3D%3D&sa=X&ved=2ahUKEwjI_aS_udGSAxVpS1UIHaMnImsQxKsJKAJ6BAgQEAE&ictx=1&stq=1&cs=1&lei=VXeMaYj_MemW1fIPo8-I2QY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-800 hover:scale-105 hover:bg-red-900 transition-transform duration-200"
          >
            Lämna en recension!
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </Button>
     
    </div>
      <div className="container mx-auto  px-4">
        <div ref={containerRef}>
          {!isLoaded && <p className="text-center">Laddar recensioner...</p>}
        </div>
      </div>


    </section>
  )
}