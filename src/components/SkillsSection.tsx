import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Swift", "Objective-C", "Python", "TypeScript"] },
  { category: "Frameworks", items: ["SwiftUI", "UIKit", "Combine", "Core Data"] },
  { category: "Platforms", items: ["iOS", "macOS", "watchOS", "visionOS"] },
  { category: "Tools", items: ["Xcode", "Instruments", "TestFlight", "Git"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Built with the best tools.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="text-foreground text-sm flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
