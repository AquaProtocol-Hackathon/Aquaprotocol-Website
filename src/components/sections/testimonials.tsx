"use client";

import Image from 'next/image';
import { Quote, Droplet } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Aqua Protocol transformed our approach to data governance. The cryptographic verification without blockchain overhead was exactly what we needed for our compliance requirements.",
    name: "Dr. Sarah Chen",
    title: "Chief Data Officer at TechCorp",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/88ea6a2b-2840-409d-b447-9581e6d62701-bravana-framer-website/assets/images/YZbm42k42xiUHfvUHmcmCcmsQ4-16.webp",
    isFeatured: false,
  },
  {
    id: 3,
    quote: "The integration was seamless. Aqua SDK made it simple to add cryptographic notarization to our existing systems. Open-source done right.",
    name: "Elena Kowalski",
    title: "Lead Developer at CloudScale",
    avatar: "",
    isFeatured: true,
    backgroundImage: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/88ea6a2b-2840-409d-b447-9581e6d62701-bravana-framer-website/assets/images/BUYIzd66Dd1jBcHDle7N7QgPdj0-12.webp",
  },
  {
    id: 5,
    quote: "InBlock's support throughout our Aqua implementation was exceptional. They truly understand enterprise data sovereignty.",
    name: "Priya Sharma",
    title: "CTO at DataSphere",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/88ea6a2b-2840-409d-b447-9581e6d62701-bravana-framer-website/assets/images/QWkqtlAIbVeeZHRioDg142BxI-11.webp",
    isFeatured: false,
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const columns = [
    [testimonials[0]],
    [testimonials[1]],
    [testimonials[2]],
  ];

  return (
    <section ref={ref} className="bg-background py-20 lg:py-24">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl md:text-[56px] font-semibold leading-[1.1] tracking-tight text-foreground flex flex-wrap items-center justify-center gap-x-3">
            Trusted by organizations
            <span className="inline-flex items-center justify-center bg-accent rounded-xl p-2 lg:p-2.5">
              <Droplet className="text-white h-7 w-7 lg:h-8 lg:w-8 fill-white" />
            </span>
            worldwide
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            From financial institutions to legal tech, organizations worldwide trust Aqua Protocol for cryptographic data verification.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="space-y-8">
              {col.map((testimonial, cardIndex) => {
                const { id, isFeatured, backgroundImage, quote, name, title, avatar } = testimonial;
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.2 + colIndex * 0.15 + cardIndex * 0.1, ease: "easeOut" }}
                    className={`
                      rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] min-h-[320px]
                      ${isFeatured 
                        ? 'text-white overflow-hidden relative' 
                        : 'bg-card text-card-foreground'}
                    `}
                  >
                    {isFeatured && backgroundImage && (
                      <>
                        <Image
                          src={backgroundImage}
                          alt={`Background for ${name}'s testimonial`}
                          layout="fill"
                          objectFit="cover"
                          className="z-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 to-cyan-900/80 z-0" />
                      </>
                    )}
                    <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
                      <Quote
                        className={isFeatured ? 'text-teal-300/30' : 'text-gray-200'}
                        size={40}
                        strokeWidth={1}
                        fill={isFeatured ? 'rgba(45,212,191,0.1)' : '#F5F5F5'}
                      />
                      <p className={`mt-6 flex-grow ${isFeatured ? 'text-xl' : 'text-lg leading-relaxed'}`}>
                        {quote}
                      </p>
                      <div className={`mt-8 pt-6 flex items-center ${isFeatured ? 'border-t border-white/10' : 'border-t'}`}>
                        {avatar && (
                          <Image
                            src={avatar}
                            alt={name}
                            width={48}
                            height={48}
                            className="rounded-full object-cover"
                          />
                        )}
                        <div className={avatar ? "ml-4" : ""}>
                          <p className="font-semibold text-base">{name}</p>
                          <p className={`text-sm ${isFeatured ? 'text-teal-200' : 'text-muted-foreground'}`}>
                            {title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;