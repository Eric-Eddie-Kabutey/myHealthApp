// File: components/VideoCarousel.jsx
// Place ABOVE the "A High-Quality Care Experience" section in app/page.tsx

'use client';

import { useState, useRef, useEffect } from "react";
import { heroMedia } from "../app/(website)/leadership/heroMedia"; // correct path from components/ root

// Slides built from heroMedia array — fallback to index 0 if an index doesn't exist yet
const slides = [
  { src: heroMedia[0] },
  { src: heroMedia[1] ?? heroMedia[0] },
  { src: heroMedia[2] ?? heroMedia[0] },
  { src: heroMedia[3] ?? heroMedia[0] },
];

export default function VideoCarousel() {
  const [current, setCurrent]     = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Schedule auto-advance every 7s
  const schedule = (playing: boolean) => {
    clearTimeout(timerRef.current ?? undefined);
    if (playing) {
      timerRef.current = setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length);
      }, 7000);
    }
  };

  // Reload + play/pause whenever slide changes
  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.load();
    if (isPlaying) videoRef.current.play().catch(() => {});
    schedule(isPlaying);
    return () => clearTimeout(timerRef.current ?? undefined);
  }, [current]);

  // Jump to a slide
  const goTo = (idx: number) => {
    setCurrent(idx);
    setIsPlaying(true);
  };

  // Toggle play / pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    const next = !isPlaying;
    next ? videoRef.current.play().catch(() => {}) : videoRef.current.pause();
    setIsPlaying(next);
    schedule(next);
  };

  return (
    // No bottom padding — pill hangs into the next section
    <section className="w-full flex flex-col items-center pt-[3rem] pb-0 bg-white">
      <div className="w-full max-w-[1200px] px-4 relative">

        {/* ── Video ──────────────────────────────────────────────── */}
        <div
          className="relative w-full rounded-3xl overflow-hidden bg-black"
          style={{ aspectRatio: "16/8", minHeight: "280px" }}
        >
          <video
            ref={videoRef}
            key={slides[current].src}
            src={slides[current].src}
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark gradient at bottom for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Orange pagination — bottom-left on video */}
          {/* Each button wraps the dot with extra padding for easy tapping on mobile */}
          <div className="absolute bottom-4 left-4 flex items-center z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="p-2 cursor-pointer border-none bg-transparent flex items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-6 h-[8px] bg-orange-500 shadow shadow-orange-400"
                      : "w-[8px] h-[8px] bg-white/50 hover:bg-orange-300"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Play / Pause — bottom-right on video */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="absolute bottom-4 right-5 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold border-2 border-white/75 bg-white/10 backdrop-blur-sm hover:bg-white/25 transition-all duration-300 cursor-pointer"
          >
            {isPlaying ? (
              <svg width="11" height="11" viewBox="0 0 14 14" fill="currentColor">
                <rect x="2" y="1" width="4" height="12" rx="1" />
                <rect x="8" y="1" width="4" height="12" rx="1" />
              </svg>
            ) : (
              <svg width="11" height="11" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="2,1 13,7 2,13" />
              </svg>
            )}
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>

        {/* ── Pill — mobile: normal flow below video, md+: half overlapping ── */}
        <div className="w-full flex justify-center mt-4 md:-mt-[30px] relative z-20 px-2">
          <div
            className="w-full max-w-[860px] bg-white md:rounded-full rounded-2xl shadow-xl flex flex-col md:flex-row items-stretch overflow-hidden"
            style={{ border: "1px solid rgba(0,0,0,0.07)", minHeight: "60px" }}
          >
            {/* Column 1 */}
            <div className="flex flex-1 items-center gap-3 px-5 py-3">
              <div className="size-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
                  <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/>
                  <circle cx="20" cy="10" r="2"/>
                </svg>
              </div>
              <div>
                <b className="block text-sm font-bold text-gray-900 leading-[1.3]">#1 Virtual Care Brand</b>
                <span className="block text-xs text-gray-500 leading-[1.4]">Most recognised virtual care brand.*</span>
              </div>
            </div>

            {/* Divider: horizontal line on mobile, vertical on md+ */}
            <div className="md:w-px md:h-auto h-px w-full bg-gray-100 self-stretch" />

            {/* Column 2 */}
            <div className="flex flex-1 items-center gap-3 px-5 py-3">
              <div className="size-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <b className="block text-sm font-bold text-gray-900 leading-[1.3]">+90% Member Satisfaction</b>
                <span className="block text-xs text-gray-500 leading-[1.4]">Care that puts patients first, always.</span>
              </div>
            </div>

            <div className="md:w-px md:h-auto h-px w-full bg-gray-100 self-stretch" />

            {/* Column 3 */}
            <div className="flex flex-1 items-center gap-3 px-5 py-3">
              <div className="size-10 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <b className="block text-sm font-bold text-gray-900 leading-[1.3]">900,000 People Served</b>
                <span className="block text-xs text-gray-500 leading-[1.4]">Accessed care they wouldn't have otherwise.*</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer so pill doesn't get clipped by next section */}
        <div className="h-[100px]" />
      </div>
    </section>
  );
}