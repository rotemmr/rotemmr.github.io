import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Let's create something<br />amazing together.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            I'm always interested in hearing about new projects and opportunities 
            in the Apple ecosystem.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-10">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={22} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
