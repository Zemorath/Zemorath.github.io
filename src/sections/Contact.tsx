import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Send, Github, Linkedin, Mail, BookOpen, CheckCircle } from 'lucide-react';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Zemorath' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/trentward100/' },
    { icon: BookOpen, label: 'Dev.to', url: 'https://dev.to/zemorath' },
    { icon: Mail, label: 'Email', url: 'mailto:trentward100@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#a3a3a3] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all resize-none"
                  placeholder="I'd love to hear about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#2dd4bf] text-[#0f0f0f] rounded-lg font-medium hover:bg-[#14b8a6] transition-all btn-shine disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-[#0f0f0f] border-t-transparent rounded-full"
                  />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-[#a3a3a3] mb-6">
                Whether you have a question, a project idea, or just want to say hi, feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#2dd4bf' }}
                  className="flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white hover:text-[#2dd4bf] transition-all"
                >
                  <div className="p-2 bg-[#2dd4bf]/10 rounded-lg">
                    <link.icon size={20} className="text-[#2dd4bf]" />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="p-6 bg-gradient-to-r from-[#2dd4bf]/10 to-transparent rounded-lg border border-[#2dd4bf]/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full pulse-glow" />
                <span className="text-white font-medium">Open to Opportunities</span>
              </div>
              <p className="text-[#a3a3a3] text-sm">
                I'm currently looking for new opportunities as a Junior Software Developer. Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
