import { createFileRoute } from '@tanstack/react-router'
import BlogLayout from '../../components/BlogLayout'
import Callout from '../../components/mdx/Callout'
import CodeBlock from '../../components/mdx/CodeBlock'

export const Route = createFileRoute('/blog/terraform-esxi')({
  component: TerraformEsxi,
})

function TerraformEsxi() {
  return (
    <BlogLayout
      title="VMware, Cloud-Init & Terraform"
      date="2026-01-27"
      tags={['vmware', 'cloud-init', 'terraform', 'iaac', 'esxi']}
      readingTime="5 min read"
    >
      <p>Most of my career has been spent at a company that hosts their infrastructure on prem. Like most
        companies, that means VMware ESXi for our hypervisor. I've always been interested in automation and really
        wanted a reason to use Terraform, despite not being a cloud shop. So, I set out to automate our VM provisioning
        in order to save time, make the process consistent and reliable, and add the benefits of version control.</p>

      <h2>The Old Process</h2>

      <Callout type="info" title="Linux VMs">This article will focus on our linux VMs, which happen
        to be Ubuntu server. But I also got it working for Windows Server as well.</Callout>

      <p>The old process consisted of creating a new base VM from an ISO. Then, installing any
        base applications and configurations that can live in the template image. These would be apps
        that don't care about or bind themselves to any unique identifiers.</p>
      <p>Examples include:</p>
      <ul>
        <li>Crowdstrike EDR</li>
        <li>DUO for MFA during server authentication</li>
        <li>Configs - Firewall, SNMP, Users, SSH keys</li>
      </ul>
      <p>Then, we would add a bash script that does additional configuration after cloning the template
        and logging into the server. This script involved user interaction like specifying the hostname, 
        network config, joining the domain, and installing software that does need to attach to unique identifiers (like 
        enrolling the VM in our RMM).</p>

      <h3>Concerns with this setup</h3>
      <p>
        There are a few key issues with how we were doing things. First, too much configuration in the 
        template itself. I mean, not the biggest deal and I could probably take a look at using packer 
        to build our templates. But I'd rather keep the template as lean as possible and handle the customization 
        with cloud-init and ansible. Second, the bash script used for additional configuration is just not it. 
        Any changes to the script would need to be updated in the template, but more importantly, the script requires
        user interaction and manually entering information, which was just begging for errors.
      </p>

      <h2>Spinning Up VMs With Terraform</h2>

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
