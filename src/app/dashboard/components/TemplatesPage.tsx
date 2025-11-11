"use client";

import { motion } from 'framer-motion';
import { Layout, Plus, Search, FileText } from 'lucide-react';

export default function TemplatesPage() {
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
            <h1 className="text-3xl font-bold text-white mb-2">Templates</h1>
            <p className="text-white/60">Create and manage document templates</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-white/90 text-black rounded-full font-medium text-sm transition-all">
            <Plus size={16} />
            <span>New Template</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search templates..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/40"
            />
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white/5 rounded-xl border border-teal-400/60 transition-all cursor-pointer p-6 group"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <FileText className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Template {item}</h3>
              <p className="text-sm text-white/60 mb-4">Document template for contracts and agreements</p>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <span>Last modified: 2 days ago</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

