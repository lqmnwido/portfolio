import Section from '../components/Section';
import { motion } from 'framer-motion';

const Skills = () => {
  const getIconUrl = (name: string) => `https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/${name}.png`;

  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'PHP', icon: getIconUrl('php') },
        { name: 'JavaScript', icon: getIconUrl('javascript') },
        { name: 'TypeScript', icon: getIconUrl('typescript') },
        { name: 'Java', icon: getIconUrl('java') },
        { name: 'Python', icon: getIconUrl('python') },
        { name: 'C', icon: getIconUrl('c') },
        { name: 'Rust', icon: getIconUrl('rust'), isWhite: true },
      ]
    },
    {
      title: 'Technical Stack (Frameworks)',
      skills: [
        { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel' },
        { name: 'Blade', icon: 'https://cdn.simpleicons.org/laravel' },
        { name: 'React', icon: getIconUrl('reactjs') },
        { name: 'Spring Boot', icon: getIconUrl('springboot-initializer') },
        { name: 'Next.js', icon: getIconUrl('nextjs') },
        { name: 'Axum', icon: getIconUrl('rust'), isWhite: true },
        { name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi' },
        { name: 'Tailwind CSS', icon: getIconUrl('tailwind') },
        { name: 'Bootstrap', icon: getIconUrl('bootstrap') },
        { name: 'MySQL', icon: getIconUrl('mysql') },
        { name: 'PostgreSQL', icon: getIconUrl('postgres') },
        { name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite' },
        { name: 'MongoDB', icon: getIconUrl('mongodb') },
      ]
    },
    {
      title: 'Deployment & DevOps',
      skills: [
        { name: 'Linux', icon: getIconUrl('linux') },
        { name: 'Git', icon: getIconUrl('git') },
        { name: 'Nginx', icon: getIconUrl('nginx') },
        { name: 'Apache', icon: getIconUrl('apache') },
        { name: 'MinIO', icon: getIconUrl('minio'), isWhite: true},
        { name: 'Temporal', icon: 'https://cdn.simpleicons.org/temporal/white' },
        { name: 'Qdrant', icon: getIconUrl('qdrant') },
        { name: 'Whisper', icon: getIconUrl('openai'), isWhite: true }, // Whisper is by OpenAI
        { name: 'Ollama', icon: getIconUrl('ollama'), isWhite: true },
        { name: 'vLLM', icon: getIconUrl('vllm')},
      ]
    }
  ];

  return (
    <Section id="skills">
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Knowledge & Tech Stack</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {categories.map((category) => (
          <div key={category.title}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--accent-color)', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
              {category.title}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {category.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ y: -5, background: 'rgba(255,255,255,0.04)' }}
                  style={{ 
                    padding: '1.5rem', 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      objectFit: 'contain',
                      filter: (skill as any).isWhite ? 'brightness(0) invert(1)' : 'none'
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/code.png';
                    }}
                  />
                  <h3 style={{ fontSize: '1.125rem', margin: 0 }}>{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
