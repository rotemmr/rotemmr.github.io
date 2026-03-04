import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack SaaS platform with real-time collaboration features, built with React and Node.js.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "DevTools CLI",
    description: "A command-line tool that automates development workflows and boosts productivity.",
    tech: ["Go", "Cobra", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with customizable widgets and real-time updates.",
    tech: ["Next.js", "D3.js", "Tailwind", "Redis"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-primary font-mono text-sm mr-2">03.</span>
            projects
          </h2>
          <div className="h-px bg-border mb-8 mt-2" />
          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
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
                <p className="text-foreground/60 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
