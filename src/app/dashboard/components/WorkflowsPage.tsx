"use client";

import { motion } from 'framer-motion';
import { Workflow, Plus, Search, Play, Clock } from 'lucide-react';

export default function WorkflowsPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Aquasign Workflows</h1>
            <p className="text-white/60">Manage your document signing workflows</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-white/90 text-black rounded-full font-medium text-sm transition-all">
            <Plus size={16} />
            <span>New Workflow</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search workflows..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/40"
            />
          </div>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/5 rounded-xl border border-teal-400/60 transition-all cursor-pointer p-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <Workflow className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Workflow {item}</h3>
              <p className="text-sm text-white/60 mb-4">Multi-step document signing process</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <Clock size={14} className="group-hover:text-teal-400 transition-colors" />
                  <span>Active</span>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-all group/btn">
                  <Play size={12} className="group-hover/btn:text-teal-400 transition-colors" />
                  <span>Run</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

