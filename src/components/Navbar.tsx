import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { label: "Sobre", href: "#hero" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tools", href: "#tools" },
  { label: "Indicações", href: "#indicacoes" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Sobre");
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);
  const blur = useTransform(scrollY, [0, 100], [8, 20]);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <motion.div
        style={{
          backgroundColor: `hsla(0, 0%, 100%, ${bgOpacity.get()})`,
          backdropFilter: `blur(${blur.get()}px)`,
        }}
        className="bg-popover/80 backdrop-blur-xl rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-border/50"
      >
        <a href="#hero" className="text-lg font-extrabold text-primary">
          DevPortfolio
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.label, item.href)}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${active === item.label
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {active === item.label && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.button
            onClick={() => handleClick("Contato", "#contato")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-semibold"
          >
            Contato
          </motion.button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </motion.div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden mt-2 bg-popover/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-border/50"
        >
          {navItems.map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleClick(item.label, item.href)}
              className="block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold text-foreground hover:bg-accent transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => handleClick("Contato", "#contato")}
            className="mt-2 w-full bg-foreground text-background px-5 py-3 rounded-xl text-sm font-semibold"
          >
            Contato
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};
