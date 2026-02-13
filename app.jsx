import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github, 
  Database, 
  Code, 
  BarChart, 
  Map, 
  FileText 
} from 'lucide-react';

const SYSTEM_DATA = {
  name: "Juan S. Gutierrez",
  title: "Data Strategist",
  id: "JSG-001",
  status: "ONLINE",
  tagline: "Converting data into actionable intelligence.",
  contact: {
    email: "jgjuandi@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-gutierrez-068954328/",
    // GitHub removed from active comms array
  },
  skills: [
    { name: "Python & R", type: "Scripting", icon: <Code size={14} /> },
    { name: "SQL & Data Vault", type: "Database", icon: <Database size={14} /> },
    { name: "Tableau & PowerBI", type: "Visualization", icon: <BarChart size={14} /> },
    { name: "React & HTML5", type: "Frontend", icon: <Activity size={14} /> },
    { name: "GIS & Urban Planning", type: "Spatial Analysis", icon: <Map size={14} /> },
  ],
  experience: [
    {
      role: "Data Vault & ERP Intern",
      org: "FSU ITS",
      date: "Nov 2025 - Present",
      desc: "Supporting the migration of HR and Financial records. Documenting business lifecycles and ensuring Data Vault governance.",
      skills: ["Data Vault 2.0", "ERP Systems", "SQL", "Compliance Documentation"]
    },
    {
      role: "Data Analytics Intern",
      org: "DeVoe L. Moore Center",
      date: "Aug 2025 - Present",
      desc: "Redeveloped FloridaOpenGov. Gathered and cleaned raw data from state agencies to create high-fidelity visualizations.",
      skills: ["Tableau", "Data Cleaning", "Python", "Public Data APIs"]
    },
    {
      role: "Public Policy Intern",
      org: "DeVoe L. Moore Center",
      date: "Aug 2025 - Present",
      desc: "Wrote and peer-reviewed market-focused articles. Conducted market-focused qualitative research on urban planning, education, and AI.",
      skills: ["Qualitative Research", "Policy Analysis", "Technical Writing", "Urban Economics"]
    },
    {
      role: "Administrative Assistant",
      org: "DBS Baby Boomers Adult Day Health & Enrichment Center",
      date: "April 2024 - Sep 2025",
      desc: "Gained experience in data management, MS Office, and insurance billing. Supported the transition to a new management team and the launch of a new daycare and clinic.",
      skills: ["Data Management", "MS Office Suite", "Insurance Billing", "Operations"]
    }
  ],
  projects: [
    {
      id: 5,
      title: "AI Hallucinations",
      role: "Researcher",
      year: "Spring 2026",
      stack: ["LLM Testing", "Academic Analysis", "Urban Economics"],
      desc: "Investigated 'Fabricated Citations' in AI models within Urban Economics. Graded literary accuracy for the undergraduate symposium.",
      link: null,
      status: "In Progress"
    },
    {
      id: 2,
      title: "Terry Saves the World",
      role: "Game Developer",
      year: "Spring 2026",
      stack: ["HTML5", "JavaScript", "Narrative Design"],
      desc: "A comedic, narrative-driven puzzle reimagining Minesweeper. Developed the logic and lore for Terry, an office worker battling an intergalactic threat.",
      link: "https://juansegutierrez.github.io/Terry-Saves-the-World/",
      status: "Completed"
    },
    {
      id: 6,
      title: "Orbital Command Portfolio",
      role: "Lead Developer",
      year: "2026",
      stack: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
      desc: "A high-performance, sci-fi themed personal portfolio designed to showcase data strategy and urban analysis capabilities using a responsive HUD interface.",
      link: "#", 
      status: "Live"
    },
    {
      id: 1,
      title: "FloridaOpenGov",
      role: "Lead Developer",
      year: "Fall 2025 & Spring 2026",
      stack: ["Data Viz", "Public Policy", "Data Cleaning"],
      desc: "A complete redevelopment of a portal dedicated to making Florida's government data accessible. We cleaned chaotic datasets to forge intelligible maps and charts.",
      link: "https://floridaopengov.com", 
      status: "Completed"
    },
    {
      id: 4,
      title: "Factory to Greenspace",
      role: "Urban Planner",
      year: "Fall 2025",
      stack: ["Urban Policy", "Smart Growth", "Design", "Sustainability"],
      desc: "A proposal to convert an abandoned cement factory into a communal greenspace, utilizing smart growth principles to revitalize Tallahassee.",
      link: null,
      status: "Completed"
    },
    {
      id: 3,
      title: "The Voter Turnout Theory",
      role: "Researcher",
      year: "Spring & Summer 2025",
      stack: ["Rational Choice Model", "Statistics", "Survey Design"],
      desc: "Executed a survey experiment under Dr. Kai Ou. Expanded the Rational Choice Model to examine how oppositional public opinion impacts behavior.",
      link: null,
      status: "Completed"
    }
  ]
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E0E0E0] font-sans selection:bg-[#00F0FF] selection:text-black scroll-smooth">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0B0E14]/95 border-[#00F0FF]/30 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="text-[#00F0FF]" />
            <span className="font-orbitron text-white text-xl font-bold tracking-wider">Juanse<span className="text-[#00F0FF]">Gutierrez</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Command", "Experience", "Projects", "Comms"].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[#E0E0E0] hover:text-[#00F0FF] font-rajdhani text-sm font-bold uppercase tracking-widest transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="command" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20 z-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
            <div className="w-full h-full animate-[scanline_4s_linear_infinite]" style={{
                background: 'linear-gradient(to bottom, transparent, rgba(0, 240, 255, 0.05), transparent)'
            }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] text-xs font-mono tracking-tighter">
                SYSTEM STATUS: {SYSTEM_DATA.status}
              </span>
              <span className="h-[1px] w-12 bg-[#00F0FF]/50"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-2 tracking-tighter uppercase leading-tight">
              Juan S.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#0055FF]">Gutierrez</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-rajdhani text-[#E0E0E0] mb-6 uppercase tracking-widest border-l-4 border-[#00F0FF] pl-4">
              {SYSTEM_DATA.title}
            </h2>
            <p className="text-[#E0E0E0]/70 max-w-lg text-lg mb-8 font-rajdhani leading-relaxed italic">
              // {SYSTEM_DATA.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="px-8 py-3 bg-[#00F0FF]/10 text-[#00F0FF] font-orbitron font-bold border border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                INITIATE PROTOCOLS
              </a>
              <a 
                href={SYSTEM_DATA.contact.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3 bg-transparent text-[#E0E0E0] font-orbitron font-bold border border-[#E0E0E0]/30 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                LINKEDIN
              </a>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute inset-0 border border-[#00F0FF]/20 rounded-full animate-spin-slow"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#00F0FF]/50 shadow-[0_0_40px_rgba(0,240,255,0.3)]">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQFBrxhNazYfEg/profile-displayphoto-crop_800_800/B4EZwb1YszKoAI-/0/1769993505887?e=1772668800&v=beta&t=4qYDzbmVTmJvKFY7J7mN3b19Smh7Ed2timW7DgiKzvw" 
                className="w-full h-full object-cover" 
                alt="Profile" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative bg-[#0B0E14]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-widest">System Log</h2>
            <p className="text-[#00F0FF] font-rajdhani uppercase tracking-widest">Professional Experience</p>
          </div>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8 border-l border-[#00F0FF]/20 pl-6">
              {SYSTEM_DATA.experience.map((job, i) => (
                <div 
                    key={i} 
                    className="bg-[#0F141E] p-6 border border-[#00F0FF]/10 hover:border-[#00F0FF]/50 transition-all"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
                >
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                    <h4 className="text-lg font-bold font-orbitron">{job.role}</h4>
                    <span className="text-[#00F0FF] font-mono text-xs bg-[#00F0FF]/5 px-2 py-1 rounded">{job.date}</span>
                  </div>
                  <p className="text-[#00F0FF]/70 font-rajdhani uppercase text-sm mb-4 font-semibold">{job.org}</p>
                  <p className="text-sm leading-relaxed text-[#E0E0E0]/80 mb-4">{job.desc}</p>
                  
                  {/* Experience Skills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#00F0FF]/10">
                    {job.skills.map(skill => (
                      <span key={skill} className="text-[10px] px-2 py-1 bg-[#00F0FF]/5 text-[#00F0FF]/70 font-mono border border-[#00F0FF]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-4 space-y-8">
              <div 
                className="bg-[#0F141E] p-6 border border-[#00F0FF]/10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
              >
                <h4 className="font-orbitron font-bold mb-4 text-[#00F0FF] flex items-center gap-2 uppercase tracking-tighter">
                    <FileText size={18} /> EDUCATION
                </h4>
                <p className="font-bold text-white">Florida State University</p>
                <p className="text-sm text-[#E0E0E0]/60">B.S. Political Science</p>
                <div className="mt-4 pt-4 border-t border-[#00F0FF]/10">
                    <p className="text-xs text-[#00F0FF] font-mono">GPA: 3.8</p>
                    <p className="text-xs text-[#E0E0E0]/40 font-mono mt-1">Minors: IT, Urban Planning</p>
                </div>
              </div>
              <div className="space-y-3">
                {SYSTEM_DATA.skills.map((skill, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-[#0F141E] border-l-2 border-[#00F0FF]/30 text-sm hover:bg-[#00F0FF]/5 transition-colors group">
                    <span className="font-bold flex items-center gap-2">
                        <span className="text-[#00F0FF] opacity-40 group-hover:opacity-100 transition-opacity">{skill.icon}</span>
                        {skill.name}
                    </span>
                    <span className="text-[10px] opacity-40 font-mono uppercase">{skill.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-[#00F0FF]/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-widest mb-12 flex items-center gap-3">
             Project Database
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SYSTEM_DATA.projects.map(proj => (
              <div key={proj.id} className="bg-[#0F141E] border border-[#00F0FF]/20 flex flex-col group overflow-hidden hover:border-[#00F0FF]/60 transition-all hover:-translate-y-1">
                <div className="bg-[#00F0FF]/10 p-3 border-b border-[#00F0FF]/20 flex justify-between items-center font-mono text-[10px]">
                  <span className="text-[#00F0FF]/60">ID_{proj.id.toString().padStart(3, '0')}</span>
                  <span className={proj.status === 'Completed' || proj.status === 'Live' ? 'text-[#00F0FF] font-bold' : 'text-yellow-400 font-bold'}>
                    {proj.status.toUpperCase()}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-orbitron font-bold text-white mb-2 uppercase text-lg group-hover:text-[#00F0FF] transition-colors">{proj.title}</h3>
                  <div className="text-[10px] font-mono text-[#E0E0E0]/40 mb-3">{proj.year}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.stack.map(s => (
                      <span key={s} className="px-1.5 py-0.5 bg-[#0B0E14] text-[10px] font-mono border border-[#00F0FF]/20 text-[#00F0FF]/80">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm opacity-70 mb-6 leading-relaxed flex-grow">{proj.desc}</p>
                  {proj.link && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#00F0FF] font-bold text-xs font-orbitron uppercase tracking-widest flex items-center gap-1 group/link"
                    >
                      INITIALIZE 
                      <ExternalLink size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="comms" className="py-24 bg-[#080a0f] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-widest mb-4">Comms Array</h2>
          <p className="font-rajdhani text-[#00F0FF] mb-12 uppercase tracking-widest">Transmission Lines Open</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href={`mailto:${SYSTEM_DATA.contact.email}`} className="flex flex-col items-center gap-3 group">
              <div className="p-5 bg-[#0F141E] border border-[#00F0FF]/20 group-hover:border-[#00F0FF] transition-all group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Mail className="group-hover:text-[#00F0FF] transition-colors" />
              </div>
              <span className="font-mono text-xs opacity-60 group-hover:opacity-100 group-hover:text-[#00F0FF] transition-all">EMAIL</span>
            </a>
            <a href={SYSTEM_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="p-5 bg-[#0F141E] border border-[#00F0FF]/20 group-hover:border-[#00F0FF] transition-all group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Linkedin className="group-hover:text-[#00F0FF] transition-colors" />
              </div>
              <span className="font-mono text-xs opacity-60 group-hover:opacity-100 group-hover:text-[#00F0FF] transition-all">LINKEDIN</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center opacity-40 font-mono text-[10px] border-t border-[#00F0FF]/10 tracking-[0.2em]">
        &copy; {new Date().getFullYear()} JUAN S. GUTIERREZ | SYSTEM_CORE_V2.5.0_REACT
      </footer>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default App;
