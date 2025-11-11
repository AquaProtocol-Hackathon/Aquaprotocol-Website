"use client";

import { motion } from 'framer-motion';
import { Share2, Search, FileText, Users } from 'lucide-react';

export default function SharedContractsPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Shared Contracts</h1>
            <p className="text-white/60">Contracts shared with you or by you</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search shared contracts..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/40"
            />
          </div>
        </div>

        {/* Shared Contracts List */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white/5 rounded-xl border border-teal-400/60 transition-all cursor-pointer p-6 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <FileText className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Contract {item}</h3>
                    <p className="text-sm text-white/60 mb-3">Shared document for review and signing</p>
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <div className="flex items-center gap-1">
                        <Users size={14} className="group-hover:text-teal-400 transition-colors" />
                        <span>3 participants</span>
                      </div>
                      <span>Shared 5 days ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">Pending</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

