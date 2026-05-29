import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Hero = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      } 
    },
  };

  return (
    <section 
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem'
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p 
          variants={item}
          style={{ 
            color: 'var(--accent-color)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            fontSize: '0.875rem',
            marginBottom: '1rem',
            fontWeight: 600
          }}
        >
          AI/ML Engineer | Software Engineer
        </motion.p>
        
        <motion.h1 
          variants={item}
          style={{ 
            fontSize: 'clamp(3rem, 10vw, 7rem)', 
            marginBottom: '1.5rem',
            color: '#fff'
          }}
        >
          LUQMAN HAFIZ
        </motion.h1>
        
        <motion.p 
          variants={item}
          style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)'
          }}
        >
          Building high-performance software and AI-driven solutions with PHP, Java, Rust and Python.
        </motion.p>
        
        <motion.div 
          variants={item}
          style={{ marginTop: '3rem' }}
        >
          <a 
            href="#projects" 
            style={{ 
              padding: '1rem 2rem', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '2rem',
              background: 'rgba(255,255,255,0.03)',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          >
            Explore Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
