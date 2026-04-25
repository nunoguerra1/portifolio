import { AnimatedSection, RevealText, ParallaxLayer } from "./AnimatedSection";
import { ArrowRight, MagicWand, UsersThree } from "@phosphor-icons/react";
import { motion, useScroll, useTransform, useMotionValue, useTransform as useTransformFM } from "framer-motion";
import { useRef, type ElementType } from "react";
import projetoAquaAdopt from "@/assets/AquaAdopt.jfif";
import projetoUtask from "@/assets/uTask.png";
import { FloatingCircle, FloatingDiamond, FloatingCross, FloatingDots, ParallaxBlob } from "./FloatingElements";

const projects: { icon: ElementType; title: string; description: string; tags: string[]; image: string; reverse: boolean; link: string }[] = [
  {
    icon: MagicWand,
    title: "Aqua-Adopt",
    description:
      "O projeto não é apenas uma demonstração técnica; é uma ferramenta pensada para simular um ecossistema real de monitoramento e preservação marinha.",
    tags: ["REACT", "NEXT.JS", "PRISMA"],
    image: projetoAquaAdopt,
    reverse: false,
    link: "https://github.com/nunoguerra1/aqua-adopt",
  },
  {
    icon: UsersThree,
    title: "uTask 3.0",
    description:
      "O projeto uTask 3.0 consiste em uma aplicação que simula um quadro Kanban, permitindo ao usuário adicionar tarefas e movimentá-las entre as colunas “A Fazer”, “Em Andamento” e “Concluído”. Além disso, a interface de dashboard exibe uma frase motivacional, e o sistema oferece funcionalidades de cadastro e autenticação de usuários.",
    tags: ["REACT", "JSON SERVER", "TYPESCRIPT"],
    image: projetoUtask,
    reverse: true,
    link: "/notfound",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const contentX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    project.reverse ? [60, 0, 0, -30] : [-60, 0, 0, 30]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  // Tilt effect for image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateImgX = useTransformFM(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateImgY = useTransformFM(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleImageMouse = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleImageLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div ref={cardRef} className="grid lg:grid-cols-2 gap-12 items-center">
      <AnimatedSection
        direction={project.reverse ? "right" : "left"}
        delay={0.1}
        className={project.reverse ? "lg:order-2" : ""}
      >
        <motion.div
          style={{ y: imageY, rotateZ: imageRotate, scale: imageScale, rotateX: rotateImgX, rotateY: rotateImgY, transformPerspective: 800 }}
          onMouseMove={handleImageMouse}
          onMouseLeave={handleImageLeave}
          whileHover={{ boxShadow: "0 40px 80px -20px rgba(45, 106, 48, 0.25)" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer group relative"
        >
          {/* Overlay on hover */}
          <motion.div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
            <span className="text-background font-bold text-lg flex items-center gap-2">
              Ver detalhes <ArrowRight size={18} weight="bold" />
            </span>
          </motion.div>
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
      </AnimatedSection>

      <motion.div
        style={{ x: contentX, opacity: contentOpacity }}
        className={project.reverse ? "lg:order-1" : ""}
      >
        <motion.div
          whileHover={{ x: project.reverse ? -5 : 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "3rem" }}
            viewport={{ once: true }}
            className="block h-1 bg-primary rounded-full mb-6"
          />
          <div className="flex items-center gap-2 mb-4">
            <project.icon size={24} weight="duotone" className="text-primary" />
            <RevealText>
              <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">{project.title}</h3>
            </RevealText>
          </div>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-1.5 rounded-full border border-border text-sm font-semibold text-foreground cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <motion.a
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : "_self"}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.06, x: 4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/25 cursor-pointer"
          >
            Ver projeto <ArrowRight size={18} weight="bold" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 px-6 relative">
      <FloatingCircle className="top-20 right-[5%]" size={150} color="bg-green-blob/20" delay={0} />
      <FloatingCircle className="bottom-40 left-[3%]" size={100} color="bg-yellow-blob/25" delay={3} duration={10} />
      <FloatingDiamond className="top-[40%] right-[8%]" size={45} />
      <FloatingCross className="bottom-[20%] right-[15%]" size={24} />
      <FloatingDots className="top-[15%] left-[2%] opacity-40" count={3} />
      <ParallaxBlob className="top-[60%] left-[5%] w-40 h-40" speed={0.4} />

      <ParallaxLayer speed={0.2} className="absolute top-20 right-0 w-32 h-32 bg-green-blob/30 rounded-full blur-2xl" />
      <ParallaxLayer speed={-0.3} className="absolute bottom-40 left-10 w-24 h-24 bg-yellow-blob/40 rounded-full blur-xl" />

      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16" scale>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 cursor-default"
          >
            <MagicWand size={16} weight="fill" /> CURADORIA DIGITAL
          </motion.span>
          <RevealText>
            <h2 className="text-4xl md:text-6xl font-extrabold text-foreground">
              Projetos com
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-extrabold">
              <span className="italic text-gradient-green">Propósito</span>
            </h2>
          </RevealText>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg"
          >
            Uma jornada visual através de soluções digitais criadas para impactar pessoas e resolver problemas reais com uma pitada de criatividade.
          </motion.p>
        </AnimatedSection>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};