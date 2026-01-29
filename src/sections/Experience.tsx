import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Bookseller',
    company: 'Half Price Books',
    location: 'Austin, TX',
    period: 'Aug 2022 - Present',
    description: 'Analyze sales data to manage stock, engage with customers, and deliver projects on time. Developed strong analytical and customer service skills.',
    skills: ['Data Analysis', 'Customer Service', 'Project Management'],
  },
  {
    title: 'Retention Specialist',
    company: 'Spectrum',
    location: 'Austin, TX',
    period: 'Apr 2021 - Feb 2022',
    description: 'Identified customer issues and tailored solutions to retain them. Honed problem-solving abilities and communication skills.',
    skills: ['Problem Solving', 'Communication', 'CRM'],
  },
  {
    title: 'Licensed Sales Representative',
    company: 'Allstate',
    location: 'Denver, CO',
    period: 'Jul 2020 - Jul 2021',
    description: 'Tracked clients and communicated technical info to non-technical audiences. Developed ability to explain complex concepts simply.',
    skills: ['Sales', 'Client Management', 'Technical Communication'],
  },
];

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-[#2dd4bf] rounded-full border-4 border-[#0f0f0f] z-10" />

      {/* Content */}
      <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#1a1a1a] rounded-xl border border-[#333333] p-6 card-lift"
        >
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-[#2dd4bf]/10 rounded-lg shrink-0">
              <Briefcase size={20} className="text-[#2dd4bf]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{experience.title}</h3>
              <p className="text-[#2dd4bf] font-medium">{experience.company}</p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#a3a3a3]">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#a3a3a3] mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-[#0f0f0f] text-[#a3a3a3] text-xs rounded-full border border-[#333333]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            My professional journey has equipped me with valuable skills in communication, problem-solving, and project management.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2dd4bf] via-[#2dd4bf]/50 to-transparent -translate-x-1/2" />

          {/* Left Line - Mobile */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2dd4bf] via-[#2dd4bf]/50 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.title} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
