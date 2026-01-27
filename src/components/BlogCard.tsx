import { Link } from '@tanstack/react-router'
import { Calendar, Clock } from 'lucide-react'

interface BlogCardProps {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
}

const tagColors: Record<string, string> = {
  kubernetes: 'bg-blue-100 text-blue-700',
  terraform: 'bg-purple-100 text-purple-700',
  devops: 'bg-green-100 text-green-700',
  ansible: 'bg-red-100 text-red-700',
  aws: 'bg-yellow-100 text-yellow-700',
  docker: 'bg-indigo-100 text-indigo-700',
  default: 'bg-gray-100 text-gray-700',
}

export default function BlogCard({ slug, title, date, excerpt, tags, readingTime }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${slug}` as any}
      className="block bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
        {title}
      </h3>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{readingTime}</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              tagColors[tag.toLowerCase()] || tagColors.default
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
