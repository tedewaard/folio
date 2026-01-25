import { createFileRoute } from '@tanstack/react-router'
//import logo from '../logo.svg'
import TimelineCard from '../components/TimelineCard.tsx'

export const Route = createFileRoute('/timeline')({
  component: App,
})

function App() {
  const timelineData = [
    {
      title: "Started My Journey",
      date: "January 2024",
      description: "Began working on exciting new projects and learning new technologies.",
      position: 'right' as const
    },
    {
      title: "Major Milestone",
      date: "March 2024",
      description: "Completed a significant project that pushed my skills to the next level.",
      position: 'left' as const
    },
    {
      title: "New Adventure",
      date: "June 2024",
      description: "Started exploring new frameworks and methodologies in web development.",
      position: 'right' as const
    },
    {
      title: "Achievement Unlocked",
      date: "September 2024",
      description: "Reached a personal goal and gained valuable experience along the way.",
      position: 'left' as const
    },
    {
      title: "Current Focus",
      date: "December 2024",
      description: "Working on innovative solutions and building amazing user experiences.",
      position: 'right' as const
    }
  ]

  return (
    <>
      <div className="h-20" />
      <div className="min-h-screen bg-gray-50 py-12">
        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full" />
          
          {/* Timeline items */}
          <div className="relative">
            <div className="h-20" /> {/* Top spacing */}
            {timelineData.map((item, index) => (
              <TimelineCard
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                position={item.position}
              />
            ))}
            <div className="h-20" /> {/* Bottom spacing */}
          </div>
        </div>
      </div>
    </>
  )
}
