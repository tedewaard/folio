import { createFileRoute } from '@tanstack/react-router'
import TimelineCard from '../components/TimelineCard.tsx'
import ProjectCard from '../components/ProjectCard.tsx'
import Footer from '../components/Footer.tsx'
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
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/headshot.jpg" 
              alt="Trevor Edewaard" 
              className="w-32 h-32 rounded-full object-cover object-top mb-6 shadow-lg"
            />
            <h1 className="text-4xl font-mono font-bold text-gray-900 mb-2">
              Trevor Edewaard
            </h1>
            <p className="text-lg text-gray-600 font-mono">
              Infrastructure Automation Engineer
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm an infrastructure engineer focused on building resilient, automated systems at scale. 
              Currently architecting Kubernetes platforms, implementing GitOps workflows, and automating 
              infrastructure with Terraform and Ansible.
            </p>
            <p>
              My work includes designing on-premises Kubernetes infrastructure that reduced disaster recovery 
              time by over 90%, managing 12,000+ global endpoints, and establishing Infrastructure as Code 
              practices across VM provisioning, network automation, and cloud resources.
            </p>
            <p>
              I've led major migrations—moving 1,000+ endpoints to Microsoft Intune, consolidating 50 cloud 
              apps to Entra SSO, and retiring legacy systems that had been in place for 20 years. I also spoke 
              at Tanium Converge 2023 and build tooling in Rust, Go, and PowerShell to solve real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Work Projects Section */}
      <section id="work-projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Work Projects & Accomplishments
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Professional achievements and contributions
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="On-prem Kubernetes (RKE2)"
              description="Re-architected our 5 year old on-prem Kubernetes clusters, enabling simplified disaster recovery, continuous
updates and automated cluster deployment reducing our RTO by over 90%."
              technologies={[
                { name: 'Kubernetes (RKE2)', color: 'purple' },
                { name: 'Terraform', color: 'indigo' },
                { name: 'Ansible', color: 'blue' },
              ]}
            />

            <ProjectCard 
              title="Infrastructure as Code"
              description="Established Infrastructure as Code (IaC) practices using Terraform, Ansible, and GitLab CI/CD for VM
provisioning, Kubernetes configuration, Route53, and F5 management."
              technologies={[
                { name: 'Terraform', color: 'indigo' },
                { name: 'Ansible', color: 'blue' },
                { name: 'GitLab CI/CD', color: 'green' },
              ]}
            />

            <ProjectCard 
              title="VM and Endpoint Life Cycle Management"
              description="Managed comprehensive lifecycle operations for VM infrastructure and 1,000+ workstations, including
vulnerability remediation and third-party application management, which removed thousands of known
exploitable vulnerabilities from the environment."
              technologies={[
                { name: 'Datto', color: 'indigo' },
                { name: 'VMware', color: 'red' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="side-projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Side Projects
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Personal projects and experiments
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Dwanium"
              description="Service to import Dell PC warranty end dates into Tanium Asset"
              technologies={[
                { name: 'Rust', color: 'blue' },
                { name: 'Docker', color: 'green' },
                { name: 'Postgres', color: 'purple' }
              ]}
              link="https://github.com/tedewaard/dwanium"
            />

            <ProjectCard 
              title="Lenovium"
              description="Service to import Lenovo PC warranty end dates into Tanium Asset"
              technologies={[
                { name: 'Typescript', color: 'yellow' }
              ]}
              link="https://github.com/tedewaard/lenovium"
            />

            <ProjectCard 
              title="Edewaard Equipment"
              description="Website for Edewaard Equipment - Hudsonville, MI"
              technologies={[
                { name: 'Typescript', color: 'yellow' },
                { name: 'HTML/CSS', color: 'indigo' }
              ]}
              link="https://github.com/tedewaard/EER"
              websiteLink='https://edewaardequipment.com'
            />
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

      <Footer />
    </div>
  )
}
