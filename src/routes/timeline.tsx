import { createFileRoute } from '@tanstack/react-router'
//import logo from '../logo.svg'
import TimelineCard from '../components/TimelineCard.tsx'

export const Route = createFileRoute('/timeline')({
  component: App,
})

function App() {
  const timelineData = [
    {
      title: "BI Intern - Haworth",
      date: "April 2015",
      description: "Started my IT career as a Business Intelligence intern at Haworth (Office furniture manufacturer). Worked with SQL databases, created reports and dashboards, and learned the basics of data analysis and visualization.",
      position: 'right' as const
    },
    {
      title: "Helpdesk - Padnos Recycling",
      date: "April 2016",
      description: "BI was interesting but I realized I was lacking an understanding of the fundamentals of IT. Decided to take a new internship at Padnos Recycling Solutions working on the IT Help Desk. Gained hands-on experience with troubleshooting, user support, network infrastructure, and learned the importance of customer service in IT.",
      position: 'left' as const
    },
    {
      title: "IT Service Desk - Service Express",
      date: "May 2017",
      description: "Started working on the IT Service Desk at Service Express. Provided technical support for enterprise customers, managed ticketing systems, and developed strong problem-solving skills in a fast-paced environment.",
      position: 'right' as const
    },
    {
      title: "Systems Administrator - Service Express",
      date: "September 2020",
      description: "Advanced to Systems Administrator role, taking on more infrastructure responsibilities. Managed server infrastructure, implemented automation solutions, worked with virtualization technologies, and gained experience with cloud platforms.",
      position: 'left' as const
    },
    {
      title: "IT Analyst - MillerKnoll",
      date: "December 2023",
      description: "Joined MillerKnoll as an IT Analyst to broaden my experience. Worked on enterprise IT projects, collaborated with cross-functional teams, and gained exposure to large-scale corporate IT operations.",
      position: 'right' as const
    },
    {
      title: "Infrastructure Automation Engineer - Service Express",
      date: "December 2024",
      description: "Started as an Infrastructure Automation Engineer at Service Express. Focusing on infrastructure as code, CI/CD pipelines, automation frameworks, and modern DevOps practices to streamline operations.",
      position: 'left' as const
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
