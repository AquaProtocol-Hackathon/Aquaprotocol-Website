"use client";

import { FileText, Clock, Lock, Copy, Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const codeContent = `{
  "hash_algorithm": "SHA256",
  "merkle_root": "6e44f260490db...",
  "revisions": [
    {
      "hash": "a9b2c3d4e5f6...",
      "timestamp": "2025042413394",
      "previous": "7f8e9d0a1b2c..."
    }
  ],
  "verification": {
    "method": "tree",
    "protocol": "v3",
    "verified": true
  }
}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: FileText,
      title: "Portable Hash-Chains",
      description: "Aqua creates AquaTrees that record a complete history of data revisions with cryptographic precision."
    },
    {
      icon: Clock,
      title: "Immutable Timestamps",
      description: "Optional Ethereum timestamping provides additional verification and immutability."
    },
    {
      icon: Lock,
      title: "Decentralized Trust",
      description: "Aqua liberates certification from institutional gatekeepers through open cryptographic standards."
    }
  ];

  return (
    <section className="w-full bg-background py-8 lg:py-12">
      <div className="px-2.5 lg:px-5">
        <div className="overflow-hidden rounded-[30px] bg-gradient-to-br from-teal-900 to-cyan-900 py-20 lg:rounded-[40px] lg:py-[120px]">
          <div ref={ref} className="mx-auto max-w-[1200px] px-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto mb-16 flex max-w-[720px] flex-col items-center gap-5 text-center"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-teal-300">
                HOW IT WORKS
              </p>
              <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
                How It Works
              </h2>
              <p className="text-lg text-teal-100">
                Understand the cryptographic foundation that powers Aqua Protocol's data verification.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left side - Feature cards */}
              <div className="flex flex-col gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                      whileHover={{ 
                        x: 8, 
                        scale: 1.02,
                        boxShadow: "0 12px 40px rgba(45,212,191,0.3)" 
                      }}
                      className="flex gap-6 rounded-[20px] border border-white/20 bg-white/10 p-6 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-all duration-300"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[20px] font-semibold text-white">{feature.title}</h3>
                        <p className="text-base leading-relaxed text-teal-100">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right side - Code terminal visualization */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative flex items-center justify-center transition-all duration-300"
              >
                <div className="w-full overflow-hidden rounded-2xl bg-[#1e1e1e] shadow-2xl">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 border-b border-gray-700 bg-[#2d2d2d] px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="ml-2 text-xs text-gray-400">aquatree.json</span>
                    <button
                      onClick={handleCopy}
                      className="ml-auto flex items-center gap-2 rounded-lg bg-teal-600/20 px-3 py-1.5 text-xs text-teal-300 transition-colors hover:bg-teal-600/30"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code content */}
                  <div className="overflow-x-auto p-6">
                    <pre className="text-sm leading-relaxed text-gray-300">
                      <code>
{`{
  "hash_algorithm": "SHA256",
  "merkle_root": "6e44f260490db..."`}
                        <span className="text-teal-400">,</span>
{`
  "revisions": [`}
                        <span className="text-cyan-400">
{`
    {
      "hash": "a9b2c3d4e5f6..."`}
                        </span>
                        <span className="text-teal-400">,</span>
                        <span className="text-cyan-400">
{`
      "timestamp": "2025042413394"`}
                        </span>
                        <span className="text-teal-400">,</span>
                        <span className="text-cyan-400">
{`
      "previous": "7f8e9d0a1b2c..."`}
                        </span>
{`
    }
  `}<span className="text-teal-400">]</span>
                        <span className="text-teal-400">,</span>
{`
  "verification": {
    "method": "tree"`}
                        <span className="text-teal-400">,</span>
{`
    "protocol": "v3"`}
                        <span className="text-teal-400">,</span>
{`
    "verified": `}
                        <span className="text-green-400">true</span>
{`
  }
}`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Decorative glow effect */}
                <div className="pointer-events-none absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;