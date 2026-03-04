import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-primary font-mono text-sm mr-2">04.</span>
            get_in_touch
          </h2>
          <div className="h-px bg-border mb-8 mt-2 max-w-xs mx-auto" />
          <p className="text-foreground/60 mb-8 max-w-md mx-auto">
            I'm currently open to new opportunities. Whether you have a question 
            or just want to say hi, my inbox is always open.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-mono text-sm font-medium hover:box-glow transition-shadow"
          >
            send_message()
          </a>
          <div className="flex justify-center gap-6 mt-10">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={22} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
