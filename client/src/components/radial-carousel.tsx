import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'

import { Carousel, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import type { Reference, StrapiResponse } from '../types/strapi'

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const R = 800 // cylinder radius (px)
const THETA = 45 // angular step between neighbours (degrees)

const SPRING = { type: 'spring' as const, stiffness: 280, damping: 26, mass: 0.85 }

function arcStyle(offset: number) {
  const rad = (offset * THETA * Math.PI) / 180
  const abs = Math.abs(offset)

  return {
    x: R * Math.sin(rad),
    rotateY: -offset * THETA,
    scale: Math.max(0.48, 1 - abs * 0.16),
    opacity: abs > 2 ? 0 : Math.max(0.12, 1 - abs * 0.38),
    zIndex: 10 - abs
  }
}

const RadialCarousel = () => {
  const [images, setImages] = useState<Reference[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(`${STRAPI_URL}/api/references?populate=*`);
        const json: StrapiResponse<Reference[]> = await res.json();
        setImages(json.data || []);
        console.log(json.data)
      } catch (err) {
        console.error('Failed to load Images:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const total = images.length;

  const go = useCallback((dir: 1 | -1) => {
    if (total === 0) return;
    setActive(i => (i + dir + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'ArrowRight') go(1)
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [go])

  if (loading) return <div className="py-12 text-center">Loading carousel...</div>;
  if (total === 0) return <div className="py-12 text-center">No references found.</div>;

  return (
    <Carousel className='flex w-full flex-col items-center gap-8 py-8 select-none'>
      <div className='flex relative h-120 w-full justify-center'>
        {images.map((slide, i) => {
          // Shortest signed offset around the loop
          const raw = (i - active + total) % total;
          const offset = raw > total / 2 ? raw - total : raw;
          const { x, rotateY, scale, opacity, zIndex } = arcStyle(offset);

          // Helper to extract Strapi media URL safely
          // Checks if `image` or `screens` field exists on the item
          if (slide.screens === null) {return}
          const rawImageUrl = slide.screens[0].url;
          console.log(slide)
          const imageUrl = rawImageUrl 
            ? (rawImageUrl.startsWith('http') ? rawImageUrl : `${STRAPI_URL}${rawImageUrl}`)
            : 'https://via.placeholder.com/723x434?text=No+Image';

          return (
            <motion.div
              key={slide.id || i}
              className='absolute top-0 cursor-pointer'
              style={{ width: 723, height: 434, zIndex }}
              animate={{ x, rotateY, scale, opacity }}
              transition={SPRING}
              onClick={() => setActive(i)}
              aria-label={`View ${slide.title}`}
            >
              <div className='relative size-full overflow-hidden shadow-lg rounded-xl'>
                {/* Image */}
                <img 
                  src={imageUrl} 
                  alt={slide.title || 'Reference image'} 
                  className='size-full object-screens grayscale' 
                  draggable={false} 
                />

                {/* Gradient veil */}
                <div className='bg-radial from-black/70 from-40% to-black/20 absolute top-0 left-0 size-full' />

                {/* Active-only label */}
                <motion.div
                  className='absolute inset-x-0 bottom-0 w-full h-full flex flex-col justify-center items-center'
                  animate={{ opacity: offset === 0 ? 1 : 0, y: offset === 0 ? 0 : 12 }}
                  transition={{ duration: 0.28 }}
                >
                  <a href="">
                    <div className='font-heading text-foreground text-[96px] font-medium uppercase text-shadow-xl leading-none group'>
                      {slide.title}
                      <div className="bg-foreground h-2 w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </a>
                </motion.div>

                {/* Active ring */}
                <motion.div
                  className='pointer-events-none absolute inset-0 rounded-2xl border-2 border-primary/20'
                  animate={{ opacity: offset === 0 ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className='flex items-end gap-3'>
        <CarouselPrevious size={'lg'} className='static top-auto left-auto translate-y-0 cursor-pointer' onClick={() => go(-1)} disabled={false} />
        <CarouselNext size={'lg'} className='static top-auto right-auto translate-y-0 cursor-pointer' onClick={() => go(1)} disabled={false} />
      </div>
    </Carousel>
  )
}

export default RadialCarousel;