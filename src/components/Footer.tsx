import { Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-gradient">
            JP
          </span>
          <span className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Jeevan Pussella. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:scjeevan@gmail.com"
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/scjeevan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#home"
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors text-muted-foreground hover:text-primary"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
