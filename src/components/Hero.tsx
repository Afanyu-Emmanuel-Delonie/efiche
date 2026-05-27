'use client'

import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import Button from "./Button";

function Hero() {
  const playerRef = useRef<any>(null)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(tag)

    ;(window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('yt-player', {})
    }
  }, [])

  const toggleMute = () => {
    if (!playerRef.current) return
    if (muted) {
      playerRef.current.unMute()
      playerRef.current.setVolume(80)
    } else {
      playerRef.current.mute()
    }
    setMuted(!muted)
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#1a1535" }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "var(--hero-gradient)" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-start text-center px-4 md:px-page gap-6 pt-32 md:pt-36 pb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-snug">
          Transforming Healthcare By <br /> Connecting{" "}
          <span className="text-[#2f86f8]">Africa</span>
        </h1>

        <div className="flex gap-3">
          <Button href="#contact" variant="secondary" className="px-8 py-3">Get Started</Button>
          <Button href="#solutions" variant="ghost" className="px-8 py-3">Learn More</Button>
        </div>

        {/* Video frame */}
        <div className="w-full mt-6 p-3 md:p-4 rounded-3xl bg-white/10">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                id="yt-player"
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MXYTWkjBcBw?controls=1&modestbranding=1&enablejsapi=1"
                allow=" encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

export default Hero;
