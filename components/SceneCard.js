"use client";

import { motion } from "framer-motion";

export function SceneCard({ scene, index, isActive, onHover }) {
  return (
    <motion.article
      layout
      onHoverStart={() => onHover(index)}
      className={`relative overflow-hidden rounded-3xl p-[2px] shadow-lg transition-all duration-500 ${
        isActive ? "scale-[1.02]" : "scale-100"
      }`}
    >
      <div className={`relative rounded-[28px] ${scene.bg} px-6 py-8`}>
        <motion.span
          className="text-xs uppercase tracking-[0.4em] text-gray-500"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {scene.range}
        </motion.span>

        <motion.h3
          className="mt-3 font-display text-2xl text-gray-900 md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05 }}
        >
          {scene.title}
        </motion.h3>

        <motion.p
          className="mt-4 text-base leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
          transition={{ delay: 0.15 + index * 0.05 }}
        >
          {scene.description}
        </motion.p>

        <motion.div
          className="mt-6 rounded-2xl bg-white/70 p-4 text-sm text-gray-800 shadow-inner backdrop-blur"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: isActive ? 1 : 0.85, y: 0 }}
          transition={{ delay: 0.2 + index * 0.05 }}
        >
          <span className="font-semibold text-brand-800">वॉइस-ओवर:</span>
          <p className="mt-1 text-base leading-7">{scene.voiceover}</p>
        </motion.div>

        {isActive && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/70 shadow-[0_20px_40px_rgba(30,27,75,0.15)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </motion.article>
  );
}
