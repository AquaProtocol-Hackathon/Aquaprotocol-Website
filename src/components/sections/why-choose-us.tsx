"use client";

import { Shield, Lock, Zap, Key, CheckCircle2, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-20 lg:py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            WHY CHOOSE US
          </p>
          <h2 className="mt-4 text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-foreground">
            Digital sovereignty without compromise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aqua Protocol enables trustless data verification using cryptography alone—no blockchain required, complete privacy by default.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              visual: (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg"
                    >
                      <Shield className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="text-xs font-medium text-medium-gray">Privacy</p>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg"
                    >
                      <Lock className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="text-xs font-medium text-medium-gray">Trust</p>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg"
                    >
                      <Zap className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="text-xs font-medium text-medium-gray">Fast</p>
                  </div>
                </div>
              ),
              title: "Privacy by design",
              description: "Data remains private locally until you choose to share. No centralized authorities, no data gatekeepers—complete sovereignty."
            },
            {
              visual: (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg"
                    >
                      <Key className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="text-xs font-medium text-medium-gray">Secure</p>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg"
                    >
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="text-xs font-medium text-medium-gray">Verify</p>
                  </div>
                </div>
              ),
              title: "Cryptographic trust",
              description: "Hash-chain immutability with Merkle-root verification. Secure notarization without third parties or blockchain overhead."
            },
            {
              visual: (
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg"
                    >
                      <Rocket className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="text-xs font-medium text-medium-gray">Build</p>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-lg"
                    >
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </motion.div>
                    <p className="text-xs font-medium text-medium-gray">Deploy</p>
                  </div>
                </div>
              ),
              title: "Fast & efficient",
              description: "Built by the community, for the community. Aqua Protocol v3 is production-ready with continuous improvements and active development."
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(20,184,166,0.15)" }}
              className="flex flex-col gap-6 rounded-[20px] bg-card p-6 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              {card.visual}
              <div className="flex flex-col gap-3">
                <h3 className="text-[22px] font-semibold text-card-foreground">{card.title}</h3>
                <p className="text-base text-medium-gray">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
