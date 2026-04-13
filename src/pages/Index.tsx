import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ToolsSection } from "@/components/ToolsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/FloatingElements";
import { MarqueeText } from "@/components/MarqueeText";
import { WaveDivider } from "@/components/FloatingElements";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background overflow-x-hidden cursor-none md:cursor-none">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <HeroSection />

        <MarqueeText
          texts={["FULL-STACK", "UI/UX DESIGN", "REACT", "NODE.JS", "TYPESCRIPT", "NEXTJS", "POSTGRE", "CLEAN CODE"]}
          speed={25}
          className="bg-foreground text-background py-5 -rotate-1 scale-[1.02]"
        />

        <FeaturesSection />

        <WaveDivider color="fill-primary" />
        <div className="bg-primary py-2">
          <MarqueeText
            texts={["CRIATIVIDADE", "INOVAÇÃO", "PERFORMANCE", "ACESSIBILIDADE", "QUALIDADE", "COLABORAÇÃO"]}
            speed={30}
            reverse
            separator="dot"
            className="text-primary-foreground"
          />
        </div>
        <WaveDivider color="fill-primary" flip />

        <ProjectsSection />

        <ToolsSection />

        <MarqueeText
          texts={["DISPONÍVEL PARA ESTÁGIO", "PRONTO PARA NOVOS DESAFIOS", "APAIXONADO POR CÓDIGO", "VAMOS TRABALHAR JUNTOS"]}
          speed={35}
          className="bg-card border-y border-border/30 text-foreground"
          separator="dash"
        />

        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
