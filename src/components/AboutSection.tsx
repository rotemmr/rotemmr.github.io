import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-primary font-mono text-sm mr-2">01.</span>
            about_me
          </h2>
          <div className="h-px bg-border mb-8 mt-2" />
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              I'm a passionate developer who loves turning complex problems into simple, 
              elegant solutions. With a strong foundation in modern web technologies, 
              I focus on writing clean, maintainable code that scales.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source projects, 
              exploring new technologies, or writing about software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
