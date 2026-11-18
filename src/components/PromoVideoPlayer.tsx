"use client";

import { useRef, useState } from "react";

type PromoVideoPlayerProps = {
  src: string;
  poster?: string;
};

export function PromoVideoPlayer({ src, poster }: PromoVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastNonZeroVolumeRef = useRef(0.75);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);

  const effectivePercent = isMuted ? 0 : Math.round(volume * 100);

  const handleLoadedMetadata = () => {
    const el = videoRef.current;
    if (!el) return;
    el.volume = volume;
    el.muted = isMuted;
  };

  const handleVideoVolumeChange = () => {
    const el = videoRef.current;
    if (!el) return;
    setVolume(el.volume);
    setIsMuted(el.muted || el.volume === 0);
    if (el.volume > 0) {
      lastNonZeroVolumeRef.current = el.volume;
    }
  };

  const toggleMute = () => {
    const el = videoRef.current;
    const nextMuted = !isMuted;
    if (!nextMuted && volume === 0) {
      const restored = lastNonZeroVolumeRef.current || 0.75;
      setVolume(restored);
      setIsMuted(false);
      if (el) {
        el.volume = restored;
        el.muted = false;
      }
      return;
    }
    setIsMuted(nextMuted);
    if (el) {
      el.muted = nextMuted;
    }
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextVolume = Number(event.target.value) / 100;
    const nextMuted = nextVolume === 0;
    if (nextVolume > 0) {
      lastNonZeroVolumeRef.current = nextVolume;
    }
    setVolume(nextVolume);
    setIsMuted(nextMuted);
    const el = videoRef.current;
    if (el) {
      el.volume = nextVolume;
      el.muted = nextMuted;
    }
  };

  return (
    <div
      className="mx-auto mt-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-sm"
      style={{ maxWidth: "min(100%, 45rem, calc(62vh * 16 / 9))" }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onVolumeChange={handleVideoVolumeChange}
        className="block aspect-video w-full bg-slate-950"
      >
        お使いのブラウザは動画再生に対応していません。
      </video>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-900 px-4 py-2.5 text-xs text-slate-200">
        <button
          id="promo-video-mute-toggle"
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "音声をオンにする" : "音声をミュートにする"}
          className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 font-semibold text-slate-100 transition-colors hover:border-sky-400 hover:text-sky-300"
        >
          {isMuted ? (
            <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M23 9l-6 6M17 9l6 6" />
            </svg>
          ) : (
            <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
            </svg>
          )}
          <span>{isMuted ? "スピーカー OFF（ミュート中）" : "スピーカー ON"}</span>
        </button>

        <div className="flex flex-1 items-center justify-end gap-2.5 sm:max-w-xs">
          <label htmlFor="promo-video-volume-slider" className="whitespace-nowrap text-slate-400">
            音量
          </label>
          <input
            id="promo-video-volume-slider"
            type="range"
            min={0}
            max={100}
            step={1}
            value={effectivePercent}
            onChange={handleSliderChange}
            aria-label="動画の音量調整"
            className="h-1.5 w-28 cursor-pointer accent-sky-400 sm:w-36"
          />
          <span className="w-9 text-right font-mono tabular-nums text-slate-200">{effectivePercent}%</span>
        </div>
      </div>
    </div>
  );
}
