import Section from '../components/Section';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A high-performance admin panel with real-time data visualization and inventory management.',
      tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      title: 'SaaS Landing Page',
      description: 'Optimized, SEO-friendly marketing site with complex Framer Motion animations.',
      tags: ['Next.js', 'Framer Motion', 'SEO'],
      link: '#',
      github: '#'
    },
    {
      title: 'Real-time Chat App',
      description: 'Full-stack application featuring instant messaging and workspace collaboration.',
      tags: ['Node.js', 'Socket.io', 'MongoDB'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <Section id="projects">
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Featured Work</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        {projects.map((project, index) => (
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
            <div style={{ height: '200px', background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '3rem', opacity: 0.1 }}>Project {index + 1}</span>
            </div>
            
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)', borderRadius: '1rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <Code2 size={16} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
