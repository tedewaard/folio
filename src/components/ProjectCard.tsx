import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: Array<{
    name: string
    color: 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
  }>
  link?: string
  websiteLink?: string
}

const colorClasses = {
  blue: 'bg-blue-100 text-blue-700',
  green: 'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
  yellow: 'bg-yellow-100 text-yellow-700',
  red: 'bg-red-100 text-red-700',
  indigo: 'bg-indigo-100 text-indigo-700',
}

export default function ProjectCard({ title, description, technologies, link, websiteLink }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <div className="space-y-2 mb-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors break-all"
          >
            <Github size={16} className="flex-shrink-0" />
            <span>{link}</span>
          </a>
        )}
        
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors break-all"
          >
            <ExternalLink size={16} className="flex-shrink-0" />
            <span>{websiteLink}</span>
          </a>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className={`px-3 py-1 ${colorClasses[tech.color]} rounded-full text-sm`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  )
}
