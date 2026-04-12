import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";

interface MarqueeTextProps {
  texts: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
  separator?: "star" | "dot" | "dash";
}

export const MarqueeText = ({ texts, speed = 20, className = "", reverse = false, separator = "star" }: MarqueeTextProps) => {
  const separatorEl = separator === "star"
    ? <Star size={16} weight="fill" className="text-primary mx-4 flex-shrink-0" />
    : separator === "dot"
      ? <span className="w-2 h-2 rounded-full bg-primary mx-4 flex-shrink-0" />
      : <span className="w-6 h-0.5 bg-primary mx-4 flex-shrink-0" />;

  const content = texts.map((text, i) => (
    <span key={i} className="flex items-center whitespace-nowrap">
      <span className="text-xl md:text-2xl font-extrabold tracking-tight">{text}</span>
      {separatorEl}
    </span>
  ));

  return (
    <div className={`overflow-hidden py-6 ${className}`}>
      <motion.div
        className="flex items-center"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex items-center">{content}{content}</div>
        <div className="flex items-center">{content}{content}</div>
      </motion.div>
    </div>
  );
};

export const LogoMarquee = ({ className = "" }: { className?: string }) => {
  const logos = ["REACT", "TYPESCRIPT", "NODE.JS", "PYTHON", "DOCKER", "NEXTJS", "FIGMA", "POSTGRESQL", "TAILWIND", "GIT"];

  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <motion.div
        className="flex items-center gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <span
            key={i}
            className="text-sm font-bold tracking-[0.2em] text-muted-foreground/40 whitespace-nowrap hover:text-primary transition-colors duration-300"
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
