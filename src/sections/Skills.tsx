import Section from '../components/Section';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React / Next.js', level: '95%' },
    { name: 'TypeScript', level: '90%' },
    { name: 'Node.js / Express', level: '85%' },
    { name: 'Tailwind CSS', level: '95%' },
    { name: 'PostgreSQL / MongoDB', level: '80%' },
    { name: 'Docker / Git', level: '85%' },
  ];

  return (
    <Section id="skills">
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Technical Stack</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            whileHover={{ y: -5 }}
            style={{ 
              padding: '2rem', 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1rem'
            }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{skill.name}</h3>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                style={{ height: '100%', background: 'var(--accent-color)' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
