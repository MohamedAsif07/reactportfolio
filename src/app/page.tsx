import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CybersecuritySection from '../components/CybersecuritySection';
import ContactSection from '../components/ContactSection';
import MatrixRain from '../components/MatrixRain';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../public/styles.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohamed Asif app dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Native Android App Developer Portfolio - Mohamed Asif" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="hero relative flex items-center justify-center min-h-screen bg-gradient-to-br from-secondary to-primary/10 overflow-hidden">
        <div className="hero-background absolute inset-0 z-0">
          <div className="bg-grid absolute inset-0" />
          <div className="bg-lines absolute inset-0" />
          <div className="bg-particles absolute inset-0" />
          <div className="bg-cyber-sphere absolute inset-0" />
          <MatrixRain />
          <div className="hologram-overlay absolute inset-0" />
        </div>
        <div className="hero-content relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          <div className="profile-section flex flex-col items-center justify-center">
            <div className="profile-circle rounded-full border-4 border-primary p-2 shadow-lg">
              <div className="profile-image w-40 h-40 overflow-hidden rounded-full">
                <Image src="/mypf.jpg" alt="Profile Picture" width={160} height={160} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
          <div className="hero-text flex flex-col justify-center">
            <div className="text-container">
              <h1 className="animated-text text-5xl md:text-6xl font-bold mb-4">
                <span className="text-line glitch-text block">Creative</span>
                <span className="text-line glitch-text block">Developer</span>
              </h1>
              <p className="subtitle text-xl mb-2">Native Android App Developer</p>
              <div className="hero-description mb-4">
                <p>Transforming ideas into secure, high-performance mobile applications with a focus on user experience and cybersecurity.</p>
              </div>
              <div className="hero-nav flex flex-wrap gap-4 mb-4">
                <a href="#about" className="cta-btn primary flex items-center gap-2">
                  <i className="fas fa-user" /> About Me
                </a>
                <a href="#projects" className="cta-btn primary flex items-center gap-2">
                  <i className="fas fa-code" /> View Projects
                </a>
                <a href="#contact" className="cta-btn primary flex items-center gap-2">
                  <i className="fas fa-envelope" /> Contact Me
                </a>
                <a href="/resume.pdf" className="cta-btn primary resume-btn flex items-center gap-2" download>
                  <i className="fas fa-download" /> Download Resume
                </a>
              </div>
              <div className="tech-stack-preview flex gap-4 md:gap-6 mt-4 bg-black/30 rounded-xl p-4 shadow-lg overflow-x-auto scrollbar-thin scrollbar-thumb-primary/60 scrollbar-track-transparent">
                {[
                  { icon: 'fab fa-android', label: 'Android' },
                  { icon: 'fab fa-java', label: 'Java' },
                  { icon: 'fas fa-shield-alt', label: 'Security' },
                  { icon: 'fas fa-paint-brush', label: 'UI/UX' },
                ].map((tech) => (
                  <div
                    key={tech.label}
                    className="tech-icon flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-primary relative"
                  >
                    <div className="icon-wrapper text-4xl md:text-5xl mb-1 drop-shadow-lg group-hover:text-primary transition-colors duration-300">
                      <i className={tech.icon} />
                    </div>
                    <span className="text-xs md:text-sm font-semibold mt-1 text-white group-hover:text-primary transition-colors duration-300">
                      {tech.label}
                    </span>
                    <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap z-20">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className="mouse w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center mb-2">
            <div className="wheel w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
         
        </div>
      </section>
      <AboutSection />
      <ProjectsSection />
      <CybersecuritySection />
      <ContactSection />
      <Footer />
    </>
  );
}
