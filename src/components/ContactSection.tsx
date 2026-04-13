import { AnimatedSection, RevealText, MagneticWrapper, ParallaxLayer } from "./AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, GithubLogo, LinkedinLogo, EnvelopeSimple, Lightning } from "@phosphor-icons/react";
import contactCharacter from "@/assets/contact-character.png";
import { type ElementType } from "react";
import { FloatingCircle, FloatingDiamond, FloatingCross } from "./FloatingElements";

const socials: { icon: ElementType; label: string; url: string }[] = [
  { icon: GithubLogo, label: "GITHUB", url: "https://github.com/nunoguerra1" },
  { icon: LinkedinLogo, label: "LINKEDIN", url: "https://www.linkedin.com/in/nunomguerra" },
  { icon: EnvelopeSimple, label: "EMAIL", url: "mailto:nuno1assis@gmail.com" },
];

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6 relative">
      <ParallaxLayer speed={-0.2} className="absolute top-20 left-10 w-24 h-24 bg-green-blob/30 rounded-full blur-2xl" />
      <FloatingCircle className="top-[15%] right-[10%]" size={120} color="bg-yellow-blob/20" delay={1} />
      <FloatingDiamond className="bottom-[25%] left-[5%]" size={40} />
      <FloatingCross className="top-[50%] right-[3%]" size={22} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold text-primary tracking-wider">VAMOS CONVERSAR?</span>
            <RevealText className="mt-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Pronto para
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                começarmos um
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
                projeto?
              </h2>
            </RevealText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed"
            >
              Estou sempre em busca de novos desafios e parcerias criativas. Se você tem uma ideia incrível, vamos transformá-la em realidade digital.
            </motion.p>
            <motion.a
              href="mailto:nuno1assis@gmail.com"
              whileHover={{ scale: 1.06, x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 rounded-full font-semibold text-lg shadow-2xl mb-8 cursor-pointer"
            >
              Entre em contato <ArrowRight size={20} weight="bold" />
            </motion.a>

            <div className="flex gap-3">
              {socials.map((s, i) => (
                <MagneticWrapper key={s.label}>
                  <motion.a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                    className="flex flex-col items-center gap-2 bg-card rounded-2xl p-5 border border-border/30 cursor-pointer"
                  >
                    <s.icon size={24} weight="duotone" className="text-foreground" />
                    <span className="text-xs font-bold tracking-wider text-muted-foreground">{s.label}</span>
                  </motion.a>
                </MagneticWrapper>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative flex justify-center">
            <div className="relative">
              <ParallaxLayer speed={0.3} className="absolute inset-0 bg-yellow-blob rounded-full blur-3xl opacity-30 scale-125" />
              <motion.img
                src={contactCharacter}
                alt="Personagem de contato"
                loading="lazy"
                width={400}
                height={400}
                className="relative z-10 rounded-3xl shadow-2xl w-full max-w-sm"
                whileHover={{ rotate: 3, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute bottom-12 -right-4 z-20 bg-popover rounded-2xl px-5 py-3 shadow-lg border border-border/50 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Lightning size={16} weight="fill" className="text-primary" />
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground">Resposta rápida</span>
                  <p className="text-xs text-muted-foreground">Geralmente em 24h</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-20" scale>
          <motion.div
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
            className="bg-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-border/30"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-foreground mb-2">Prefere marcar uma reunião?</h3>
              <p className="text-muted-foreground">Marque um horário comigo direto no meu Telegram!</p>
            </div>
            <motion.a
              href="https://t.me/nunoguerra1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-4 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Fale comigo!
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};