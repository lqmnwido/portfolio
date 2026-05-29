import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(13, 13, 13, 0.8)',
      }}
    >
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ 
          fontWeight: 700, 
          fontSize: '1.25rem', 
          letterSpacing: '-0.02em', 
          zIndex: 101,
          cursor: 'pointer'
        }}
      >
        LH.
      </div>
      
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="nav-links mobile-open"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 500, 
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <ul className="nav-links desktop-only">
        {navItems.map((item) => (
          <li key={item.name}>
            <a 
              href={item.href} 
              style={{ 
                fontSize: '0.875rem', 
                fontWeight: 500, 
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
