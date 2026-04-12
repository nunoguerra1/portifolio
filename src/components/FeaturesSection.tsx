import { StaggerContainer, StaggerItem, MagneticWrapper } from "./AnimatedSection";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CodeBlock, Sparkle, Rocket } from "@phosphor-icons/react";
import { type ElementType, useRef } from "react";
import { FloatingCircle, FloatingDiamond, FloatingCross } from "./FloatingElements";

const features: { icon: ElementType; title: string; description: string; accent: string }[] = [
  {
    icon: CodeBlock,
    title: "Código Limpo",
    description: "Sempre buscando as melhores práticas e arquiteturas escaláveis para o front e back-end.",
    accent: "from-primary/10 to-accent/20",
  },
  {
    icon: Sparkle,
    title: "Foco em UX",
    description: "Interfaces pensadas para serem acessíveis, bonitas e, acima de tudo, funcionais.",
    accent: "from-accent/20 to-green-light/30",
  },
  {
    icon: Rocket,
    title: "Evolução Contínua",
    description: "Intern no nome, mas sempre aprendendo tecnologias de ponta para entregar o melhor.",
    accent: "from-yellow-blob/20 to-accent/10",
  },
];

const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <FloatingCircle className="top-10 right-[10%]" size={80} color="bg-accent/30" delay={1} />
      <FloatingDiamond className="bottom-10 left-[8%]" size={35} />
      <FloatingCross className="top-[50%] left-[3%]" size={22} />

      <div className="container mx-auto">
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <TiltCard>
                <MagneticWrapper>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group bg-gradient-to-br ${feature.accent} backdrop-blur-sm rounded-3xl p-8 border border-border/30 cursor-default h-full relative overflow-hidden`}
                  >
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-14 h-14 rounded-2xl bg-popover flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 shadow-sm"
                    >
                      <feature.icon size={28} weight="duotone" />
                    </motion.div>
                    <h3 className="relative text-xl font-extrabold text-foreground mb-3">{feature.title}</h3>
                    <p className="relative text-muted-foreground leading-relaxed">{feature.description}</p>
                  </motion.div>
                </MagneticWrapper>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
