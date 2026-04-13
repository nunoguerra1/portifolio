import { motion } from "framer-motion";
import { LogoMarquee } from "./MarqueeText";

const footerLinks = [
  { label: "GITHUB", url: "https://github.com/nunoguerra1" },
  { label: "LINKEDIN", url: "https://www.linkedin.com/in/nunomguerra" },
  { label: "CÓDIGO FONTE", url: "https://github.com/nunoguerra1/portifolio" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 relative overflow-hidden">
      <LogoMarquee className="border-b border-border/20" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-extrabold text-primary text-lg">DevPortfolio</span>
          <p className="text-xs text-muted-foreground mt-1">
            FEITO COM AMOR E CARINHO &copy; 2026
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-6"
        >
          {footerLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-xs font-semibold text-muted-foreground tracking-wider hover:text-foreground transition-colors cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};