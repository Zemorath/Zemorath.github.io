import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, BookOpen } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Zemorath' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/trentward100/' },
    { icon: BookOpen, url: 'https://dev.to/zemorath' },
  ];

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#333333]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[#a3a3a3]"
          >
            <span>© {currentYear} Trent Ward. Made with</span>
            <Heart size={16} className="text-[#2dd4bf] fill-[#2dd4bf]" />
            <span>and lots of</span>
            <span className="text-[#2dd4bf]">coffee</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#a3a3a3] hover:text-[#2dd4bf] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
