"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Droplet } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  suffix: string;
}

const StatCard = ({ value, label, suffix }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const targetValue = parseInt(value);
      const animation = animate(count, targetValue, {
        duration: 2,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest.toString());
      });

      return () => {
        animation.stop();
        unsubscribe();
      };
    }
  }, [isInView, value, count, rounded]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-foreground text-[40px] md:text-[56px] font-semibold leading-none tracking-[-0.02em]">
        {displayValue}{suffix}
      </p>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = [
    "Aqua", "Protocol", "enables", "organizations", "to", "verify", "data", "with",
  ];

  const rotatingTexts = [
    "certainty",
    "integrity",
    "sovereignty"
  ];

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isInView, rotatingTexts.length]);

  return (
    <section ref={ref} id="about" className="bg-background py-[120px]">
      <div className="container mx-auto flex flex-col items-center px-6 lg:px-20">
        {/* Header Section - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 w-full max-w-5xl mx-auto mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-accent self-start">
            ABOUT US
          </p>
          <h2 className="flex max-w-5xl flex-wrap items-center justify-start gap-x-4 gap-y-2 text-[40px] font-semibold leading-tight tracking-[-0.02em] text-foreground lg:text-[56px] lg:leading-[1.1] w-full">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
              className="inline-flex h-10 w-10 items-center justify-center lg:h-14 lg:w-14"
            >
              <Droplet className="h-12 w-12 text-accent fill-accent" />
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            >
              cryptographic
            </motion.span>
            <span className="text-accent inline-block min-w-[140px] relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h2>
        </motion.div>

        {/* Image - Left Aligned */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-5xl mb-20"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative aspect-video w-full overflow-hidden rounded-3xl bg-gradient-to-br from-teal-100 to-cyan-100"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/88ea6a2b-2840-409d-b447-9581e6d62701/generated_images/underwater-scene-with-flowing-teal-and-c-01619c40-20251104094432.jpg"
              alt="Aqua Protocol visualization"
              fill
              sizes="(max-width: 1023px) 100vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
        </motion.div>

        {/* Statistics Section - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto mb-20"
        >
          <div className="flex flex-col items-center justify-center gap-8 bg-gray-50 rounded-3xl p-8 md:flex-row md:gap-0">
            <div className="flex-1 w-full md:w-auto md:px-8">
              <StatCard value="1000" label="Projects launched" suffix="+" />
            </div>
            <div className="hidden md:block h-auto w-px bg-gray-200 self-stretch"></div>
            <div className="flex-1 w-full md:w-auto md:px-8">
              <StatCard value="50" label="Faster launch times" suffix="%" />
            </div>
            <div className="hidden md:block h-auto w-px bg-gray-200 self-stretch"></div>
            <div className="flex-1 w-full md:w-auto md:px-8">
              <StatCard value="50" label="Countries reached" suffix="+" />
            </div>
          </div>
        </motion.div>

        {/* Text Content Section - Below Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto flex flex-col gap-6"
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            Aqua Protocol is an open-source solution for data accountability and verification using modern cryptographic standards. Built without blockchain dependency, it enables secure, trustless verification of data integrity and provenance.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            From financial institutions to legal compliance, enterprises worldwide trust Aqua for digital notarization, audit trails, and privacy-preserving data governance. Your data stays private until you choose to share—complete digital sovereignty.
          </p>
          <motion.a
            href="https://aquaprotocol.mintlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mt-4 inline-flex items-center gap-3 self-start rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground"
          >
            <span>Read Documentation</span>
            <div className="h-2 w-2 rounded-full bg-accent"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;