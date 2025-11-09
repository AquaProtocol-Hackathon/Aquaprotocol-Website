"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Federated Wiki Infrastructure',
    description: 'A notarized wiki system with built-in trust (PKC, Protocol v1.2).',
    imageUrl: '/images/AquaImage1.png',
    link: 'https://github.com',
    linkText: 'View on GitHub',
    featured: true,
  },
  {
    title: 'Chrome Extension for Verification',
    description: 'A tool for name resolution and AquaTree validation (Aqua Verifier, Protocol v1.2).',
    imageUrl: '/images/AquaImage2.png',
    link: 'https://chrome.google.com/webstore',
    linkText: 'View in Store',
    featured: true,
  },
  {
    title: 'Firewall-Like Systems',
    description: "Automated access control enforcement integrated with Aqua ('Guardian,' Protocol v1.2).",
    imageUrl: '/images/AquaImage3.png',
    link: 'https://github.com',
    linkText: 'View on GitHub',
    featured: false,
  },
  {
    title: 'Document Signing Service',
    description: "A platform for signing and verifying files ('Aquafier').",
    imageUrl: '/images/AquaImage4.png',
    link: 'https://aquafier.inblock.io',
    linkText: 'Visit Aquafier',
    featured: false,
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="tools" className="bg-off-white py-20 lg:py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-accent">
            AQUA ECOSYSTEM
          </p>
          <h2 className="mt-4 text-[48px] font-semibold leading-[1.2] tracking-[-0.01em] text-foreground">
            Tools built on Aqua Protocol
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the open-source tools and infrastructure enabling cryptographic data verification worldwide.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index} 
              className="group block"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(20,184,166,0.2)]">
                <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-teal-50 to-cyan-50">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                      Featured
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-grow p-6 lg:p-7">
                  <h3 className="text-xl font-semibold text-card-foreground lg:text-[22px] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-accent hover:text-teal-dark font-medium text-[15px] transition-colors"
                  >
                    {item.linkText}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;