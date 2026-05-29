import Section from '../components/Section';
import { motion } from 'framer-motion';

const Projects = () => {
  const categories = [
    {
      title: 'Featured Work',
      projects: [
        {
          title: 'MyPelantikan',
          description: 'A comprehensive appointment management system built for streamlined scheduling and resource allocation.',
          tags: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
          image: '/projects/MyPelantikan.png',
          link: '#',
          github: '#'
        },
        {
          title: 'E-PENGURUSAN JENAZAH KUANTAN',
          description: 'A digital platform for managing funeral services in Kuantan, improving efficiency and accessibility for the community.',
          tags: ['PHP', 'Laravel', 'Blade', 'MySQL', 'Tailwind'],
          image: '/projects/E_PJK.png',
          link: '#',
          github: '#'
        }
      ]
    },
    {
      title: 'Personal Learning Projects',
      projects: [
        {
          title: 'RojakFace ( Face Recognition in the Group Photo )',
          description: 'A modern face recognition library featuring automatic learning, vector search via Qdrant, and hybrid storage for high-accuracy detection.',
          tags: ['Python', 'imgbeddings', 'YuNet', 'OpenCV', 'Qdrant', 'PostgreSQL', 'MinIO'],
          image: '/projects/RojakFace.jpg',
          link: 'https://pypi.org/project/RojakFace/',
          github: 'https://github.com/lqmnwido/RojakFace'
        },
        {
          title: 'Transcribe',
          description: 'A high-performance transcription system using Whisper.cpp and pyannote.audio, optimized for Malay and English mixed-language audio.',
          tags: ['Laravel', 'Vue.js', 'Whisper.cpp', 'Python', 'FFmpeg'],
          image: '/projects/transcribe.png',
          link: 'https://github.com/lqmnwido/Transcribe',
          github: 'https://github.com/lqmnwido/Transcribe'
        }
      ]
    }
  ];

  return (
    <Section id="projects">
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Projects</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {categories.map((category) => (
          <div key={category.title}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '2rem', 
              color: 'var(--accent-color)', 
              borderLeft: '4px solid var(--accent-color)', 
              paddingLeft: '1rem' 
            }}>
              {category.title}
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
              {category.projects.map((project) => (
                <motion.div 
                  key={project.title}
                  whileHover={{ y: -10 }}
                  style={{ 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ 
                    height: '220px', 
                    overflow: 'hidden',
                    background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
                    position: 'relative'
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: 0.8,
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '0.9375rem', lineHeight: '1.6' }}>
                      {project.description}
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)', borderRadius: '1rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links disabled for now */}
                    {/* 
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                        <Code2 size={16} /> Code
                      </a>
                    </div> 
                    */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
