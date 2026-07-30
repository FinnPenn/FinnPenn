import React, { useState, useEffect } from 'react';
import Footer from '@/components/footer';
import Menu from '@/components/ui/menu';
import { useParams, Link } from 'react-router-dom';
import type { Reference, StrapiResponse } from '../types/strapi';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@base-ui/react';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

export function ReferencesPage() {
  const [data, setData] = useState<Reference | null>(null);
  const [loading, setLoading] = useState(true);

  // Track the currently selected full-screen image URL (null = modal closed)
  const [activeFullImage, setActiveFullImage] = useState<{
    src: string;
    caption?: string;
  } | null>(null);

  // Grab the slug directly from React Router params (or fallback to pathname)
  const params = useParams<{ slug?: string }>();
  const slug = params.slug || window.location.pathname.replace(/^\//, '');

  useEffect(() => {
    async function fetchBySlug() {
      if (!slug) return;

      try {
        setLoading(true);

        const endpoint = `${STRAPI_URL}/api/references?filters[slug][$eq]=${slug}&populate=*`;
        const res = await fetch(endpoint);
        const json: StrapiResponse<Reference[]> = await res.json();

        if (json.data && json.data.length > 0) {
          setData(json.data[0]);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error('Failed to fetch page content:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchBySlug();
  }, [slug]);

  if (loading) return <div className="p-16">Loading...</div>;
  if (!data) return <div className="p-16">Page not found.</div>;

  return (
    <div className='h-[calc(100vh-64px)]'>
      <Menu/>
      <div className='grid h-full grid-cols-4'>
        <div className='p-16'>
          <a href="/" className='flex'>
            <ArrowLeft/>
            Back
          </a>
          <h1 className="font-heading text-[96px] uppercase">{data.title}</h1>
          <div className='mt-20 text-white'>
            <div className="text-md font-light">Description</div>
            <p className="text-lg font-thin">{data.description}</p>
          </div>
          <div className='mt-20 text-white'>
            <div className="text-md font-light">Tools I use</div>
            <p className="text-lg font-thin">{data.tools}</p>
          </div>
        </div>
        <div className='col-span-3 bg-card p-16 flex flex-col justify-end items-center'>
          <div className='grid grid-cols-2 gap-5'>
            {data.screens?.map((item, i) =>  {
            if (item === null) {return}
            const rawImageUrl = item.url;
            const imageUrl = rawImageUrl 
            ? (rawImageUrl.startsWith('http') ? rawImageUrl : `${STRAPI_URL}${rawImageUrl}`)
            : 'https://via.placeholder.com/723x434?text=No+Image';  
            return (
              <div key={i} className="size-full w-130 aspect-video bg-center bg-origin-content bg-cover"
                style={{ backgroundImage: `url('${imageUrl}')` }}
              >
                  <div className='size-full backdrop-blur-md overflow-hidden'>
                    <img
                      onClick={() =>
                        setActiveFullImage({
                          src: imageUrl,
                          caption: item.caption,
                        })
                      }
                      src={imageUrl}
                      alt={item.alt}
                      className="object-contain size-full transform transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                    />
                  </div>
                </div>
            )
            })}
          </div>
        </div>
      </div>
      <Footer/>
      {activeFullImage && (
      <div className="fixed inset-0 z-50 bg-[#120F17] h-screen w-screen">
  {/* Close Button */}
  <Button
    onClick={() => setActiveFullImage(null)}
    className="absolute right-16 top-16 z-50 flex cursor-pointer items-center justify-center size-25 hover:bg-transparent!"
  >
    <div>
      <div className="h-2.5 w-11 bg-foreground transform rotate-45 translate-y-1.25"></div>
      <div className="h-2.5 w-11 bg-foreground transform -rotate-45 -translate-y-1.25"></div>
    </div>
  </Button>

  {/* Lightbox Body */}
  <div className="size-full flex justify-center items-center">
    {/* 1. Relative wrapper shrink-wraps around the rendered image */}
    <div className="relative inline-block max-h-[80vh] max-w-full group">
      {/* 2. The Image */}
      <img
        src={activeFullImage.src}
        alt="Full view"
        className="block max-h-[80vh] max-w-full object-contain"
      />

      {/* 3. Overlay exactly matching the image size */}
      <div className="flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 items-end justify-center text-white bg-linear-to-b from-transparent from-10% via-transparent via-30% to-black/90 to-90%">
        <div className='mb-10'>{activeFullImage.caption}</div>
      </div>
    </div>
  </div>
</div>
      )}
    </div>
  );
}