import React from 'react';
import { Menu, Github, Linkedin, Mail, Download } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const projects = [
    {
      title: "Real-Time Multi-Cloud Lab Automation",
      description: "Developed a real-time lab platform allowing users to log in using credentials and dynamically create and manage labs on their preferred cloud platforms, including AWS, Azure, GCP, Oracle Cloud, and IBM Cloud. Designed and implemented an automation workflow using Terraform, Python and Guacamole to provision and configure cloud resources. Integrated PostgreSQL to store and manage instance metadata, enabling Python to retrieve instance IDs dynamically for lab creation. Ensured secure, scalable, and efficient multi-cloud operations while maintaining robust user and resource management.",
      technologies: ["Terraform", "Python", "PostgreSQL", "Guacamole", "JSON-authentication", "AWS", "Azure", "GCP", "Node.js"]
    },
    {
      title: "Realtime Serverless Web Application Development using AWS",
      description: "Built a serverless web application using AWS Amplify for hosting and deployment. Developed RESTful APIs with AWS API Gateway and AWS Lambda for backend logic. Utilized DynamoDB for scalable data storage and enforced security with AWS IAM Policies for fine-grained access control. This solution enabled automatic scaling, reduced infrastructure management, and optimized costs.",
      technologies: ["AWS Amplify", "API Gateway", "Lambda", "DynamoDB", "IAM"]
    },
    {
      title: "Automated CI/CD Pipeline for Node.js application",
      description: "Developed and deployed an automated Jenkins pipeline for a Node.js application, incorporating Git for version control, Maven for build automation, OWASP Dependency Check for vulnerability scanning, and SonarQube for code quality analysis. Leveraged Docker for containerization and streamlined deployment to Docker Hub, ensuring secure and efficient delivery Automated CI/CD pipelines, reducing deployment time by 30%.",
      technologies: ["Jenkins", "Node.js", "Git", "Maven", "SonarQube", "OWASP Dependency Check", "Docker"]
    },
    {
      title: "Network Infrastructure Design and Implementation",
      description: "Configured routers, switches, and VLANs for optimized traffic management. Applied advanced routing protocols (OSPF, EIGRP) and implemented network security measures such as ACLs and port security. Conducted troubleshooting and performance optimization to ensure reliable connectivity across the network.",
      technologies: ["Cisco Routers and Switches", "VLANs", "OSPF", "EIGRP", "ACLs", "Cisco Packet Tracer"]
    },
    {
      title: "Kubernetes-Based Deployment for Scalable Web Application",
      description: "Deployed a scalable web application using Kubernetes with Docker containers. Configured Deployments, Services, and HPA for auto-scaling and high availability. Used Helm for managing Kubernetes packages and integrated Prometheus for monitoring and alerts. Deployed on a managed Kubernetes cluster (GKE/EKS).",
      technologies: ["Kubernetes", "Docker", "Helm", "Prometheus", "GKE/EKS", "Horizontal Pod Autoscaler (HPA)"]
    }
  ];

  const skills = [
    'AWS', 'Azure', 'GCP', 'VMware', 'Hyper-V',
    'Docker', 'Kubernetes', 'Jenkins', 'Terraform',
    'Python', 'Node.js', 'React', 'JavaScript',
    'PostgreSQL', 'DynamoDB', 'MongoDB',
    'Linux', 'Networking', 'Security',
    'CI/CD', 'Git', 'Ansible', 'Shell Scripting'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gray-800">Gokul<span className="text-blue-600">.</span></a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden bg-white border-t ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-1">
            <a href="#home" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">About</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">Projects</a>
            <a href="#experience" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">Experience</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">Skills</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm Gokul<span className="text-blue-600">.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A Virtualization and Cloud Engineer passionate about building scalable infrastructure and automation solutions
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf"
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="your-profile-photo.jpg" 
                alt="Profile"
                className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mx-auto border-4 border-blue-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
              I am a Virtualization and Cloud Engineer with expertise in designing, deploying, and managing virtualization solutions using VMware and Hyper-V, as well as cloud infrastructures on AWS and Azure platforms. My focus is on implementing containerized applications and ensuring optimal system performance and security.
            </p>
            <p>
              With a strong background in infrastructure automation and DevOps practices, I specialize in creating scalable solutions that enhance operational efficiency. I'm passionate about leveraging modern technologies to solve complex infrastructure challenges and improve system reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Virtualization and Cloud Engineer</h3>
                  <p className="text-gray-600">CorpAcademy Itechnovations</p>
                </div>
                <p className="text-gray-500">2023 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Designed, deployed, and managed virtualization solutions using VMware and Hyper-V</li>
                <li>Built and maintained cloud infrastructures on AWS and Azure platforms</li>
                <li>Implemented containerized applications using Docker and Kubernetes</li>
                <li>Provided technical support and optimized system performance</li>
                <li>Ensured security compliance and contributed to documentation</li>
                <li>Enhanced IT systems scalability and operational efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="bg-white p-4 rounded-lg text-center hover:bg-gray-50 transition-colors shadow-sm"
              >
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center gap-8 mb-12">
              <a href="https://github.com/gokulnathv" className="text-gray-600 hover:text-gray-900">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com/in/gokulnathv--" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:gokulnathv2002@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Gokul. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;