import { motion } from "framer-motion";
import { LogoMarquee } from "./MarqueeText";

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
            BUILT WITH CAFFEINE AND CURIOSITY &copy; 2024
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-6"
        >
          {["GITHUB", "LINKEDIN", "SOURCE CODE"].map((link) => (
            <motion.a
              key={link}
              href="#"
              whileHover={{ y: -2 }}
              className="text-xs font-semibold text-muted-foreground tracking-wider hover:text-foreground transition-colors cursor-pointer"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};
