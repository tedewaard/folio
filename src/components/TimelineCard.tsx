import { useEffect, useRef, useState } from 'react'

interface TimelineCardProps {
  title: string
  date: string
  description: string
  details?: string
  position: 'left' | 'right'
}

export default function TimelineCard({ title, date, description, details, position }: TimelineCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={cardRef} className="relative flex items-center justify-center min-h-[10rem] mb-8">
      {/* Card on left */}
      {position === 'left' && (
        <div 
          className={`w-80 p-6 bg-white rounded-lg shadow-xl transition-all duration-700 mr-8 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="text-sm text-gray-500 mb-2">{date}</div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700 mb-3">{description}</p>
          {details && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">{details}</p>
            </div>
          )}
        </div>
      )}
      
      {/* Spacer for right-side cards */}
      {position === 'right' && <div className="w-80 mr-8" />}
      
      {/* Timeline bubble */}
      <div 
        className={`w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg transition-all duration-500 flex-shrink-0 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
        style={{ zIndex: 10 }}
      />
      
      {/* Spacer for left-side cards */}
      {position === 'left' && <div className="w-80 ml-8" />}
      
      {/* Card on right */}
      {position === 'right' && (
        <div 
          className={`w-80 p-6 bg-white rounded-lg shadow-xl transition-all duration-700 ml-8 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-12'
          }`}
        >
          <div className="text-sm text-gray-500 mb-2">{date}</div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700 mb-3">{description}</p>
          {details && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">{details}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
