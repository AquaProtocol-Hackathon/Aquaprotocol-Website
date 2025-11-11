"use client";

import { useEffect, useState, useRef } from 'react';
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
  X,
  Infinity
} from 'lucide-react';
import TemplatesPage from './components/TemplatesPage';
import SharedContractsPage from './components/SharedContractsPage';
import WorkflowsPage from './components/WorkflowsPage';
import ClaimsPage from './components/ClaimsPage';
import InfoPage from './components/InfoPage';
import IdentityPage from './components/IdentityPage';

type PageView = 'all-files' | 'templates' | 'shared-contracts' | 'workflows' | 'claims' | 'identity' | 'info';

export default function DashboardClient() {
  const { address, isConnected, isConnecting } = useAccount();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<PageView>('all-files');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isConnecting && !isConnected) {
      router.push('/');
    }
  }, [isConnected, isConnecting, router]);

  if (isConnecting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/80">Connecting wallet...</p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return null;
  }

  // Restore original sidebar structure
  const sidebarLinks = [
    { icon: FileText, label: 'All files', view: 'all-files' as PageView },
    { icon: Layout, label: 'Templates', view: 'templates' as PageView },
    { icon: Share2, label: 'Shared files', view: 'shared-contracts' as PageView },
  ];

  const applicationLinks = [
    { icon: Workflow, label: 'Aquasign Workflows', view: 'workflows' as PageView },
    { icon: LinkIcon, label: 'Claim & Attestation', view: 'claims' as PageView },
    { icon: User, label: 'Identity Profile', view: 'identity' as PageView },
  ];

  const generalLinks = [
    { icon: Info, label: 'Info', view: 'info' as PageView },
  ];

  const handleViewChange = (view: PageView) => {
    setCurrentView(view);
    setSidebarOpen(false); // Close mobile sidebar when navigating
  };

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle file upload - you can add your upload logic here
      console.log('Files selected:', files);
      // For now, just show an alert
      alert(`${files.length} file(s) selected. Upload functionality can be implemented here.`);
    }
  };

  const handleSign = () => {
    // Navigate to workflows or show sign dialog
    setCurrentView('workflows');
  };

  const handleCreate = () => {
    // Navigate to templates or show create dialog
    setCurrentView('templates');
  };

  const handleTemplate = () => {
    // Navigate to templates page
    setCurrentView('templates');
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-[260px] bg-black rounded-[40px] my-4 ml-4 relative">
        {/* Logo - Clickable to return to website */}
        <Link href="/" className="h-[74px] flex items-center justify-center px-6 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-2">
            <Infinity className="w-8 h-8 text-white" strokeWidth={2} />
            <span className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Aqua Protocol
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 relative">
          <div className="space-y-1 mb-8">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.view === currentView;
              return (
                <div key={link.label} className="relative">
                  {/* Left indicator bar for active item */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                  )}
                  <button
                    onClick={() => handleViewChange(link.view)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all relative ${
                      isActive
                        ? 'bg-white text-black rounded-r-full'
                        : 'text-white hover:opacity-80'
                    }`}
                  >
                    <Icon size={18} fill={isActive ? "currentColor" : "none"} />
                    <span>{link.label}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between px-4 mb-2">
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                Applications
              </span>
              <button 
                onClick={() => setCurrentView('templates')}
                className="text-white/60 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
                title="Add new application"
              >
                <Plus size={14} />
              </button>
            </div>
            <div className="space-y-1">
              {applicationLinks.map((link) => {
                const Icon = link.icon;
                const isActive = link.view === currentView;
                return (
                  <div key={link.label} className="relative">
                    {/* Left indicator bar for active item */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                    )}
                    <button
                      onClick={() => handleViewChange(link.view)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all relative ${
                        isActive
                          ? 'bg-white text-black rounded-r-full'
                          : 'text-white hover:opacity-80'
                      }`}
                    >
                      <Icon size={18} fill={isActive ? "currentColor" : "none"} />
                      <span>{link.label}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="px-4 mb-2">
              <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                General
              </span>
            </div>
            <div className="space-y-1">
              {generalLinks.map((link) => {
                const Icon = link.icon;
                const isActive = link.view === currentView;
                return (
                  <div key={link.label} className="relative">
                    {/* Left indicator bar for active item */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                    )}
                    <button
                      onClick={() => handleViewChange(link.view)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all relative ${
                        isActive
                          ? 'bg-white text-black rounded-r-full'
                          : 'text-white hover:opacity-80'
                      }`}
                    >
                      <Icon size={18} fill={isActive ? "currentColor" : "none"} />
                      <span>{link.label}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}>
          <aside className="w-[260px] h-full bg-black rounded-[40px] flex flex-col relative" onClick={(e) => e.stopPropagation()}>
            {/* Logo - Clickable to return to website */}
            <div className="h-[74px] flex items-center justify-between px-6">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Infinity className="w-8 h-8 text-white" strokeWidth={2} />
                <span className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Aqua Protocol
                </span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white">
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 relative">
              <div className="space-y-1 mb-8">
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = link.view === currentView;
                  return (
                    <div key={link.label} className="relative">
                      {/* Left indicator bar for active item */}
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                      )}
                      <button
                        onClick={() => handleViewChange(link.view)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all relative ${
                          isActive
                            ? 'bg-white text-black rounded-r-full'
                            : 'text-white hover:opacity-80'
                        }`}
                      >
                        <Icon size={18} fill={isActive ? "currentColor" : "none"} />
                        <span>{link.label}</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between px-4 mb-2">
                  <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                    Applications
                  </span>
                </div>
                <div className="space-y-1">
                  {applicationLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = link.view === currentView;
                    return (
                      <div key={link.label} className="relative">
                        {/* Left indicator bar for active item */}
                        {isActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                        )}
                        <button
                          onClick={() => handleViewChange(link.view)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all relative ${
                            isActive
                              ? 'bg-white text-black rounded-r-full'
                              : 'text-white hover:opacity-80'
                          }`}
                        >
                          <Icon size={18} fill={isActive ? "currentColor" : "none"} />
                          <span>{link.label}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="px-4 mb-2">
                  <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                    General
                  </span>
                </div>
                <div className="space-y-1">
                  {generalLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = link.view === currentView;
                    return (
                      <div key={link.label} className="relative">
                        {/* Left indicator bar for active item */}
                        {isActive && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                        )}
                        <button
                          onClick={() => handleViewChange(link.view)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all relative ${
                            isActive
                              ? 'bg-white text-black rounded-r-full'
                              : 'text-white hover:opacity-80'
                          }`}
                        >
                          <Icon size={18} fill={isActive ? "currentColor" : "none"} />
                          <span>{link.label}</span>
                        </button>
                      </div>
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
        <header className="h-[74px] bg-black border-b border-white/10 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
            >
              <Menu size={20} />
            </button>
            <button className="hidden lg:block p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Menu size={18} className="text-white/80" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Bell size={18} className="text-white/80" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white rounded-full"></span>
            </button>
            
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20">
              <Crown size={14} className="text-white" />
              <span className="text-xs font-medium text-white">Free</span>
            </div>

            <div className="hidden lg:block">
              <ConnectButton />
            </div>
          </div>
        </header>

        {/* Action Bar */}
        <div className="bg-black border-b border-white/10 px-4 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            <button 
              onClick={handleUpload}
              className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-white/90 text-black rounded-full font-medium text-sm transition-all"
            >
              <Upload size={16} />
              <span>Upload</span>
            </button>
            
            <button 
              onClick={handleSign}
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-full font-medium text-sm transition-all"
            >
              <FileSignature size={16} />
              <span>Sign</span>
            </button>
            
            <button 
              onClick={handleCreate}
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-full font-medium text-sm transition-all"
            >
              <Plus size={16} />
              <span>Create</span>
            </button>
            
            <button 
              onClick={handleTemplate}
              className="flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-full font-medium text-sm transition-all"
            >
              <Folder size={16} />
              <span>Template</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden bg-black">
          {currentView === 'all-files' && (
            <div className="flex-1 overflow-y-auto p-4 lg:p-8 bg-black">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                {/* Drop Zone */}
                <div className="bg-white/5 rounded-2xl border border-dashed border-white/20 p-12 lg:p-16">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                      <Folder size={32} className="text-white" fill="currentColor" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Drop files here
                    </h3>
                    <p className="text-sm text-white/60 mb-6">
                      or click to browse
                    </p>
                    
                    <button 
                      onClick={handleUpload}
                      className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-white/90 text-black rounded-full font-medium text-sm transition-all"
                    >
                      <Upload size={16} fill="currentColor" />
                      <span>Choose Files</span>
                    </button>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-teal-400/60 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                      <FileSignature className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" fill="currentColor" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      Digital Signatures
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Sign and verify documents with cryptographic attestation.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-teal-400/60 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                      <LinkIcon className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" fill="currentColor" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      Claims & Attestation
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Create and manage verifiable claims without blockchain.
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-teal-400/60 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                      <User className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" fill="currentColor" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      Identity Profile
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Manage your sovereign digital identity securely.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
          {currentView === 'templates' && <TemplatesPage />}
          {currentView === 'shared-contracts' && <SharedContractsPage />}
          {currentView === 'workflows' && <WorkflowsPage />}
          {currentView === 'claims' && <ClaimsPage />}
          {currentView === 'identity' && <IdentityPage />}
          {currentView === 'info' && <InfoPage />}
        </main>
      </div>
    </div>
  );
}