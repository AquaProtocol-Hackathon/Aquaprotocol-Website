"use client";

import { FileCheck, Settings, Database } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-off-white py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-dark-gray mb-4">
              Built for real-world trust
            </h2>
            <p className="text-lg text-medium-gray leading-relaxed max-w-2xl">
              From data governance consulting to complete integration—we help organizations claim digital sovereignty.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Button asChild variant="teal" size="lg">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: FileCheck,
              iconColor: "text-teal-primary",
              bgColor: "bg-teal-50",
              title: "Data Governance",
              description: "Privacy strategies, open-source adoption, and complete digital trust infrastructure for your organization.",
              tags: ["Consulting", "Strategy", "+more"]
            },
            {
              icon: Settings,
              iconColor: "text-cyan",
              bgColor: "bg-cyan-50",
              title: "Integration Services",
              description: "Seamless integration of Aqua Protocol into your existing infrastructure with expert technical support."
            },
            {
              icon: Database,
              iconColor: "text-aqua",
              bgColor: "bg-teal-100",
              title: "Notarization Platform",
              description: "Complete notarization solution for secure, verifiable data certification and timestamping."
            }
          ].map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(20,184,166,0.12)" }}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-5 transition-all duration-300"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.bgColor}`}>
                  <Icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="text-xl font-semibold text-dark-gray">
                    {service.title}
                  </h3>
                  <p className="text-base text-medium-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {service.tags && (
                  <div className="flex items-center gap-3 text-sm text-medium-gray pt-2 border-t border-border">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="hover:text-accent transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;