"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();
  const { isConnected } = useAccount();
  const hasRedirected = useRef(false);
  const videoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/88ea6a2b-2840-409d-b447-9581e6d62701/generated_videos/underwater-scene-with-floating-documents-050ea00b-20251106100151.mp4";

  useEffect(() => {
    if (isConnected && !hasRedirected.current) {
      hasRedirected.current = true;
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  return (
    <section ref={ref} className="w-full p-2.5 lg:p-5 bg-background">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[70vh] min-h-[500px] w-full overflow-hidden rounded-[30px] lg:rounded-[40px]"
      >
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="relative flex h-full w-full flex-col justify-center items-center text-center p-6 sm:p-8 md:p-12">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold text-white leading-tight tracking-tight"
          >
            Ready to claim digital sovereignty?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8"
          >
            <ConnectButton.Custom>
              {({ openConnectModal, mounted }) => {
                const ready = mounted;

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!isConnected) {
                        return (
                          <motion.button
                            onClick={() => {
                              hasRedirected.current = false;
                              openConnectModal();
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-lg hover:shadow-xl transition-all"
                          >
                            Start Building
                            <ArrowRight className="h-5 w-5" />
                          </motion.button>
                        );
                      }
                      return (
                        <motion.button
                          onClick={() => router.push('/dashboard')}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-lg hover:shadow-xl transition-all"
                        >
                          Go to Dashboard
                          <ArrowRight className="h-5 w-5" />
                        </motion.button>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;