import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "UI Engineer", "Problem Solver", "Open Source Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-4">{">"} hello_world</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            I'm <span className="text-primary text-glow">Your Name</span>
          </h1>
          <div className="font-mono text-xl sm:text-2xl text-muted-foreground mb-8 h-8">
            <span>{displayed}</span>
            <span className="text-primary animate-blink">_</span>
          </div>
          <p className="text-foreground/70 max-w-lg text-lg leading-relaxed mb-10">
            I build robust, scalable web applications with clean code and thoughtful design.
            Currently crafting digital experiences that make a difference.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:box-glow transition-shadow"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-mono text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              contact_me()
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
