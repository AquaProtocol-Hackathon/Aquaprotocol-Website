"use client";

import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const LetsTalkButton = () => {
  const router = useRouter();
  const { isConnected } = useAccount();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (isConnected && !hasRedirected.current) {
      hasRedirected.current = true;
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  return (
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
                    Get Started
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
  );
};

const Hero = () => {
  const videoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/88ea6a2b-2840-409d-b447-9581e6d62701/generated_videos/gentle-underwater-scene-with-flowing-tea-8248f5a8-20251106094112.mp4";

  return (
    <section id="hero" className="w-full p-2.5 lg:p-5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[85vh] min-h-[600px] w-full overflow-hidden rounded-[30px] lg:h-[calc(100vh-40px)] lg:rounded-[40px]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        <div className="relative flex h-full w-full flex-col justify-end p-6 sm:p-8 md:p-12 lg:justify-between">
          
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex lg:flex-col lg:items-start lg:self-end"
          >
            <p className="mb-6 max-w-sm text-lg font-normal leading-relaxed text-white/90">
              Privacy-preserving cryptographic data verification without blockchain. 
              Secure, sovereign, and open-source.
            </p>
            <LetsTalkButton />
          </motion.div>

          <div className="flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl lg:text-[80px] lg:leading-[1.1] lg:tracking-[-2px]"
            >
              Data integrity flows like water.
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 lg:hidden"
            >
              <p className="mb-6 max-w-sm text-base font-normal leading-relaxed text-white/90">
                Privacy-preserving cryptographic data verification without blockchain. 
                Secure, sovereign, and open-source.
              </p>
              <LetsTalkButton />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;