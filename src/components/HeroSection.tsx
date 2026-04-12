import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Hand } from "@phosphor-icons/react";
import heroCharacter from "@/assets/hero-character.png";
import { RevealText, ParallaxLayer } from "./AnimatedSection";
import { Scene3D } from "./Scene3D";
import { FloatingCircle, FloatingDiamond, FloatingCross, FloatingDots } from "./FloatingElements";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const characterY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <Scene3D />

      {/* Decorative floating elements */}
      <FloatingCircle className="top-[15%] right-[8%]" size={180} color="bg-green-blob/25" delay={0} />
      <FloatingCircle className="bottom-[20%] left-[5%]" size={120} color="bg-yellow-blob/30" delay={2} duration={10} />
      <FloatingCircle className="top-[60%] right-[25%]" size={60} color="bg-accent/40" delay={4} duration={6} />
      <FloatingDiamond className="top-[25%] left-[15%]" size={50} />
      <FloatingDiamond className="bottom-[30%] right-[12%]" size={30} color="border-accent/30" />
      <FloatingCross className="top-[40%] right-[5%]" size={28} />
      <FloatingCross className="bottom-[15%] left-[20%]" size={20} color="bg-accent/20" />
      <FloatingDots className="top-[10%] left-[60%] opacity-50" count={4} />

      {/* Parallax background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-radial from-green-light/30 via-transparent to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-6"
          >
            <Hand size={18} weight="fill" /> OLÁ, EU SOU O NUNO
          </motion.div>

          <RevealText delay={0.4}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              Criando
            </h1>
          </RevealText>
          <RevealText delay={0.5}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              experiências
            </h1>
          </RevealText>
          <RevealText delay={0.6}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              digitais com{" "}
              <span className="italic text-gradient-green">alma</span>
            </h1>
          </RevealText>
          <RevealText delay={0.7}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-6">
              e código
            </h1>
          </RevealText>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed"
          >
            Full-Stack Developer apaixonado por transformar problemas complexos em interfaces intuitivas.
            Atualmente explorando as fronteiras entre o design centrado no humano e o desenvolvimento robusto.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold text-base shadow-lg shadow-primary/25 cursor-pointer"
            >
              Veja meu trabalho <ArrowRight size={18} weight="bold" />
            </motion.a>
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-7 py-4 rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer"
            >
              Minha história
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-3 mt-8"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3 + i * 0.1, type: "spring", stiffness: 400 }}
                  className="w-9 h-9 rounded-full bg-accent border-2 border-background"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              +5 Projetos Finalizados
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: characterY }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              style={{ scale: blobScale }}
              className="absolute inset-0 bg-green-blob rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob scale-110"
            />
            <motion.img
              src={heroCharacter}
              alt="Alex - Full Stack Developer"
              width={500}
              height={600}
              initial={{ opacity: 0, scale: 0.7, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md drop-shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
              className="absolute bottom-8 left-4 z-20 bg-popover/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-border/50"
            >
              <span className="text-sm font-semibold text-foreground">Disponível para Projetos</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
              className="absolute top-8 right-0 z-20 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-bold tracking-wider"
            >
              FULL-STACK
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ParallaxLayer speed={0.5} className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
