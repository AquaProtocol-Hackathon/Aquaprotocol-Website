"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FileText, 
  Layout, 
  Share2, 
  Workflow, 
  Link as LinkIcon, 
  User, 
  Info,
  Bell,
  Upload,
  FileSignature,
  Plus,
  ChevronDown,
  Folder,
  Crown,
  Menu,
  X
} from 'lucide-react';

export default function DashboardClient() {
  const { address, isConnected, isConnecting } = useAccount();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isConnecting && !isConnected) {
      router.push('/');
    }
  }, [isConnected, isConnecting, router]);

  if (isConnecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Connecting wallet...</p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return null;
  }

  const sidebarLinks = [
    { icon: FileText, label: 'All files', active: true },
    { icon: Layout, label: 'Templates', active: false },
    { icon: Share2, label: 'Shared files', active: false },
  ];

  const applicationLinks = [
    { icon: Workflow, label: 'Aquasign Workflows', active: false },
    { icon: LinkIcon, label: 'Claim & Attestation', active: false },
    { icon: User, label: 'Identity Profile', active: false },
  ];

  const generalLinks = [
    { icon: Info, label: 'Info', active: false },
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-[260px] bg-white border-r border-black/10">
        {/* Logo - Clickable to return to website */}
        <Link href="/" className="h-[74px] flex items-center px-6 border-b border-black/10 hover:bg-black/5 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg"></div>
            <span className="text-lg font-semibold text-black" style={{ fontFamily: 'var(--font-display)' }}>
              Aqua Protocol
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1 mb-8">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    link.active
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  <Icon size={18} fill={link.active ? "currentColor" : "none"} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between px-4 mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applications
              </span>
              <button className="text-gray-600 hover:text-black transition-colors p-1 rounded hover:bg-black/5">
                <Plus size={14} fill="currentColor" />
              </button>
            </div>
            <div className="space-y-1">
              {applicationLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.label}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black transition-all"
                  >
                    <Icon size={18} fill="currentColor" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="px-4 mb-2">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                General
              </span>
            </div>
            <div className="space-y-1">
              {generalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.label}
                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black transition-all"
                  >
                    <Icon size={18} fill="currentColor" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
          <aside className="w-[260px] h-full bg-white border-r border-black/10" onClick={(e) => e.stopPropagation()}>
            {/* Logo - Clickable to return to website */}
            <div className="h-[74px] flex items-center justify-between px-6 border-b border-black/10">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-black rounded-lg"></div>
                <span className="text-lg font-semibold text-black" style={{ fontFamily: 'var(--font-display)' }}>
                  Aqua Protocol
                </span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-black/5 rounded-lg transition-colors text-gray-600">
                <X size={20} fill="currentColor" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="overflow-y-auto py-6 px-4">
              <div className="space-y-1 mb-8">
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        link.active
                          ? 'bg-black text-white'
                          : 'text-gray-600 hover:bg-black/5 hover:text-black'
                      }`}
                    >
                      <Icon size={18} fill={link.active ? "currentColor" : "none"} />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between px-4 mb-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applications
                  </span>
                </div>
                <div className="space-y-1">
                  {applicationLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.label}
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black transition-all"
                      >
                        <Icon size={18} fill="currentColor" />
                        <span>{link.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="px-4 mb-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    General
                  </span>
                </div>
                <div className="space-y-1">
                  {generalLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.label}
                        className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black transition-all"
                      >
                        <Icon size={18} fill="currentColor" />
                        <span>{link.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="h-[74px] bg-white border-b border-black/10 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-black/5 rounded-lg transition-colors text-black"
            >
              <Menu size={20} fill="currentColor" />
            </button>
            <button className="hidden lg:block p-2 hover:bg-black/5 rounded-lg transition-colors">
              <Menu size={18} className="text-gray-600" fill="currentColor" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative p-2 hover:bg-black/5 rounded-lg transition-colors">
              <Bell size={18} className="text-gray-600" fill="currentColor" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-black rounded-full"></span>
            </button>
            
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full border border-black/10">
              <Crown size={14} className="text-black" fill="currentColor" />
              <span className="text-xs font-medium text-black">Free</span>
            </div>

            <div className="hidden lg:block">
              <ConnectButton />
            </div>
          </div>
        </header>

        {/* Action Bar */}
        <div className="bg-white border-b border-black/10 px-4 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-black/90 text-white rounded-full font-medium text-sm transition-all">
              <Upload size={16} fill="currentColor" />
              <span className="hidden sm:inline">Upload</span>
            </button>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-black/5 text-black border border-black/10 rounded-full font-medium text-sm transition-all">
              <FileSignature size={16} fill="currentColor" />
              <span className="hidden sm:inline">Sign</span>
            </button>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-black/5 text-black border border-black/10 rounded-full font-medium text-sm transition-all">
              <Plus size={16} fill="currentColor" />
              <span className="hidden sm:inline">Create</span>
            </button>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-black/5 text-black border border-black/10 rounded-full font-medium text-sm transition-all">
              <Folder size={16} fill="currentColor" />
              <span className="hidden sm:inline">Template</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            {/* Drop Zone */}
            <div className="bg-white rounded-2xl border border-dashed border-black/20 p-12 lg:p-16">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-black/5 rounded-xl flex items-center justify-center mb-5">
                  <Folder size={32} className="text-gray-600" fill="currentColor" />
                </div>
                
                <h3 className="text-lg font-semibold text-black mb-2">
                  Drop files here
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  or click to browse
                </p>
                
                <button className="flex items-center gap-2 px-6 py-2.5 bg-black hover:bg-black/90 text-white rounded-full font-medium text-sm transition-all">
                  <Upload size={16} fill="currentColor" />
                  <span>Choose Files</span>
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-6 border border-black/10 hover:border-black/30 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <FileSignature className="w-5 h-5 text-black" fill="currentColor" />
                </div>
                <h4 className="text-base font-semibold text-black mb-2">
                  Digital Signatures
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sign and verify documents with cryptographic attestation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-black/10 hover:border-black/30 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <LinkIcon className="w-5 h-5 text-black" fill="currentColor" />
                </div>
                <h4 className="text-base font-semibold text-black mb-2">
                  Claims & Attestation
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Create and manage verifiable claims without blockchain.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-black/10 hover:border-black/30 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <User className="w-5 h-5 text-black" fill="currentColor" />
                </div>
                <h4 className="text-base font-semibold text-black mb-2">
                  Identity Profile
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Manage your sovereign digital identity securely.
                </p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}