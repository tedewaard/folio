import { createFileRoute } from '@tanstack/react-router'
import BlogCard from '../../components/BlogCard'
import Footer from '../../components/Footer'

// Import blog posts metadata
const blogPosts = [
  {
    slug: 'terraform-esxi',
    title: 'VMware, Cloud-Init & Terraform',
    date: '2026-01-27',
    excerpt: 'Deploying linux VMs in VMware using cloud-init, terraform and ansible.',
    tags: ['vmware', 'cloud-init', 'terraform', 'iaac', 'esxi'],
    readingTime: '3 min read',
  },
]

export const Route = createFileRoute('/blog/')({
  component: BlogIndex,
})

function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Thoughts on infrastructure, DevOps, and automation
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                tags={post.tags}
                readingTime={post.readingTime}
              />
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
