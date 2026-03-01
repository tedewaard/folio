import { createFileRoute } from '@tanstack/react-router'
import BlogLayout from '../../components/BlogLayout'
import Callout from '../../components/mdx/Callout'
import CodeBlock from '../../components/mdx/CodeBlock'

export const Route = createFileRoute('/blog/ingress-nginx')({
  component: nginxPost,
})

function nginxPost() {
  return (
    <BlogLayout
      title="Migration from Ingress-Nginx to Traefik"
      date="2026-01-29"
      tags={['meta', 'kubernetes', 'ingress', 'traefik']}
      readingTime="3 min read"
    >
      <h1>
      </h1>

    </BlogLayout>
  )
}
