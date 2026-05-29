import Section from '../components/Section';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: '2en Apps Sdn Bhd',
      role: 'IT Personnel / Intern',
      period: '2024 - Present',
      description: 'Worked on full-stack web development projects using PHP Laravel and Vue.js. Assisted in system maintenance and deployment processes.'
    },
    {
      company: 'UMP Advance',
      role: 'Student Assistant',
      period: '2023 - 2024',
      description: 'Handled administrative tasks and supported IT-related operations within the department.'
    }
  ];

  return (
    <Section id="experience">
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Experience</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp) => (
          <motion.div 
            key={exp.company}
            whileHover={{ x: 10 }}
            style={{ 
              padding: '2rem', 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.company}</h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: 500 }}>{exp.role}</p>
              </div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
                {exp.period}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
