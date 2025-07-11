const skills = [
  { name: 'Android Studio', progress: 95 },
  { name: 'Kotlin', progress: 90 },
  { name: 'Kali Linux', progress: 92 },
  { name: 'Penetration Testing', progress: 88 },
  { name: 'Network Security', progress: 85 },
  { name: 'UI/UX Design', progress: 90 },
];

export default function AboutSection() {
  return (
    <section id="about" className="about relative py-20 flex flex-col items-center justify-center">
      <div className="glass-card max-w-3xl mx-auto p-8 rounded-xl shadow-lg relative z-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="bio mb-8">I&apos;m a passionate native Android developer and cybersecurity enthusiast, dedicated to creating secure, high-performance mobile applications. My expertise spans from crafting intuitive user interfaces to implementing robust security measures, ensuring both functionality and protection in every project.</p>
        <div className="skills-container grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div className="skill" key={skill.name}>
              <span className="skill-name font-semibold">{skill.name}</span>
              <div className="skill-bar bg-gray-700 rounded-full h-3 mt-2">
                <div className="skill-progress bg-primary h-3 rounded-full" style={{ width: `${skill.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="floating-icons absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-3xl opacity-60 z-0">
        <i className="fab fa-android" />
        <i className="fas fa-shield-alt" />
        <i className="fas fa-bug" />
        <i className="fas fa-network-wired" />
        <i className="fas fa-lock" />
        <i className="fas fa-code" />
      </div>
      <div className="cyber-particles absolute inset-0 z-0" />
    </section>
  );
} 