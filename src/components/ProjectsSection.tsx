import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "WeatherKit App",
    description: "A beautiful weather app leveraging Apple's WeatherKit API with stunning SwiftUI animations and widgets.",
    tech: ["SwiftUI", "WeatherKit", "WidgetKit", "Core Location"],
    github: "#",
    live: "#",
  },
  {
    title: "Focus Timer",
    description: "A minimal productivity timer with haptic feedback, Live Activities, and seamless Apple Watch companion.",
    tech: ["Swift", "ActivityKit", "WatchOS", "CloudKit"],
    github: "#",
    live: "#",
  },
  {
    title: "Photo Journal",
    description: "An AI-powered photo journal app that uses Vision framework for auto-tagging and beautiful gallery layouts.",
    tech: ["SwiftUI", "Vision", "Core ML", "PhotosUI"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Things I've built.
          </h2>
        </motion.div>
        <div className="space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
