"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SceneCard } from "./SceneCard";
import { scenes } from "./scenes";

const totalDuration = 30;

function formatSeconds(seconds) {
  return `${seconds.toString().padStart(2, "0")}s`;
}

export function SceneTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineTicks = useMemo(
    () =>
      Array.from({ length: totalDuration + 1 }, (_, i) => ({
        label: i % 5 === 0 ? `${i}s` : null,
        value: i
      })),
    []
  );

  return (
    <section className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-24 pt-10">
      <div className="relative overflow-hidden rounded-3xl bg-white/80 py-10 shadow-2xl backdrop-blur">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 text-center">
          <motion.h1
            className="font-display text-4xl text-gray-900 md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            30-सेकंड का इमर्शन रॉड विज्ञापन बोर्ड
          </motion.h1>
          <motion.p
            className="text-base leading-7 text-gray-600 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            विज़ुअल सीन, वॉइस-ओवर स्क्रिप्ट और मुख्य टेक्स्ट एक सुव्यवस्थित टाइमलाइन में देखें ताकि
            शूट से पहले ही आउटपुट का स्पष्ट अंदाज़ा मिल सके।
          </motion.p>
        </div>

        <div className="mt-10 flex flex-col gap-10 px-4 md:px-12">
          <div className="relative flex flex-col gap-6">
            <div className="relative h-1.5 rounded-full bg-gray-200">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-brand-500 to-orange-400"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((activeIndex + 1) / scenes.length) * 100}%`
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 flex justify-between">
                {scenes.map((scene, idx) => (
                  <button
                    key={scene.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex h-8 w-8 -translate-y-[calc(50%-3px)] items-center justify-center rounded-full border-2 border-white text-xs font-semibold shadow transition ${
                      idx === activeIndex
                        ? "bg-brand-500 text-white"
                        : "bg-white text-gray-500 hover:bg-gray-100"
                    }`}
                    aria-label={`Go to ${scene.title}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-2 text-xs text-gray-500 md:text-sm">
              {timelineTicks.map((tick) => (
                <div key={tick.value} className="relative flex flex-col items-center">
                  <span className="h-2 w-px bg-gray-300" />
                  {tick.label && <span className="mt-2">{tick.label}</span>}
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={scenes[activeIndex].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35 }}
            >
              <SceneCard
                scene={scenes[activeIndex]}
                index={activeIndex}
                isActive
                onHover={setActiveIndex}
              />
            </motion.div>
          </AnimatePresence>

          <div className="grid gap-6 md:grid-cols-2">
            {scenes.map((scene, idx) => (
              <SceneCard
                key={scene.id}
                scene={scene}
                index={idx}
                isActive={idx === activeIndex}
                onHover={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-brand-900 px-8 py-10 text-white shadow-2xl">
        <h2 className="font-display text-3xl">अंतिम फ्रेम कॉल-टू-एक्शन</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">ब्रांड नाम</p>
            <p className="mt-3 text-2xl font-semibold">Laxmi Narayan Bartan Bhandar</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">मोबाइल</p>
            <p className="mt-3 text-2xl font-semibold">8586949325</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">हाइलाइट</p>
            <p className="mt-3 text-xl font-semibold">Starting Now — सिर्फ ₹250 से!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
