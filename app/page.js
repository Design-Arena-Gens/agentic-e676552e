import { SceneTimeline } from "@/components/SceneTimeline";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="absolute -left-10 top-1/3 h-[320px] w-[320px] rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute -right-10 top-1/2 h-[280px] w-[280px] rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <SceneTimeline />

      <footer className="pb-10 text-center text-xs text-gray-500">
        Crafted for Laxmi Narayan Bartan Bhandar • सर्दियों में भरोसा और गरमाहट
      </footer>
    </main>
  );
}
