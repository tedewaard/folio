# Blog Feature Documentation

## Overview

Your portfolio site now includes a fully-featured MDX-powered blog with syntax highlighting, custom components, and SEO optimization.

## File Structure

```
src/
├── routes/
│   └── blog/
│       ├── index.tsx           # Blog listing page
│       └── welcome.tsx         # Sample blog post
├── components/
│   ├── BlogCard.tsx            # Card component for blog listing
│   ├── BlogLayout.tsx          # Layout wrapper for blog posts
│   └── mdx/
│       ├── CodeBlock.tsx       # Code blocks with copy button
│       ├── Callout.tsx         # Info/Warning/Tip callout boxes
│       └── Image.tsx           # Optimized image component
└── utils/
    └── blog.ts                 # Blog utility functions
```

## Creating a New Blog Post

### Option 1: Using TSX (Like the sample)

1. Create a new file in `src/routes/blog/` with the post slug as filename: `my-post-slug.tsx`

2. Use this template:

```tsx
import { createFileRoute } from '@tanstack/react-router'
import BlogLayout from '../../components/BlogLayout'
import Callout from '../../components/mdx/Callout'
import CodeBlock from '../../components/mdx/CodeBlock'

export const Route = createFileRoute('/blog/my-post-slug')({
  component: MyPostSlug,
})

function MyPostSlug() {
  return (
    <BlogLayout
      title="Your Post Title"
      date="2026-01-27"
      tags={['kubernetes', 'devops']}
      readingTime="5 min read"
    >
      <p>Your content here...</p>
      
      <h2>Section Heading</h2>
      
      <Callout type="info" title="Note">
        Important information
      </Callout>
      
      <CodeBlock language="terraform" title="main.tf">
{`resource "aws_instance" "example" {
  ami = "ami-123456"
}`}
      </CodeBlock>
    </BlogLayout>
  )
}
```

3. Add the post metadata to `src/routes/blog/index.tsx` in the `blogPosts` array:

```tsx
{
  slug: 'my-post-slug',
  title: 'Your Post Title',
  date: '2026-01-27',
  excerpt: 'Brief description of your post...',
  tags: ['kubernetes', 'devops'],
  readingTime: '5 min read',
}
```

4. Update `public/sitemap.xml` to include your new post:

```xml
<url>
  <loc>https://trevoredewaard.com/blog/my-post-slug</loc>
  <lastmod>2026-01-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Available Components

### Callout

Info boxes with different types:

```tsx
<Callout type="info" title="Note">
  Your message here
</Callout>

<Callout type="warning" title="Warning">
  Warning message
</Callout>

<Callout type="tip" title="Pro Tip">
  Helpful tip
</Callout>

<Callout type="danger">
  Danger message (no title)
</Callout>
```

### CodeBlock

Code blocks with syntax highlighting and copy button:

```tsx
<CodeBlock language="terraform" title="main.tf">
{`your code here`}
</CodeBlock>
```

Supported languages: terraform, javascript, typescript, bash, python, go, rust, yaml, json, and more (powered by highlight.js)

### Image

Optimized images with optional captions:

```tsx
<Image 
  src="/path/to/image.jpg" 
  alt="Description"
  caption="Optional caption text"
/>
```

## Markdown Features

All standard markdown is supported:

- **Bold**, *italic*, `inline code`
- Lists (ordered and unordered)
- Links: `[text](url)`
- Blockquotes: `> quote`
- Tables
- Headings (h1-h6)

## Tag Colors

Pre-configured tag colors are available in both `BlogCard.tsx` and `BlogLayout.tsx`:

- `kubernetes` - Blue
- `terraform` - Purple
- `devops` - Green
- `ansible` - Red
- `aws` - Yellow
- `docker` - Indigo
- Default - Gray

To add more tag colors, edit the `tagColors` object in both files.

## SEO

Each blog post should be added to the sitemap at `public/sitemap.xml` for optimal SEO.

The blog listing page (`/blog`) has a higher priority (0.9) and weekly changefreq to encourage frequent indexing.

## Styling

Blog posts use Tailwind's typography plugin with custom prose styling defined in `BlogLayout.tsx`. The styling includes:

- Proper heading hierarchy
- Code block styling with GitHub Dark theme
- Responsive images
- Table styling
- Link hover effects
- Blockquote styling

## Future Enhancements

Potential features to add:

1. **Tag filtering** - Filter blog posts by tag on the listing page
2. **Search** - Add search functionality to find posts
3. **RSS feed** - Generate an RSS feed for subscribers
4. **Related posts** - Show related posts at the end of each article
5. **Reading progress bar** - Show reading progress indicator
6. **Dark mode toggle** - Allow users to switch between light/dark themes
7. **Comments** - Add a commenting system (Giscus, Utterances, etc.)

## Development

To start the dev server:

```bash
npm run dev
```

Visit:
- Blog listing: http://localhost:3000/blog
- Sample post: http://localhost:3000/blog/welcome

## Production Build

```bash
npm run build
npm run preview
```
