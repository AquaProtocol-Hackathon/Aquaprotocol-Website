"use client";

import { motion } from 'framer-motion';
import { Info, Book, HelpCircle, FileText, ExternalLink } from 'lucide-react';

export default function InfoPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Information</h1>
          <p className="text-white/60">Learn more about Aqua Protocol and Aquafier</p>
        </div>

        {/* Info Cards */}
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl border border-teal-400/60 transition-all p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                <Book className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-sm text-white/60 mb-4">
                  Learn how to use Aqua Protocol for document signing, verification, and attestation.
                </p>
                <a
                  href="https://aquaprotocol.mintlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white hover:text-teal-400 hover:underline transition-colors"
                >
                  <span>View Documentation</span>
                  <ExternalLink size={14} className="group-hover:text-teal-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl border border-teal-400/60 transition-all p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                <HelpCircle className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">Help & Support</h3>
                <p className="text-sm text-white/60 mb-4">
                  Get help with common questions and issues.
                </p>
                <a
                  href="https://github.com/inblockio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white hover:text-teal-400 hover:underline transition-colors"
                >
                  <span>Visit GitHub</span>
                  <ExternalLink size={14} className="group-hover:text-teal-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl border border-teal-400/60 transition-all p-6 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                <FileText className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">About Aquafier</h3>
                <p className="text-sm text-white/60 mb-4">
                  Aquafier is a platform for signing and verifying files using Aqua Protocol.
                </p>
                <a
                  href="https://aquafier.inblock.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white hover:text-teal-400 hover:underline transition-colors"
                >
                  <span>Visit Aquafier</span>
                  <ExternalLink size={14} className="group-hover:text-teal-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

