'use client'

import React, { useEffect, useRef, useState } from "react";

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
      <div className="relative z-10 flex flex-col items-center justify-start text-center px-2 md:px-page gap-6 pt-35 pb-16">
        <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-snug">
          Transforming Healthcare By <br /> Connecting{" "}
          <span className="text-secondary">Africa</span>
        </h1>

        <div className="flex gap-3">
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-secondary text-white text-sm font-medium tracking-wide transition hover:opacity-90"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full text-white border border-white/35 bg-white/20 text-sm font-medium tracking-wide backdrop-blur-sm transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>

        {/* Video frame */}
        <div className="w-full mt-6 p-4 rounded-3xl bg-white/10 -mx-page">
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

            {/* Mute toggle */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium border border-white/20 hover:bg-black/70 transition"
            >
              {muted ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
                  </svg>
                  Unmute
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                  Mute
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
