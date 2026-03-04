import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            Designing for the ecosystem<br />people love.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            <p>
              I'm a developer deeply rooted in the Apple ecosystem — building native 
              iOS, macOS, and watchOS experiences with Swift and SwiftUI. I believe in 
              the intersection of technology and the liberal arts.
            </p>
            <p>
              My approach follows Apple's Human Interface Guidelines while pushing 
              creative boundaries. Every pixel matters, every animation tells a story.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
