const projects = [
  {
    title: 'Ride-Booking App',
    image: '/ride.webp',
    link: '/ride-booking.html',
    description: 'A comprehensive ride-booking application with real-time tracking and secure payments.',
    features: ['Kotlin', 'Firebase', 'Google Maps'],
    overlay: null,
    backLink: '/ride-booking.html',
  },
  {
    title: 'Mission Planner',
    image: '/mission.webp',
    link: '/mission-planner.html',
    description: 'SOS Navigation System with real-time coordinate transmission to Mission Planner software.',
    features: ['SOS Coordinates', 'Real-time Tracking', 'Flight Path Prediction'],
    overlay: ['MAVLink', 'DroneKit', 'UDP'],
    backLink: '/mission-planner.html',
  },
  {
    title: 'GenAI Financial Assistant',
    image: '/stock.webp',
    link: '/genai.html',
    description: 'AI-driven investment platform with real-time market insights and personalized suggestions.',
    features: ['AI Analysis', 'Market Insights', 'Smart Chatbot'],
    overlay: ['GenAI', 'Kotlin', 'Stock API'],
    backLink: '/genai.html',
  },
  {
    title: 'Smart Ambulance System',
    image: '/amb.webp',
    link: '/ambulance.html',
    description: 'Emergency response system with AI-powered route optimization and hospital bed availability.',
    features: ['Live GPS', 'AI Routes', 'Emergency SOS'],
    overlay: ['Ktor', 'AI', 'Maps API'],
    backLink: '/ambulance.html',
  },
  {
    title: 'MediConnect',
    image: '/medi.webp',
    link: '/mediconnect.html',
    description: 'Healthcare platform connecting patients with doctors and pharmacies.',
    features: ['Patient Matching', 'Digital Prescriptions', 'Pharmacy Integration'],
    overlay: ['PostgreSQL', 'Firebase', 'Kotlin'],
    backLink: '/mediconnect.html',
  },
  {
    title: 'Web Scraping Tool',
    image: '/webserap.webp',
    link: '/web-scraping.html',
    description: 'Anonymous data extraction tool using TOR network with IP rotation.',
    features: ['TOR Integration', 'IP Rotation', 'Ethical Scraping'],
    overlay: ['Python', 'TOR', 'Selenium'],
    backLink: '/web-scraping.html',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects py-20 bg-secondary/80">
      <div className="section-title text-center mb-12">
        <h2 className="text-3xl font-bold">Current Projects</h2>
        <div className="title-decoration mx-auto mt-2 mb-4 w-24 h-1 bg-primary rounded-full" />
      </div>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div className="project-card bg-card-bg rounded-xl shadow-lg overflow-hidden" key={project.title}>
            <div className="card-inner relative group">
              <div className="card-front">
                <div className="project-image relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="project-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/60">
                    {project.overlay ? (
                      <div className="tech-stack flex gap-2">
                        {project.overlay.map((tech) => (
                          <span className="bg-primary text-bg px-2 py-1 rounded text-xs font-semibold" key={tech}>{tech}</span>
                        ))}
                      </div>
                    ) : (
                      <a href={project.link} className="view-project bg-primary text-bg px-4 py-2 rounded font-semibold">View Project</a>
                    )}
                  </div>
                </div>
              </div>
              <div className="card-back absolute inset-0 bg-secondary/90 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition z-10">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="project-features flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span className="bg-primary text-bg px-2 py-1 rounded text-xs font-semibold" key={feature}>{feature}</span>
                  ))}
                </div>
                <a href={project.backLink} className="project-link text-primary underline">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 