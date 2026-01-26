import { createFileRoute } from '@tanstack/react-router'
import TimelineCard from '../components/TimelineCard.tsx'
import timelineData from '../data/timeline.json'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero/About Section */}
      <section id="about" className="flex items-center justify-center bg-white px-4 pt-40">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-mono font-bold text-gray-900 mb-2">
              Trevor Edewaard
            </h1>
            <p className="text-lg text-gray-600 font-mono">
              Infrastructure Automation Engineer
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I build and automate infrastructure. Currently working with Terraform, CI/CD pipelines, 
              and cloud platforms to make systems more reliable and deployments faster.
            </p>
            <p>
              Started in BI, moved through help desk and sysadmin roles, now focused on infrastructure as code 
              and DevOps tooling. I like solving problems with automation instead of manual processes.
            </p>
          </div>
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
                position={item.position as 'left' | 'right'}
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
