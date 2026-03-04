import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-primary font-mono text-sm mr-2">02.</span>
            tech_stack
          </h2>
          <div className="h-px bg-border mb-8 mt-2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-mono text-primary text-sm mb-3">
                  {"// "}{group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((skill) => (
                    <li key={skill} className="text-foreground/70 font-mono text-sm flex items-center gap-2">
                      <span className="text-primary">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
