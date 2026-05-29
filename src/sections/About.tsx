import Section from '../components/Section';

const About = () => {
  return (
    <Section id="about">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1.5rem', textAlign: 'justify' }}>
            I am a Software Engineer and a recent graduate with a B.S. in Computer Science (Software Engineering) from Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA).
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', textAlign: 'justify' }}>
            I specialize in building robust applications using PHP (Laravel), Java, and Python. My interest lies at the intersection of traditional software engineering and emerging AI technologies, where I leverage NLP tools like Whisper and Ollama to create intelligent solutions.
          </p>
        </div>
        
        <div style={{ padding: '2rem', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-color)', marginBottom: '1rem' }}>Philosophy</h3>
            <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: '#fff' }}>"Clean code is not just a standard, it's an art form that enables scalability and performance."</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-color)', marginBottom: '1rem' }}>Location</h3>
            <p style={{ fontSize: '1.25rem', color: '#fff' }}>Based in Malaysia, working globally.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
