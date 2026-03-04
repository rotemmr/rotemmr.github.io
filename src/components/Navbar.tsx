import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-primary font-bold text-lg">
          {"<"}dev{" />"}
        </a>
        <div className="hidden sm:flex gap-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs mr-1">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary text-xs mr-1">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
