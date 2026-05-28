import Section from '../components/Section';
import { Mail, Link2, Code2, Send } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', marginBottom: '2rem' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '6rem' }}>
          <a href="mailto:contact@lqmnhafiz.com" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com/in/lqmnhafiz" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <Link2 size={24} />
          </a>
          <a href="https://github.com/lqmnhafiz" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <Code2 size={24} />
          </a>
          <a href="#" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}>
            <Send size={24} />
          </a>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Luqman Hafiz. All rights reserved.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            Designed with Atmosphere.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
