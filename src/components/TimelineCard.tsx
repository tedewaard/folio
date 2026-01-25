import { useEffect, useRef, useState } from 'react'

interface TimelineCardProps {
  title: string
  date: string
  description: string
  position: 'left' | 'right'
}

export default function TimelineCard({ title, date, description, position }: TimelineCardProps) {
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
    <div ref={cardRef} className="relative flex items-center justify-center mb-12">
      {/* Timeline bubble */}
      <div 
        className={`absolute w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
        style={{ zIndex: 10 }}
      />
      
      {/* Card */}
      <div 
        className={`absolute w-80 p-6 bg-white rounded-lg shadow-xl transition-all duration-700 ${
          position === 'left' ? 'right-1/2 mr-8' : 'left-1/2 ml-8'
        } ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${position === 'left' ? 'translate-x-12' : '-translate-x-12'}`
        }`}
      >
        <div className="text-sm text-gray-500 mb-2">{date}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}
