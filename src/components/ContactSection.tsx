import React, { useState } from 'react';
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signalSent, setSignalSent] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Start signal animation
    setSignalSent(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Signal received!",
        description: "I'll respond faster than light speed.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Reset animation after 2 seconds
      setTimeout(() => {
        setSignalSent(false);
      }, 2000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">Get in Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-cosmic-star">
            Interested in collaboration, have a project in mind, or want to discuss opportunities?
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-cosmic-nebula bg-opacity-20 p-8 rounded-lg backdrop-blur-sm border border-cosmic-galaxy relative">
            <h3 className="text-xl font-orbitron font-bold text-cosmic-electric mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-cosmic-star mb-2 font-orbitron">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cosmic-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-cosmic-star mb-2 font-orbitron">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="cosmic-input"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-cosmic-star mb-2 font-orbitron">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="cosmic-input resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center relative overflow-hidden"
              >
                {isSubmitting ? 'Transmitting...' : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2" size={16} />
                  </>
                )}
              </button>
            </form>
            
            {/* Signal sent animation */}
            {signalSent && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Central pulse */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-cosmic-electric animate-ping"></div>
                </div>
                
                {/* Signal waves */}
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-cosmic-electric"
                    style={{
                      width: `${(i + 1) * 50}px`,
                      height: `${(i + 1) * 50}px`,
                      opacity: 1 - i * 0.2,
                      animation: `ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
                
                {/* Flying rocket */}
                <div 
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    animation: 'flyRocket 1.5s linear forwards'
                  }}
                >
                  <div className="w-6 h-6 text-cosmic-electric">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                  </div>
                  
                  {/* Trailing stars */}
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-cosmic-star"
                      style={{
                        top: `${Math.random() * 10 - 5}px`,
                        left: `${-5 - i * 3}px`,
                        opacity: 0.8 - i * 0.15
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-orbitron font-bold text-cosmic-electric mb-8">
              Connect With Me
            </h3>
            
            <div className="space-y-6">
              <a 
                href="https://github.com/Rusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-cosmic-space bg-opacity-50 rounded-lg border border-transparent hover:border-cosmic-neon transition-all duration-300 group"
              >
                <div className="mr-4 p-3 bg-gray-800 rounded-full text-white group-hover:bg-cosmic-neon group-hover:text-cosmic-space transition-colors duration-300">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-cosmic-electric font-orbitron">GitHub</h4>
                  <p className="text-cosmic-star text-sm">View my projects and contributions</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-cosmic-space bg-opacity-50 rounded-lg border border-transparent hover:border-cosmic-neon transition-all duration-300 group"
              >
                <div className="mr-4 p-3 bg-blue-700 rounded-full text-white group-hover:bg-cosmic-neon group-hover:text-cosmic-space transition-colors duration-300">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-cosmic-electric font-orbitron">LinkedIn</h4>
                  <p className="text-cosmic-star text-sm">Let's connect professionally</p>
                </div>
              </a>
              
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-cosmic-space bg-opacity-50 rounded-lg border border-transparent hover:border-cosmic-neon transition-all duration-300 group"
              >
                <div className="mr-4 p-3 bg-blue-400 rounded-full text-white group-hover:bg-cosmic-neon group-hover:text-cosmic-space transition-colors duration-300">
                  <Twitter size={24} />
                </div>
                <div>
                  <h4 className="text-cosmic-electric font-orbitron">Twitter</h4>
                  <p className="text-cosmic-star text-sm">Follow my tech journey</p>
                </div>
              </a>
              
              <a 
                href="mailto:hello@example.com" 
                className="flex items-center p-4 bg-cosmic-space bg-opacity-50 rounded-lg border border-transparent hover:border-cosmic-neon transition-all duration-300 group"
              >
                <div className="mr-4 p-3 bg-cosmic-galaxy rounded-full text-white group-hover:bg-cosmic-neon group-hover:text-cosmic-space transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-cosmic-electric font-orbitron">Email</h4>
                  <p className="text-cosmic-star text-sm">hello@example.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
