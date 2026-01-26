import { createFileRoute } from '@tanstack/react-router'
import TimelineCard from '../components/TimelineCard.tsx'

export const Route = createFileRoute('/')({
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
      title: "Next Internship",
      date: "April 2016",
      description: "BI was interesting but I realized I was lacking an understanding of the fundamentals of IT. Decided to take a new internship at Padnos Recycling Solutions working on the IT Help Desk. Gained hands-on experience with troubleshooting, user support, network infrastructure, and learned the importance of customer service in IT.",
      position: 'left' as const
    },
    {
      title: "Full Time IT Career",
      date: "May 2017",
      description: "Started working on the IT Service Desk at Service Express. Provided technical support for enterprise customers, managed ticketing systems, and developed strong problem-solving skills in a fast-paced environment.",
      position: 'right' as const
    },
    {
      title: "Promoted to Systems Administrator",
      date: "September 2020",
      description: "Advanced to Systems Administrator role, taking on more infrastructure responsibilities. Managed server infrastructure, implemented automation solutions, worked with virtualization technologies, and gained experience with cloud platforms.",
      position: 'left' as const
    },
    {
      title: "IT Analyst at MillerKnoll",
      date: "December 2023",
      description: "Joined MillerKnoll as an IT Analyst to broaden my experience. Worked on enterprise IT projects, collaborated with cross-functional teams, and gained exposure to large-scale corporate IT operations.",
      position: 'right' as const
    },
    {
      title: "Back at Service Express",
      date: "December 2024",
      description: "Started as an Infrastructure Automation Engineer at Service Express. Focusing on infrastructure as code, CI/CD pipelines, automation frameworks, and modern DevOps practices to streamline operations.",
      position: 'left' as const
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero/About Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 mb-8">
            Infrastructure Automation Engineer passionate about DevOps, automation, and building efficient systems.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in infrastructure as code, CI/CD pipelines, and cloud technologies. 
            With a background spanning from Business Intelligence to Systems Administration, 
            I bring a comprehensive understanding of IT infrastructure and automation.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Technical Projects
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Side projects and experiments I've been working on
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Project Name
              </h3>
              <p className="text-gray-600 mb-4">
                Brief description of what this project does and the technologies used.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Another Project
              </h3>
              <p className="text-gray-600 mb-4">
                Description of another cool project you've built.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Docker</span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Third Project
              </h3>
              <p className="text-gray-600 mb-4">
                Yet another interesting project showcasing your skills.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Terraform</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            My Journey
          </h2>
          <p className="text-gray-600 text-center">
            Career milestones and experiences that shaped my path
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full" />
          
          {/* Timeline items */}
          <div className="relative">
            <div className="h-20" />
            {timelineData.map((item, index) => (
              <TimelineCard
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                position={item.position}
              />
            ))}
            <div className="h-20" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Let's connect
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
