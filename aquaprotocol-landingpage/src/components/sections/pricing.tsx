"use client";

import { Check, Award, Crown, Building2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for exploring capabilities',
    icon: Award,
    features: [
      'Basic document notarization',
      'Up to 5 AquaTrees',
      'Public verification',
      'Community support',
    ],
    isPopular: false,
    buttonText: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For individuals and small teams',
    icon: Crown,
    features: [
      'Unlimited notarization',
      'Up to 100 AquaTrees',
      'Private verification',
      'Priority support',
    ],
    isPopular: true,
    buttonText: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs',
    icon: Building2,
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'Advanced security features',
      'SLA guarantees',
    ],
    isPopular: false,
    buttonText: 'Contact Sales',
  },
];

const PricingCard = ({ tier }: { tier: (typeof pricingTiers)[0] }) => {
  const Icon = tier.icon;
  const isDark = tier.isPopular;
  
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 h-full transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-teal-primary via-teal-dark to-teal-primary text-white shadow-xl' 
          : 'bg-white border border-border shadow-md hover:shadow-lg'
      }`}
    >
      {tier.isPopular && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-cyan to-aqua text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
          Popular
        </div>
      )}
      
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
        isDark ? "bg-white/10" : "bg-teal-50"
      }`}>
        <Icon className={`w-7 h-7 ${isDark ? "text-white" : "text-teal-primary"}`} strokeWidth={1.5} />
      </div>

      <h3 className={`text-2xl font-semibold mb-2 ${isDark ? "text-white" : "text-foreground"}`}>
        {tier.name}
      </h3>
      
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-5xl font-bold tracking-tight ${isDark ? "text-white" : "text-foreground"}`}>
            {tier.price}
          </span>
          {tier.period && (
            <span className={`text-sm ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
              {tier.period}
            </span>
          )}
        </div>
        <p className={`text-sm mt-2 ${isDark ? "text-white/80" : "text-muted-foreground"}`}>
          {tier.description}
        </p>
      </div>

      <ul className="flex flex-col gap-3 flex-grow mb-6">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${isDark ? "text-teal-200" : "text-teal-primary"}`} />
            <span className={`text-sm leading-relaxed ${isDark ? "text-white/90" : "text-foreground"}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={isDark ? "default" : "outline"}
        size="lg"
        className={isDark ? "bg-white text-teal-primary hover:bg-white/95 shadow-lg" : ""}
      >
        {tier.buttonText}
      </Button>
    </div>
  );
};

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="bg-off-white py-20 lg:py-28">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-4">
            Our Pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-dark-gray mb-4">
            Flexible pricing for every stage
          </h2>
          <p className="text-lg text-medium-gray leading-relaxed">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="flex"
            >
              <PricingCard tier={tier} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;