import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const FloatingCircle = ({ 
  className = "", 
  size = 100, 
  color = "bg-green-blob", 
  blur = "blur-2xl",
  delay = 0,
  duration = 8 
}: { 
  className?: string; size?: number; color?: string; blur?: string; delay?: number; duration?: number 
}) => (
  <motion.div
    className={`absolute rounded-full ${color} ${blur} pointer-events-none ${className}`}
    style={{ width: size, height: size }}
    animate={{
      y: [0, -30, 0, 20, 0],
      x: [0, 15, -10, 5, 0],
      scale: [1, 1.1, 0.95, 1.05, 1],
    }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

export const FloatingDiamond = ({ className = "", size = 40, color = "border-primary/20" }: { className?: string; size?: number; color?: string }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    style={{ width: size, height: size }}
    animate={{
      rotate: [45, 225, 45],
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className={`w-full h-full border-2 ${color} rounded-sm`} />
  </motion.div>
);

export const FloatingCross = ({ className = "", size = 24, color = "bg-primary/15" }: { className?: string; size?: number; color?: string }) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      rotate: [0, 180, 360],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="relative" style={{ width: size, height: size }}>
      <div className={`absolute top-1/2 left-0 w-full h-[3px] ${color} rounded-full -translate-y-1/2`} />
      <div className={`absolute left-1/2 top-0 h-full w-[3px] ${color} rounded-full -translate-x-1/2`} />
    </div>
  </motion.div>
);

export const FloatingDots = ({ className = "", count = 5, color = "bg-primary/20" }: { className?: string; count?: number; color?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    {Array.from({ length: count }).map((_, row) => (
      <div key={row} className="flex gap-3 mb-3">
        {Array.from({ length: count }).map((_, col) => (
          <motion.div
            key={col}
            className={`w-1.5 h-1.5 rounded-full ${color}`}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: (row + col) * 0.2 }}
          />
        ))}
      </div>
    ))}
  </div>
);

export const WaveDivider = ({ className = "", flip = false, color = "fill-card" }: { className?: string; flip?: boolean; color?: string }) => (
  <div className={`w-full overflow-hidden leading-none pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}>
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={`w-full h-16 md:h-24 ${color}`}>
      <path d="M0,40 C360,120 720,0 1080,80 C1260,110 1380,40 1440,60 L1440,120 L0,120 Z" />
    </svg>
  </div>
);

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9998]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export const ParallaxBlob = ({ className = "", speed = 0.3 }: { className?: string; speed?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * speed]);

  return (
    <motion.div ref={ref} style={{ y, rotate }} className={`absolute pointer-events-none ${className}`}>
      <div className="w-full h-full rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-green-blob/20 animate-blob" />
    </motion.div>
  );
};
