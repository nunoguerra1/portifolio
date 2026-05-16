import { AnimatedSection, StaggerContainer, StaggerItem, RevealText, MagneticWrapper } from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cloud, Code, BracketsAngle, PaintBrush, Database, Atom, CubeTransparent } from "@phosphor-icons/react";
import { type ElementType } from "react";
import { FloatingCircle, FloatingDiamond, FloatingCross, FloatingDots } from "./FloatingElements";
import { MiniScene3D } from "./Scene3D";

const mainTools: { name: string; icon: ElementType; color: string }[] = [
  { name: "JAVASCRIPT", icon: Code, color: "bg-yellow-blob" },
  { name: "NEXTJS", icon: Code, color: "bg-accent" },
  { name: "POSTGRESQL", icon: Database, color: "bg-green-light" },
  { name: "REACT", icon: Atom, color: "bg-accent" },
  { name: "DOCKER", icon: CubeTransparent, color: "bg-green-light" },
];

const secondaryTools = ["Tailwind CSS", "Node.js", "TypeScript", "NestJS", "Figma", "Git"];

const categoryIcons: { icon: ElementType; label: string }[] = [
  { icon: BracketsAngle, label: "FRONTEND" },
  { icon: Database, label: "BACKEND" },
  { icon: PaintBrush, label: "DESIGN" },
];

export const ToolsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blobX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const blobY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="tools" className="py-24 px-6 relative overflow-hidden bg-card/50">
      <motion.div style={{ x: blobX }} className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-blob rounded-full blur-3xl opacity-20" />
      <motion.div style={{ y: blobY }} className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-blob rounded-full blur-2xl opacity-30" />

      <FloatingCircle className="top-[10%] right-[15%]" size={100} color="bg-accent/25" delay={1} />
      <FloatingDiamond className="bottom-[15%] left-[10%]" size={40} />
      <FloatingCross className="top-[60%] right-[5%]" size={20} />
      <FloatingDots className="bottom-[5%] right-[20%] opacity-30" count={4} />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16" scale>
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
              Minha Caixa de{" "}
              <span className="italic text-gradient-green">Ferramentas</span>
            </h2>
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg"
          >
            Explorando o universo digital com as melhores tecnologias para criar experiências memoráveis e performáticas.
          </motion.p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10" staggerDelay={0.1}>
          {mainTools.map((tool) => (
            <StaggerItem key={tool.name}>
              <MagneticWrapper>
                <motion.div
                  whileHover={{ scale: 1.2, y: -12, rotate: [0, -5, 5, 0] }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex flex-col items-center gap-3 cursor-default"
                >
                  <div className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center shadow-md`}>
                    <tool.icon size={32} weight="duotone" />
                  </div>
                  <span className="text-xs font-bold tracking-wider text-muted-foreground">{tool.name}</span>
                </motion.div>
              </MagneticWrapper>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-wrap gap-3 bg-accent/60 rounded-full px-6 py-4"
            >
              {secondaryTools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.06, type: "spring", stiffness: 400 }}
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="px-4 py-2 bg-popover rounded-full text-sm font-semibold text-foreground border border-border/50 cursor-default shadow-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3 bg-green-light rounded-full px-6 py-4 flex-1 min-w-[250px]"
            >
              <div>
                <span className="font-bold text-foreground">Deploy & Hospedagem</span>
                <p className="text-sm text-primary">Vercel, Render & GitHub Pages</p>
              </div>
              <Cloud size={28} weight="duotone" className="text-primary ml-auto" />
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-24" scale>
          <motion.div
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.4 }}
            className="bg-background rounded-3xl p-10 border border-border/30 relative overflow-hidden"
          >
            {/* Embedded 3D mini scene */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-50">
              <MiniScene3D className="w-full h-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <RevealText>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">
                    Toolkit do
                  </h3>
                </RevealText>
                <RevealText delay={0.1}>
                  <h3 className="text-3xl md:text-4xl font-extrabold">
                    <span className="text-gradient-green italic">Arquiteto Digital</span>
                  </h3>
                </RevealText>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground leading-relaxed mt-4"
                >
                  Cada projeto é uma oportunidade de explorar novas tecnologias. Minha stack é versátil e focada em performance e deleite visual.
                </motion.p>
                <StaggerContainer className="flex gap-6 mt-6" staggerDelay={0.1}>
                  {categoryIcons.map((item) => (
                    <StaggerItem key={item.label}>
                      <MagneticWrapper>
                        <motion.div
                          whileHover={{ y: -6, rotate: 5 }}
                          className="flex flex-col items-center gap-2 cursor-default"
                        >
                          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-sm">
                            <item.icon size={28} weight="duotone" />
                          </div>
                          <span className="text-xs font-bold tracking-wider text-muted-foreground">{item.label}</span>
                        </motion.div>
                      </MagneticWrapper>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                <StaggerItem>
                  <motion.div
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-accent rounded-3xl p-6 text-center cursor-default"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="text-4xl font-extrabold text-primary block"
                    >
                      6+
                    </motion.span>
                    <p className="text-xs font-bold tracking-wider text-muted-foreground mt-1">PROJETOS ATIVOS</p>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-green-light rounded-3xl p-6 text-center cursor-default"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="text-4xl font-extrabold text-primary block"
                    >
                      1y
                    </motion.span>
                    <p className="text-xs font-bold tracking-wider text-muted-foreground mt-1">EXPERIÊNCIA</p>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="col-span-2 bg-primary rounded-3xl p-6 flex items-center justify-between cursor-pointer group"
                  >
                    <div>
                      <span className="text-lg font-bold text-primary-foreground">Quer colaborar?</span>
                      <p className="text-sm text-primary-foreground/80">Sempre aberto a novos desafios.</p>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center"
                    >
                      <PaintBrush size={20} weight="fill" className="text-primary-foreground" />
                    </motion.div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
