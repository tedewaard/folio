import { Link } from '@tanstack/react-router'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Footer from './Footer'

interface BlogLayoutProps {
  title: string
  date: string
  tags: string[]
  readingTime: string
  children: React.ReactNode
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

export default function BlogLayout({ title, date, tags, readingTime, children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Blog</span>
          </Link>

          <header className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readingTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tagColors[tag.toLowerCase()] || tagColors.default
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-ul:list-disc prose-ol:list-decimal
            prose-li:text-gray-700
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4
            prose-img:rounded-lg prose-img:shadow-lg
            prose-hr:border-gray-300
            prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:p-2
            prose-td:border prose-td:border-gray-300 prose-td:p-2
          ">
            {children}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
