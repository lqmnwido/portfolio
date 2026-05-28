import Section from '../components/Section';

const About = () => {
  return (
    <Section id="about">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            I am a results-driven Software Engineer with a passion for building scalable web applications and high-performance user interfaces. 
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
            With a focus on clean code and modern frontend frameworks, I strive to create seamless digital experiences that are both functional and visually striking.
          </p>
        </div>
        
        <div style={{ padding: '2rem', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-color)', marginBottom: '1rem' }}>Philosophy</h3>
            <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: '#fff' }}>"Clean code is not just a standard, it's an art form that enables scalability and performance."</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-color)', marginBottom: '1rem' }}>Location</h3>
            <p style={{ fontSize: '1.125rem', color: '#fff' }}>Based in Malaysia, working globally.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
