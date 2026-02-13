import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Wifi, 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Code, 
  Layers,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Activity
} from 'lucide-react';

/* --- SYSTEM DATA (The Core) --- */

const SYSTEM_DATA = {
  name: "Juan S. Gutierrez",
  title: "Data Strategist & Urban Analyst",
  id: "JSG-001",
  status: "ONLINE",
  tagline: "Converting raw data streams into actionable intelligence.",
  contact: {
    email: "jgjuandi@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-gutierrez-068954328/",
    github: "https://github.com/juansegutierrez"
  },
  skills: [
    { name: "Python & R", icon: <Code size={18} />, type: "Scripting" },
    { name: "SQL & Data Vault", icon: <Database size={18} />, type: "Database" },
    { name: "Tableau & PowerBI", icon: <Activity size={18} />, type: "Visualization" },
    { name: "React & HTML5", icon: <Cpu size={18} />, type: "Frontend" },
    { name: "GIS & Urban Planning", icon: <Globe size={18} />, type: "Spatial Analysis" },
  ],
  experience: [
    {
      role: "Data Vault & ERP Intern",
      org: "FSU ITS",
      date: "Nov 2025 - Present",
      desc: "Supporting the migration of HR and Financial records. Documenting business lifecycles and ensuring Data Vault governance."
    },
    {
      role: "Data Analytics Intern",
      org: "DeVoe L. Moore Center",
      date: "Aug 2025 - Present",
      desc: "Redeveloped FloridaOpenGov. Gathered and cleaned raw data from state agencies to create high-fidelity visualizations."
    },
    {
      role: "Public Policy Intern",
      org: "DeVoe L. Moore Center",
      date: "Aug 2025 - Present",
      desc: "Wrote and peer-reviewed market-focused articles. Conducted market-focused qualitative research on urban planning, education, and AI."
    },
    {
      role: "Administrative Assistant",
      org: "DBS Baby Boomers Adult Day Health & Enrichment Center",
      date: "April 2024 - Sep 2025",
      desc: "Gained experience in data management, MS Office, and insurance billing. Supported the transition to a new management team and the launch of a new daycare and clinic."
    },
    {
      role: "Outreach Chair",
      org: "Environmental Service Program",
      date: "Jan 2023 - April 2025",
      desc: "Led invasive species removal campaigns and organized large-scale educational assemblies."
    }
  ],
  projects: [
    {
      id: 1,
      title: "FloridaOpenGov",
      role: "Lead Developer",
      year: "2025",
      stack: ["Data Viz", "Public Policy", "Data Cleaning"],
      desc: "Won the FSU Library's Annual Data Visualization Contest. A complete redevelopment of a portal dedicated to making Florida's government data accessible. We cleaned chaotic datasets to forge intelligible maps and charts.",
      link: "https://floridaopengov.com", 
      status: "Completed"
    },
    {
      id: 2,
      title: "Terry Saves the World",
      role: "Game Developer",
      year: "2026",
      stack: ["HTML5", "JavaScript", "Narrative Design"],
      desc: "A comedic, narrative-driven puzzle reimagining Minesweeper. Developed the logic and lore for Terry, an office worker battling an intergalactic threat.",
      link: "https://juansegutierrez.github.io/Terry-Saves-the-World/",
      status: "Completed"
    },
    {
      id: 3,
      title: "The Voter Turnout Theory",
      role: "Researcher",
      year: "2025",
      stack: ["Rational Choice Model", "Statistics"],
      desc: "Executed a survey experiment under Dr. Kai Ou. Expanded the Rational Choice Model to examine how overwhelming oppositional public opinion impacts voter behavior.",
      link: null,
      status: "Completed"
    },
    {
      id: 4,
      title: "Factory to Greenspace",
      role: "Urban Planner",
      year: "2025",
      stack: ["Urban Policy", "Smart Growth", "Design"],
      desc: "A proposal to convert an abandoned cement factory into a communal greenspace, utilizing smart growth principles to revitalize Tallahassee.",
      link: null,
      status: "Completed"
    },
    {
      id: 5,
      title: "AI Hallucinations",
      role: "Researcher",
      year: "2026",
      stack: ["LLM Testing", "Academic Analysis"],
      desc: "Investigated 'Fabricated Citations' in AI models within Urban Economics. Graded literary accuracy for the undergraduate symposium.",
      link: null,
      status: "In Progress"
    }
  ]
};

/* --- UI COMPONENTS --- */

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 relative">
    <div className="flex items-center gap-4 mb-2">
      <div className="h-[1px] w-8 bg-[#00F0FF]" />
      <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white tracking-widest uppercase">
        {title}
      </h2>
      <div className="flex-grow h-[1px] bg-gradient-to-r from-[#00F0FF] to-transparent" />
    </div>
    <p className="text-[#00F0FF]/70 font-rajdhani text-lg pl-12 uppercase tracking-wider">
      {subtitle}
    </p>
  </div>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Command", href: "#hero" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Comms", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#0B0E14]/95 border-[#00F0FF]/30 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Activity className="text-[#00F0FF] animate-pulse" size={24} />
            <span className="font-orbitron text-white text-xl font-bold tracking-wider">
              JSG<span className="text-[#00F0FF]">_SYS</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#E0E0E0] hover:text-[#00F0FF] hover:bg-[#00F0FF]/10 transition-all duration-200 font-rajdhani px-3 py-2 rounded-sm text-sm font-bold uppercase tracking-widest border border-transparent hover:border-[#00F0FF]/30"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#00F0FF] hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0E14] border-b border-[#00F0FF]/30"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#E0E0E0] hover:text-[#00F0FF] block px-3 py-2 text-base font-bold font-rajdhani uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0B0E14] overflow-hidden pt-20">
      {/* HUD Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Moving Scanline */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F0FF]/5 to-transparent z-0 animate-scanline pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="px-2 py-1 bg-[#00F0FF]/10 border border-[#00F0FF] text-[#00F0FF] text-xs font-mono">
              SYSTEM STATUS: {SYSTEM_DATA.status}
            </span>
            <span className="h-[1px] w-12 bg-[#00F0FF]/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-2 tracking-tighter"
          >
            JUAN S.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#0055FF]">
              GUTIERREZ
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-rajdhani text-[#E0E0E0] mb-6 uppercase tracking-widest border-l-4 border-[#00F0FF] pl-4"
          >
            {SYSTEM_DATA.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[#E0E0E0]/70 max-w-lg text-lg mb-8 font-rajdhani leading-relaxed"
          >
            //{SYSTEM_DATA.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="group relative px-8 py-3 bg-[#00F0FF]/10 text-[#00F0FF] font-orbitron font-bold border border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all overflow-hidden clip-corner">
              <span className="relative z-10 flex items-center gap-2">
                INITIATE PROTOCOLS <ChevronRight size={18} />
              </span>
            </a>
            <a href={SYSTEM_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="px-8 py-3 bg-transparent text-[#E0E0E0] font-orbitron font-bold border border-[#E0E0E0]/30 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all flex items-center gap-2 clip-corner">
              LINKEDIN <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        {/* Profile Image / Hologram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Tech Circles */}
          <div className="absolute inset-0 border border-[#00F0FF]/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-[#00F0FF]/40 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#00F0FF]/50 shadow-[0_0_40px_rgba(0,240,255,0.3)] bg-[#0B0E14]">
             <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQFBrxhNazYfEg/profile-displayphoto-crop_800_800/B4EZwb1YszKoAI-/0/1769993505887?e=1772668800&v=beta&t=4qYDzbmVTmJvKFY7J7mN3b19Smh7Ed2timW7DgiKzvw" 
              alt="Juan S. Gutierrez" 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
            {/* Scanline overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F0FF]/10 to-transparent animate-scanline pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0B0E14] relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="System Log" subtitle="Professional Experience & Education" />

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Experience List */}
          <div className="md:col-span-7 space-y-8">
            <h3 className="text-xl font-orbitron text-[#00F0FF] mb-6 flex items-center gap-2">
              <Terminal size={20} /> EXECUTION HISTORY
            </h3>
            
            <div className="border-l border-[#00F0FF]/20 pl-6 space-y-12">
              {SYSTEM_DATA.experience.map((job, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[29px] top-1 w-3 h-3 bg-[#0B0E14] border border-[#00F0FF] group-hover:bg-[#00F0FF] transition-colors" />
                  
                  <div className="bg-[#0F141E] p-6 border border-[#00F0FF]/10 hover:border-[#00F0FF]/50 transition-all clip-corner-sm">
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <h4 className="text-lg font-bold text-white font-orbitron">{job.role}</h4>
                      <span className="text-[#00F0FF] text-xs font-mono border border-[#00F0FF]/30 px-2 py-1 bg-[#00F0FF]/5">{job.date}</span>
                    </div>
                    <div className="text-[#E0E0E0]/60 text-sm mb-4 font-rajdhani uppercase tracking-wider">{job.org}</div>
                    <p className="text-[#E0E0E0]/80 text-sm leading-relaxed font-sans">
                      {job.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills */}
          <div className="md:col-span-5 space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-xl font-orbitron text-[#00F0FF] mb-6 flex items-center gap-2">
                 <Layers size={20} /> KNOWLEDGE BASE
              </h3>
              <div className="bg-[#0F141E] p-6 border border-[#00F0FF]/10 relative clip-corner-sm">
                <div className="absolute top-0 right-0 p-2 opacity-20">
                  <Cpu size={48} className="text-[#00F0FF]" />
                </div>
                
                <h4 className="text-lg font-bold text-white font-orbitron">Florida State University</h4>
                <p className="text-[#00F0FF] font-bold font-rajdhani uppercase text-sm mt-1">B.S. Political Science</p>
                <div className="mt-4 text-[#E0E0E0]/70 text-sm space-y-2 font-mono">
                  <div className="flex justify-between border-b border-[#E0E0E0]/10 pb-1">
                    <span>MINORS</span>
                    <span className="text-white">IT & Urban Planning</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E0E0E0]/10 pb-1">
                    <span>GPA</span>
                    <span className="text-white">3.8 (Magna Cum Laude)</span>
                  </div>
                  <div className="pt-1">
                    <span className="block mb-1 text-xs uppercase opacity-50">Certifications</span>
                    <span className="text-white">Google AI Essentials, FEMA Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-orbitron text-[#00F0FF] mb-6 flex items-center gap-2">
                 <Cpu size={20} /> MODULES
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {SYSTEM_DATA.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-[#0F141E] border-l-2 border-[#00F0FF]/30 hover:border-[#00F0FF] hover:bg-[#00F0FF]/5 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="text-[#00F0FF]">{skill.icon}</div>
                      <div className="text-white font-rajdhani font-bold">{skill.name}</div>
                    </div>
                    <div className="text-[#E0E0E0]/40 text-xs font-mono uppercase">{skill.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0B0E14] border-t border-[#00F0FF]/10">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Project Database" subtitle="Deployed Applications & Research" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEM_DATA.projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -5 }}
              className="bg-[#0F141E] border border-[#00F0FF]/20 flex flex-col relative group overflow-hidden"
            >
              {/* Hover Effect - Glow */}
              <div className="absolute inset-0 bg-[#00F0FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Top Bar */}
              <div className="bg-[#00F0FF]/10 p-3 border-b border-[#00F0FF]/20 flex justify-between items-center backdrop-blur-sm">
                <span className="text-[#00F0FF] text-xs font-mono uppercase">ID: {project.id.toString().padStart(3, '0')}</span>
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm ${project.status === 'Completed' ? 'bg-[#00F0FF] text-black' : 'bg-[#E0E0E0]/10 text-[#E0E0E0]'}`}>
                  {project.status}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col relative z-10">
                <h3 className="text-white font-orbitron font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-[#00F0FF]/60 text-xs font-mono mb-4">{project.role}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-1.5 py-0.5 bg-[#0B0E14] text-[#E0E0E0] text-[10px] font-mono border border-[#E0E0E0]/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-[#E0E0E0]/70 font-sans text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                <div className="pt-4 border-t border-[#E0E0E0]/10 flex justify-between items-center mt-auto">
                  <span className="text-[#E0E0E0]/40 font-mono text-xs">{project.year}</span>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[#00F0FF] font-bold hover:text-white transition-colors text-xs font-orbitron uppercase tracking-wider"
                    >
                      Initialize <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-[#E0E0E0]/30 text-xs italic flex items-center gap-1 cursor-not-allowed">
                      Offline <Database size={12} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#080a0f] relative overflow-hidden">
      {/* Grid Floor Effect */}
      <div 
        className="absolute inset-x-0 bottom-0 h-full opacity-20 pointer-events-none"
        style={{
          background: 'perspective(500px) rotateX(60deg) translateY(200px)',
          backgroundImage: 'linear-gradient(#00F0FF 1px, transparent 1px), linear-gradient(90deg, #00F0FF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <SectionHeader title="Comms Array" subtitle="Establish Connection" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <p className="text-[#E0E0E0] font-rajdhani text-xl leading-relaxed">
              "Transmission lines open. Ready to convert data into strategy."
            </p>
            
            <div className="space-y-4">
               <a href={`mailto:${SYSTEM_DATA.contact.email}`} className="flex items-center gap-4 text-[#E0E0E0] hover:text-[#00F0FF] transition-colors group">
                 <div className="p-3 bg-[#0F141E] border border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-all">
                   <Mail size={24} />
                 </div>
                 <span className="font-mono text-sm">{SYSTEM_DATA.contact.email}</span>
               </a>
               
               <a href={SYSTEM_DATA.contact.linkedin} className="flex items-center gap-4 text-[#E0E0E0] hover:text-[#00F0FF] transition-colors group">
                 <div className="p-3 bg-[#0F141E] border border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-all">
                   <Linkedin size={24} />
                 </div>
                 <span className="font-mono text-sm">/in/juan-gutierrez</span>
               </a>
               
               <a href={SYSTEM_DATA.contact.github} className="flex items-center gap-4 text-[#E0E0E0] hover:text-[#00F0FF] transition-colors group">
                 <div className="p-3 bg-[#0F141E] border border-[#00F0FF]/30 group-hover:border-[#00F0FF] transition-all">
                   <Github size={24} />
                 </div>
                 <span className="font-mono text-sm">/juansegutierrez</span>
               </a>
            </div>
          </div>

          <div className="bg-[#0F141E]/80 p-8 border border-[#00F0FF]/20 backdrop-blur-md clip-corner">
            <h4 className="text-[#00F0FF] font-orbitron mb-6 text-sm uppercase tracking-widest border-b border-[#00F0FF]/20 pb-2">Send Encrypted Packet</h4>
            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-[#E0E0E0]/60 font-mono text-xs">SENDER_ID</label>
                <input 
                   type="text" 
                   className="w-full bg-[#0B0E14] border border-[#00F0FF]/30 p-2 text-white focus:outline-none focus:border-[#00F0FF] font-mono text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[#E0E0E0]/60 font-mono text-xs">FREQUENCY (EMAIL)</label>
                <input 
                   type="email" 
                   className="w-full bg-[#0B0E14] border border-[#00F0FF]/30 p-2 text-white focus:outline-none focus:border-[#00F0FF] font-mono text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[#E0E0E0]/60 font-mono text-xs">PAYLOAD</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-[#0B0E14] border border-[#00F0FF]/30 p-2 text-white focus:outline-none focus:border-[#00F0FF] font-mono text-sm resize-none"
                />
              </div>
              <button type="button" className="w-full py-3 bg-[#00F0FF] text-black font-orbitron font-bold hover:bg-white transition-colors uppercase tracking-widest mt-4">
                Transmit Data
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

/* --- MAIN APP --- */

export default function App() {
  return (
    <div className="bg-[#0B0E14] min-h-screen font-sans selection:bg-[#00F0FF] selection:text-black">
      {/* Styles for specific fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&family=Share+Tech+Mono&family=Inter:wght@300;400;600&display=swap');
        
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-mono { font-family: 'Share Tech Mono', monospace; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        html { scroll-behavior: smooth; }

        /* Custom Clip Path for Sci-Fi Corners */
        .clip-corner {
          clip-path: polygon(
            10px 0, 100% 0, 
            100% calc(100% - 10px), calc(100% - 10px) 100%, 
            0 100%, 0 10px
          );
        }
        .clip-corner-sm {
           clip-path: polygon(
            0 0, 100% 0, 
            100% calc(100% - 10px), calc(100% - 10px) 100%, 
            0 100%
          );       
        }

        @keyframes scanline {
          0% { top: 0% }
          100% { top: 100% }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>

      <NavBar />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-[#080a0f] py-8 text-center border-t border-[#00F0FF]/10">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Wifi size={16} className="text-[#00F0FF] animate-pulse" />
          <span className="text-[#00F0FF] font-mono text-xs">SIGNAL STABLE</span>
        </div>
        <p className="text-[#E0E0E0]/40 font-rajdhani text-sm uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Juan S. Gutierrez. System Version 2.0.
        </p>
      </footer>
    </div>
  );
}
