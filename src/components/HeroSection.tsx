import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["iOS Developer", "Swift Engineer", "UI/UX Enthusiast", "Apple Platform Developer"];

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
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-primary text-sm mb-6 tracking-widest uppercase">Hello World</p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight mb-4">
            <span className="text-gradient-apple">Your Name</span>
          </h1>
          <div className="font-mono text-xl sm:text-2xl text-muted-foreground mb-8 h-8">
            <span>{displayed}</span>
            <span className="text-primary animate-blink">|</span>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed mb-12">
            Crafting seamless experiences across the Apple ecosystem.
            Passionate about pixel-perfect interfaces and elegant code.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
