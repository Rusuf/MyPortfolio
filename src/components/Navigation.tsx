import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Track active section
      const sections = navLinks.map(l => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || mobileOpen
          ? 'bg-[rgba(10,10,35,0.92)] backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center space-x-2 group"
          >
            <Rocket className="text-[#F5F5F5] group-hover:text-[#00FFFF] transition-colors" size={22} />
            <span
              className="font-orbitron text-[#00FFFF] text-lg font-bold"
              style={{ textShadow: '0 0 10px #00FFFF' }}
            >
              Mathwaque Rufus
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 rounded-full text-sm font-orbitron transition-all duration-300 ${activeSection === link.id
                    ? 'text-[#00FFFF] bg-[rgba(0,255,255,0.1)]'
                    : 'text-[#F5F5F5] hover:text-[#00FFFF]'
                  }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume"
              className="ml-2 px-4 py-1.5 rounded-full text-sm font-orbitron text-[#F5F5F5] border border-[#00FFFF]/40 hover:bg-[#00FFFF]/10 hover:text-[#00FFFF] transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F5F5F5] hover:text-[#00FFFF] transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-[rgba(0,255,255,0.1)]">
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-orbitron transition-all duration-200 ${activeSection === link.id
                      ? 'text-[#00FFFF] bg-[rgba(0,255,255,0.08)]'
                      : 'text-[#F5F5F5] hover:text-[#00FFFF] hover:bg-[rgba(0,255,255,0.05)]'
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume"
                className="text-left px-4 py-3 rounded-lg text-sm font-orbitron text-[#F5F5F5] hover:text-[#00FFFF] hover:bg-[rgba(0,255,255,0.05)] transition-all duration-200"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;