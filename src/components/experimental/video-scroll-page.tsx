import React, { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function RockstarStyleBoundedScroller() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const scrollData = { progress: 0, currentProgress: 0 };

    const initVideoScroll = () => {
      const videoDuration = video.duration;

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${window.innerHeight * 0.50}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        onUpdate: (self) => {
          scrollData.progress = self.progress; 
        }
      });

      const updateLoop = () => {
        // Smoothly slide the current progress toward the scroll target
        scrollData.currentProgress += (scrollData.progress - scrollData.currentProgress) * 0.12;

        const targetTime = scrollData.currentProgress * videoDuration;

        if (Math.abs(video.currentTime - targetTime) > 0.01) {
          video.currentTime = targetTime;
        }

        requestAnimationFrame(updateLoop);
      };

      const animationId = requestAnimationFrame(updateLoop);

      return () => {
        cancelAnimationFrame(animationId);
        trigger.kill();
      };
    };

    if (video.readyState >= 2) {
      initVideoScroll();
    } else {
      video.addEventListener('loadedmetadata', initVideoScroll);
    }

    return () => {
      video.removeEventListener('loadedmetadata', initVideoScroll);
    };
  }, []);

  return (
    /* 1. Trigger container: Still locks full-screen so we have a reliable pin point */
    <div 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        padding: '160px',
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center start' // Centers the smaller video box on the screen
      }}
    >
      {/* 2. Bounded Video Box: Reduced to mimic Rockstar's dimensions (e.g., 55vw wide, aspect ratio scaled) */}
      <div style={{
        position: 'relative',
        width: '35vw',               // 45% of the screen width
        aspectRatio: '1 / 1',        // Forces a perfect, responsive square
        borderRadius: '4px',         // Subtle rounding typical of the Rockstar UI
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      }}>
        <video
          ref={videoRef}
          src="src/assets/video/Cal_Hampton_Video_Clip_fixed.mp4" 
          preload="auto"
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div>
        <div style={{ height: '10px', color: '#fff', display: 'grid', placeItems: 'center' }}>
          <h1 style={{ fontFamily: 'sans-serif' }}>Scroll down to see the video</h1>
        </div>

        <RockstarStyleBoundedScroller />

        <div style={{ height: '10px', color: '#fff', display: 'grid', placeItems: 'center' }}>
          <h1 style={{ fontFamily: 'sans-serif' }}>End of Content</h1>
        </div>
      </div>
    </ReactLenis>
  );
}