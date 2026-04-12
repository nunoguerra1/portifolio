import { AnimatedSection, StaggerContainer, StaggerItem, RevealText, ParallaxLayer } from "./AnimatedSection";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import { useState } from "react";
import { FloatingCircle, FloatingDiamond } from "./FloatingElements";

const testimonials = [
  {
    quote: "texto",
    name: "nome",
    role: "cargo exemplo",
    color: "bg-green-light",
    quoteColor: "text-primary",
  },
  {
    quote: "texto",
    name: "nome",
    role: "cargo exemplo",
    color: "bg-accent",
    quoteColor: "text-primary",
  },
  {
    quote: "texto",
    name: "nome",
    role: "cargo exemplo",
    color: "bg-yellow-blob",
    quoteColor: "text-primary",
  },
];

export const TestimonialsSection = () => {
  const [page, setPage] = useState(0);

  return (
    <section id="indicacoes" className="py-24 px-6 relative overflow-hidden">
      <ParallaxLayer speed={0.3} className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-blob rounded-full blur-3xl opacity-20" />
      <FloatingCircle className="top-[10%] left-[5%]" size={90} color="bg-green-blob/20" delay={2} />
      <FloatingDiamond className="top-[50%] right-[8%]" size={35} />

      <div className="container mx-auto relative z-10">
        <div className="flex items-end justify-between mb-12">
          <AnimatedSection>
            <span className="text-sm font-semibold text-muted-foreground tracking-wider">O QUE DIZEM POR AÍ</span>
            <RevealText className="mt-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
                Indicações &{" "}
                <span className="italic text-gradient-green">Feedback</span>
              </h2>
            </RevealText>
          </AnimatedSection>
          <div className="hidden md:flex gap-2">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setPage(Math.max(0, page - 1))}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors cursor-pointer"
            >
              <CaretLeft size={20} weight="bold" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setPage(Math.min(0, page + 1))}
              className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center cursor-pointer"
            >
              <CaretRight size={20} weight="bold" />
            </motion.button>
          </div>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className={`${t.color} rounded-3xl p-8 h-full flex flex-col cursor-default relative overflow-hidden`}
              >
                {/* Decorative corner circle */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-popover/10 rounded-full" />
                <Quotes size={36} weight="fill" className={`${t.quoteColor} opacity-40 mb-4 relative z-10`} />
                <p className="text-foreground leading-relaxed flex-1 text-base relative z-10">{t.quote}</p>
                <div className="flex items-center gap-3 mt-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-foreground/10"
                  />
                  <div>
                    <span className="font-bold text-sm text-foreground">{t.name}</span>
                    <p className="text-xs font-semibold text-muted-foreground tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
