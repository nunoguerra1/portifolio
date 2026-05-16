import { AnimatedSection, StaggerContainer, StaggerItem, RevealText, ParallaxLayer } from "./AnimatedSection";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";
import { useState } from "react";
import { FloatingCircle, FloatingDiamond } from "./FloatingElements";
import icone1 from "../assets/icons/icone1-removebg-preview.png";
import icone2 from "../assets/icons/icone2-removebg-preview.png";
import icone3 from "../assets/icons/icone3-removebg-preview.png";

const testimonials = [
  {
    quote: `Tive o prazer de supervisionar o Nuno Guerra na Unect Jr. e posso afirmar que ele é um profissional fora da curva.

Desde o início, o que mais me chamou a atenção foi sua proatividade e uma sede por conhecimento constante; o Nuno não espera as demandas chegarem, ele antecipa soluções e está sempre buscando se atualizar com as melhores práticas de Front-End.

Tecnicamente, ele demonstra um domínio sólido e uma entrega de alta qualidade. Além da sua capacidade técnica, o Nuno é aquela pessoa com quem sempre pude contar nos momentos de maior desafio.

Sua postura colaborativa e comprometimento fazem dele um ativo valioso para qualquer time de tecnologia. Recomendo fortemente o Nuno a qualquer equipe que busque excelência e dedicação!`,
    name: "Gustavo Tesin",
    role: "Gerente de Desenvolvimento na Unect Jr",
    image: icone2,
    color: "bg-green-light",
    quoteColor: "text-primary",
  },
  {
    quote: `O aluno cumpriu todas as atividades propostas com elevado nível de responsabilidade, esmero e organização, evidenciando
não apenas competência técnica, mas também comprometimento com a excelência acadêmica. Seu desempenho revelou
seriedade e disciplina, características que o tornam um exemplo para os demais colegas.

Diante do exposto, considero Nuno um aluno altamente recomendável, dotado de atributos acadêmicos e pessoais que
certamente o capacitam para enfrentar novos desafios em sua trajetória profissional e educacional`,
    name: "José Antonio Gonçalves",
    role: "Prof.º da Universidade Tecnológica Federal do Paraná- Campus Cornélio Procópio",
    image: icone3,
    color: "bg-accent",
    quoteColor: "text-primary",
  },
  {
    quote: `Acompanho o desenvolvimento do Nuno desde pequeno, ainda no ensino fundamental, e sempre enxerguei nele um perfil acima da média.

Desde cedo, demonstrou pensamento crítico, capacidade analítica e uma busca constante por autodesenvolvimento. Hoje, acompanhando sua atuação no mercado, vejo ainda mais clareza em seus diferenciais, principalmente na área de desenvolvimento e na produção de artigos técnicos.

escolhi trabalhar com o Nuno e não me arrependo. Ele é competente, dedicado, inteligente e entrega com qualidade real.

Além do lado técnico, é uma pessoa de alto astral, colaborativa e fácil de trabalhar. Recomendo o Nuno com confiança para oportunidades que valorizem capacidade técnica, pensamento crítico e o perfil genial que se destaca.`,
    name: "Kauan Machado",
    role: "Diretor Comercial na Nyven Digital",
    image: icone1,
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

        <StaggerContainer className="grid md:grid-cols-3 gap-6 whitespace-pre-line" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className={`${t.color} rounded-3xl p-8 h-full flex flex-col cursor-default relative overflow-hidden`}
              >
                <Quotes size={36} weight="fill" className={`${t.quoteColor} opacity-40 mb-4 relative z-10`} />

                <p className="text-foreground leading-relaxed flex-1 text-base relative z-10">
                  {t.quote}
                </p>

                <div className="flex items-center gap-4 mt-6 relative z-10">

                  <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden bg-foreground/10 flex items-center justify-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover scale-125"
                    />
                  </div>

                  <div>
                    <span className="font-bold text-base text-foreground">{t.name}</span>
                    <p className="text-sm font-semibold text-muted-foreground tracking-wider">{t.role}</p>
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
