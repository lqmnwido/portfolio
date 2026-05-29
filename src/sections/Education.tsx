import Section from '../components/Section';

const Education = () => {
  return (
    <Section id="education">
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Education</h2>
      
      <div style={{ 
        padding: '3rem', 
        background: 'rgba(255,255,255,0.02)', 
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)', opacity: 0.05, filter: 'blur(40px)' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)</h3>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent-color)' }}>B.S. in Computer Science (Software Engineering)</p>
          </div>
          <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '2rem' }}>
            2021 - 2025
          </span>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Academic Performance</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>CGPA 3.05</p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Specialization</h4>
            <p style={{ fontSize: '1.125rem' }}>Software Development & AI</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
