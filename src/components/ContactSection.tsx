
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
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Received!",
        description: "Thanks for reaching out! I'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="cosmic-section">
      <div className="cosmic-container">
        <h2 className="cosmic-title text-center">Send a Signal to My Galaxy</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-cosmic-star">
            Want to discuss a project, collaboration opportunity, or just say hello?
            Use the interstellar communication system below to reach out to me!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="bg-cosmic-nebula bg-opacity-20 p-8 rounded-lg backdrop-blur-sm border border-cosmic-galaxy">
            <h3 className="text-xl font-orbitron font-bold text-cosmic-electric mb-6">
              Beam Me a Message
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
                    {/* Signal animation on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                      <div className="w-8 h-8 rounded-full border-2 border-cosmic-electric animate-ping"></div>
                    </div>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-orbitron font-bold text-cosmic-electric mb-8">
              Other Cosmic Coordinates
            </h3>
            
            <div className="space-y-6">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-cosmic-space bg-opacity-50 rounded-lg border border-transparent hover:border-cosmic-neon transition-all duration-300 group"
              >
                <div className="mr-4 p-3 bg-gray-800 rounded-full text-white group-hover:bg-cosmic-neon group-hover:text-cosmic-space transition-colors duration-300">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-cosmic-electric font-orbitron">GitHub</h4>
                  <p className="text-cosmic-star text-sm">Check out my code repositories</p>
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
                  <p className="text-cosmic-star text-sm">Connect with me professionally</p>
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
                  <p className="text-cosmic-star text-sm">Follow me for updates</p>
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
        
        <div className="mt-20 text-center">
          <p className="text-cosmic-nebula">
            Built by Developer for the 1 Million Devs Hackathon
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
