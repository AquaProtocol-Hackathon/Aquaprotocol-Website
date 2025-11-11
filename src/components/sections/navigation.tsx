"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Infinity } from "lucide-react";
import { motion } from "framer-motion";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 74; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Protocol", href: "#about", isExternal: false },
    { name: "Tools", href: "#tools", isExternal: false },
    { name: "Docs", href: "https://aquaprotocol.mintlify.app/", isExternal: true },
    { name: "GitHub", href: "https://github.com/inblockio", isExternal: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <nav className="bg-white/80 backdrop-blur-xl border-b border-border/50">
        <div className="mx-auto flex h-[74px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <Infinity className="w-7 h-7 text-teal-600" strokeWidth={2} />
            <p className="text-xl font-semibold text-black" style={{ fontFamily: 'var(--font-display)' }}>Aqua Protocol</p>
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-5 rounded-full text-base font-medium text-medium-gray hover:text-black hover:bg-secondary/50 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="py-2 px-5 rounded-full text-base font-medium text-medium-gray hover:text-black hover:bg-secondary/50 transition-all duration-200"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ConnectButton.Custom>
                {({ account, chain, openConnectModal, mounted }) => {
                  const ready = mounted;
                  const connected = ready && account && chain;

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
                      <Button
                        onClick={connected ? () => router.push('/dashboard') : openConnectModal}
                        variant="teal"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Try Aquafier
                      </Button>
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
            
            <button
              className="lg:hidden text-black p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          >
            <div className="flex flex-col items-center gap-2 py-6 px-4">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full max-w-xs py-3 px-5 rounded-full text-base font-medium text-medium-gray hover:text-black hover:bg-secondary text-center transition-all"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="w-full max-w-xs py-3 px-5 rounded-full text-base font-medium text-medium-gray hover:text-black hover:bg-secondary text-center transition-all"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <ConnectButton.Custom>
                {({ account, chain, openConnectModal, mounted }) => {
                  const ready = mounted;
                  const connected = ready && account && chain;

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
                      className="w-full max-w-xs mt-2"
                    >
                      <Button
                        onClick={() => {
                          if (connected) {
                            router.push('/dashboard');
                          } else {
                            openConnectModal();
                          }
                          setIsMenuOpen(false);
                        }}
                        variant="teal"
                        className="w-full"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Try Aquafier
                      </Button>
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
