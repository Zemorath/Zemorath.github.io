import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'VGVaults',
    description: 'A web application to manage and track video game collections. Features include adding, editing, and categorizing games, as well as viewing statistics about your collection.',
    tech: ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy'],
    githubUrl: 'https://github.com/Zemorath/video-game-list',
    featured: true,
  },
  {
    title: 'Library Database',
    description: 'Open-source CLI for managing books and users. Efficient database operations with a clean command-line interface.',
    tech: ['Python', 'SQL'],
    githubUrl: 'https://github.com/Zemorath/library-database',
  },
  {
    title: 'Travium',
    description: 'A platform to manage subscriptions and services, designed for elderly users. Features an intuitive interface and comprehensive management tools.',
    tech: ['React', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy'],
    githubUrl: 'https://github.com/Zemorath/Travium',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative bg-[#1a1a1a] rounded-xl border border-[#333333] overflow-hidden card-lift ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-[#2dd4bf]/20 text-[#2dd4bf] text-xs font-medium rounded-full">
          Featured Project
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-[#2dd4bf]/10 rounded-lg">
            <Folder size={24} className="text-[#2dd4bf]" />
          </div>
          <div className="flex gap-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#a3a3a3] hover:text-[#2dd4bf] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#a3a3a3] hover:text-[#2dd4bf] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2dd4bf] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#a3a3a3] mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#0f0f0f] text-[#a3a3a3] text-sm rounded-full border border-[#333333]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2dd4bf]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Zemorath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg text-white hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all btn-shine"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
