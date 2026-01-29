import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft';
}

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'technical' },
  { name: 'JavaScript', level: 85, category: 'technical' },
  { name: 'React', level: 80, category: 'technical' },
  { name: 'Flask', level: 85, category: 'technical' },
  { name: 'SQL', level: 80, category: 'technical' },
  { name: 'Redux', level: 70, category: 'technical' },
  { name: 'Problem-Solving', level: 95, category: 'soft' },
  { name: 'Leadership', level: 85, category: 'soft' },
  { name: 'Data Analysis', level: 80, category: 'soft' },
  { name: 'Project Management', level: 75, category: 'soft' },
];

const techSkills = skills.filter(s => s.category === 'technical');
const softSkills = skills.filter(s => s.category === 'soft');

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-[#2dd4bf]">{skill.level}%</span>
      </div>
      <div className="h-2 bg-[#262626] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-[#2dd4bf] to-[#14b8a6] rounded-full"
        />
      </div>
    </motion.div>
  );
}

function SkillTag({ skill, index }: { skill: Skill; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, borderColor: '#2dd4bf' }}
      className="px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-full text-[#a3a3a3] hover:text-[#2dd4bf] transition-all cursor-default"
    >
      {skill.name}
    </motion.div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that I've developed through education, projects, and professional experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center">
                <span className="text-[#2dd4bf] text-sm">{'</>'}</span>
              </span>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {techSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center">
                <span className="text-[#2dd4bf] text-sm">★</span>
              </span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <SkillTag key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-6 bg-[#0f0f0f] rounded-lg border border-[#333333]"
            >
              <h4 className="text-white font-medium mb-3">Always Learning</h4>
              <p className="text-[#a3a3a3] text-sm">
                I'm constantly expanding my skill set. Currently exploring:
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['TypeScript', 'Node.js', 'Docker', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#2dd4bf]/10 text-[#2dd4bf] text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
