"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const videoSrc = "/video/presentation.mp4";
const posterSrc = "/images/entrada.webp";

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

function PauseIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5v10M13 5v10" /></svg>;
}

function PlayIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 5 8 5-8 5Z" /></svg>;
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateVideoPreference = () => {
      const savesData = (navigator as NavigatorWithConnection).connection?.saveData === true;
      setVideoEnabled(!motionPreference.matches && !savesData);
    };

    updateVideoPreference();
    motionPreference.addEventListener("change", updateVideoPreference);
    return () => motionPreference.removeEventListener("change", updateVideoPreference);
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  }

  return (
    <div className="hero-media">
      <Image className="hero-poster" src={posterSrc} alt="" fill priority sizes="100vw" />
      <video
        ref={videoRef}
        className={`hero-video${isPlaying ? " is-playing" : ""}`}
        src={videoEnabled ? videoSrc : undefined}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        aria-hidden="true"
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setVideoEnabled(false);
        }}
      />
      {videoEnabled && (
        <button className="video-control" type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pausar vídeo de fondo" : "Reanudar vídeo de fondo"} aria-pressed={!isPlaying}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
          <span>{isPlaying ? "Pausar" : "Reanudar"}</span>
        </button>
      )}
    </div>
  );
}
