import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, BookOpen, Gamepad2, Dices } from 'lucide-react';

const interests = [
  { icon: Code2, label: 'Coding' },
  { icon: BookOpen, label: 'Reading' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Dices, label: 'D&D' },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#a3a3a3] leading-relaxed">
              I'm a <span className="text-white font-medium">Junior Software Developer</span> with a passion for building tools that empower people. With a background in <span className="text-[#2dd4bf]">Theology</span> and <span className="text-[#2dd4bf]">Software Engineering</span> from Flatiron School, I blend analytical thinking with creative problem-solving.
            </p>
            <p className="text-lg text-[#a3a3a3] leading-relaxed">
              When I'm not coding, you'll find me reading fantasy and philosophy, playing video games, and scheming of ways to make my players suffer, I mean enjoy, a Dungeons and Dragons campaign.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '3+', label: 'Years Coding' },
                { value: '10+', label: 'Projects' },
                { value: '5+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-[#1a1a1a] rounded-lg border border-[#333333]"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#2dd4bf]">{stat.value}</div>
                  <div className="text-sm text-[#a3a3a3]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">My Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: '#2dd4bf' }}
                  className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-lg border border-[#333333] transition-all cursor-default"
                >
                  <div className="p-2 bg-[#2dd4bf]/10 rounded-lg">
                    <interest.icon size={24} className="text-[#2dd4bf]" />
                  </div>
                  <span className="text-white font-medium">{interest.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 p-6 bg-gradient-to-r from-[#2dd4bf]/10 to-transparent rounded-lg border-l-4 border-[#2dd4bf]"
            >
              <p className="text-[#a3a3a3] italic">
                "The best way to predict the future is to create it."
              </p>
              <p className="text-[#2dd4bf] text-sm mt-2">— Peter Drucker</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
