import { createFileRoute } from '@tanstack/react-router'
import BlogLayout from '../../components/BlogLayout'
import Callout from '../../components/mdx/Callout'
import CodeBlock from '../../components/mdx/CodeBlock'

export const Route = createFileRoute('/blog/welcome')({
  component: WelcomePost,
})

function WelcomePost() {
  return (
    <BlogLayout
      title="Welcome to My Blog"
      date="2026-01-27"
      tags={['meta', 'welcome']}
      readingTime="3 min read"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h2>What You'll Find Here</h2>
      
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <Callout type="info" title="Just a heads up">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is an informational callout to demonstrate the feature.
      </Callout>

      <h2>Topics I'll Cover</h2>

      <ul>
        <li><strong>Infrastructure as Code:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li><strong>Kubernetes:</strong> Sed do eiusmod tempor incididunt ut labore et dolore</li>
        <li><strong>CI/CD Pipelines:</strong> Ut enim ad minim veniam, quis nostrud exercitation</li>
        <li><strong>Cloud Platforms:</strong> Duis aute irure dolor in reprehenderit in voluptate</li>
      </ul>

      <h2>Code Examples</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here's an example of what code blocks will look like:
      </p>

      <CodeBlock language="terraform" title="main.tf">
{`resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleInstance"
  }
}`}
      </CodeBlock>

      <Callout type="tip" title="Pro Tip">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Callout>

      <h2>Looking Forward</h2>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>

      <blockquote>
        <p>
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
          eos qui ratione voluptatem sequi nesciunt."
        </p>
      </blockquote>

      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>

      <h3>Final Thoughts</h3>

      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>

      <Callout type="warning">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </Callout>
    </BlogLayout>
  )
}
