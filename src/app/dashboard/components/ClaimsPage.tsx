"use client";

import { motion } from 'framer-motion';
import { Link as LinkIcon, Plus, Search, CheckCircle, XCircle } from 'lucide-react';

export default function ClaimsPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Claims & Attestation</h1>
            <p className="text-white/60">Create and manage verifiable claims</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-white/90 text-black rounded-full font-medium text-sm transition-all">
            <Plus size={16} />
            <span>New Claim</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search claims..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/40"
            />
          </div>
        </div>

        {/* Claims List */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white/5 rounded-xl border border-teal-400/60 transition-all cursor-pointer p-6 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <LinkIcon className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Claim {item}</h3>
                    <p className="text-sm text-white/60 mb-3">Verifiable attestation for identity verification</p>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span>Created 3 days ago</span>
                      <span>•</span>
                      <span>Status: Verified</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

