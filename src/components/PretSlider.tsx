/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PretSlider: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const SLIDES = [
    { id: 1, img: '/j-1.jpg', label: 'Heirloom Edition' },
    { id: 2, img: '/j-2.jpg', label: 'Artisanal Craft' },
    { id: 3, img: '/j-3.jpg', label: 'Philosophy' },
    { id: 4, img: '/j-4.jpg', label: 'Atelier Series' },
    { id: 5, img: '/j-1.jpg', label: 'Heritage Luxe' },
  ];

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;

    if (!track || !section) return;

    const ctx = gsap.context(() => {
      // Horizontal Scroll Logic
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-base overflow-hidden flex flex-col justify-center"
    >
      {/* --- TOP CENTER HEADING --- */}
      <div className="absolute top-12 md:top-20 left-0 w-full text-center z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[1em] text-accent block mb-4">
            Curated Selection
          </span>
          <h2 className="font-display italic text-5xl md:text-7xl text-paper/90 leading-none">
            Top Sellers
          </h2>
          <div className="h-[1px] w-24 bg-accent/30 mx-auto mt-6" />
        </motion.div>
      </div>

      {/* --- IMAGES TRACK (Adjusted Sizes) --- */}
      <div 
        ref={trackRef} 
        className="flex items-end gap-10 md:gap-16 px-[15vw] will-change-transform mt-24"
      >
        {SLIDES.map((slide, index) => (
          <div key={index} className="flex-shrink-0 group">
            {/* Image Container - Fixed & Balanced Sizes */}
            <div className={`overflow-hidden border border-paper/10 bg-paper/5 
              ${index % 2 === 0 ? 'w-[50vw] md:w-[28vw]' : 'w-[45vw] md:w-[22vw]'} 
              aspect-[3/4] shadow-xl transition-all duration-700`}
            >
              <img 
                src={slide.img} 
                alt={slide.label} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
              />
            </div>
            
            {/* Minimal Info Niche */}
            <div className="mt-6 flex flex-col gap-1">
               <span className="text-[9px] text-accent/60 font-medium tracking-widest">0{index + 1}</span>
               <p className="text-[11px] uppercase tracking-[0.4em] text-paper/40 italic">
                 {slide.label}
               </p>
            </div>
          </div>
        ))}

        {/* --- FINAL VIEW ALL CARD --- */}
        <div className="flex-shrink-0 w-[60vw] md:w-[30vw] aspect-[3/4] flex flex-col items-center justify-center border border-accent/10 bg-accent/[0.01] group cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
            <span className="font-display italic text-[15vw] text-accent uppercase">Rohaab</span>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="font-display italic text-4xl md:text-6xl text-paper/70 mb-8 leading-tight">
              View All <br /> Series
            </h3>
            <button className="flex items-center gap-4 mx-auto text-[10px] uppercase tracking-[0.4em] text-accent hover:text-paper transition-all group/btn">
              Explore <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Subtle Marquee */}
      <div className="absolute bottom-8 left-0 w-full opacity-[0.04] pointer-events-none overflow-hidden whitespace-nowrap">
        <div className="flex gap-20 animate-marquee">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-paper text-[9px] uppercase tracking-[1.5em]">The Essence of Luxury Unstitched // Spring 2026</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PretSlider;