"use client";

import React, { useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What makes Aqua Protocol different from blockchain solutions?",
    answer: "Aqua Protocol operates on cryptography alone—no blockchain required. This means no transaction fees, no mining overhead, and complete privacy by default. Your data remains local until you choose to share it, while still maintaining cryptographic proof of integrity and provenance.",
  },
  {
    id: "item-2",
    question: "How does Aqua Protocol ensure data integrity?",
    answer: "Aqua uses hash-chains (Aqua-Chains) with Merkle-root hashing (SHA3-512) for deterministic data verification. Every revision creates an immutable cryptographic link, enabling trustless verification without relying on centralized authorities or blockchain networks.",
  },
  {
    id: "item-3",
    question: "Can I integrate Aqua Protocol with my existing systems?",
    answer: "Yes! Aqua Protocol offers SDKs in JavaScript and Rust, along with CLI tools and REST APIs. Our integration services team can help you seamlessly add cryptographic notarization to your existing infrastructure with minimal disruption.",
  },
  {
    id: "item-4",
    question: "Is Aqua Protocol really open source?",
    answer: "Absolutely. Aqua Protocol is fully open-source with GPL-3.0 and MIT licenses. All code is available on GitHub, and we actively welcome community contributions, feedback, and feature requests.",
  },
  {
    id: "item-5",
    question: "What industries benefit most from Aqua Protocol?",
    answer: "Financial institutions use Aqua for transaction verification, legal firms for document authentication, enterprises for audit trails, and any organization requiring privacy-preserving data governance. If you need cryptographic proof without intermediaries, Aqua Protocol is built for you.",
  },
  {
    id: "item-6",
    question: "What support options are available?",
    answer: "We offer community support through GitHub for open-source users, professional email and chat support for growing businesses, and dedicated enterprise support with SLA guarantees and training for organizations. Contact our team to discuss your specific needs.",
  },
];

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-off-white py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-10 lg:grid-cols-[387px_1fr] lg:gap-x-[60px] lg:gap-y-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-accent">
              FAQs
            </p>
            <h2 className="text-5xl font-medium tracking-tight text-dark-gray">
              Common questions
            </h2>
            <p className="text-base text-medium-gray">
              Learn more about Aqua Protocol, how it works, and how it can help your organization achieve digital sovereignty.
            </p>
          </motion.div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                >
                  <AccordionItem
                    value={item.id}
                    className="overflow-hidden rounded-xl border border-border bg-card"
                  >
                    <AccordionTrigger className="group p-6 text-left text-lg font-medium text-card-foreground hover:no-underline [&>svg]:hidden">
                      <div className="flex w-full items-center justify-between gap-4">
                        <span>{item.question}</span>
                        <div className="relative h-8 w-8 flex-shrink-0">
                          <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-full border border-border opacity-100 transition-opacity group-data-[state=open]:opacity-0">
                            <Plus className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-full border border-border opacity-0 transition-opacity group-data-[state=open]:opacity-100">
                            <Minus className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0">
                      <p className="max-w-[590px] text-base text-muted-foreground">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;