"use client";

import { motion } from 'framer-motion';
import { User, Shield, Key, Edit } from 'lucide-react';

export default function IdentityPage() {
  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Identity Profile</h1>
          <p className="text-white/60">Manage your sovereign digital identity</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white/5 rounded-xl border border-teal-400/60 transition-all p-6 mb-6 group">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                <User className="w-8 h-8 text-white group-hover:text-teal-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Your Identity</h3>
                <p className="text-sm text-white/60">Sovereign digital identity profile</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-all group/btn">
              <Edit size={14} className="group-hover/btn:text-teal-400 transition-colors" />
              <span>Edit</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/10 rounded-lg group-hover:bg-teal-500/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" />
                <span className="text-sm font-medium text-white">Verification Status</span>
              </div>
              <p className="text-sm text-white/60">Verified</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg group-hover:bg-teal-500/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Key className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" />
                <span className="text-sm font-medium text-white">Identity Key</span>
              </div>
              <p className="text-sm text-white/60 font-mono">0x1234...5678</p>
            </div>
          </div>
        </div>

        {/* Identity Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl border border-teal-400/60 transition-all p-6 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
              <Shield className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">Secure Storage</h4>
            <p className="text-sm text-white/60">
              Your identity is stored securely and encrypted.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl border border-teal-400/60 transition-all p-6 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
              <Key className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">Self-Sovereign</h4>
            <p className="text-sm text-white/60">
              You control your own identity and data.
            </p>
          </div>

          <div className="bg-white/5 rounded-xl border border-teal-400/60 transition-all p-6 group">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
              <User className="w-5 h-5 text-white group-hover:text-teal-400 transition-colors" />
            </div>
            <h4 className="text-base font-semibold text-white mb-2">Privacy First</h4>
            <p className="text-sm text-white/60">
              Your identity remains private and verifiable.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

