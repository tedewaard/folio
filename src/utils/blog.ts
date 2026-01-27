import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  excerpt: string
  readingTime: string
}

// This will be populated by importing all MDX files
const blogPosts: BlogPost[] = []

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function calculateReadingTime(content: string): string {
  const stats = readingTime(content)
  return stats.text
}

export function addBlogPost(post: BlogPost) {
  blogPosts.push(post)
}
