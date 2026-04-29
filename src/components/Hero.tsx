/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

interface HeroProps {
  scrollYProgress: MotionValue<number>;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollYProgress, onExplore }) => {
  // Parallax animations
  const opacityTransform = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-base">
      <motion.div 
        style={{ opacity: opacityTransform, y }}
        className="absolute inset-0 z-0"
      >
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-base/60 via-transparent to-base/80 z-10" />
        
        {/* Cinematic Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto" // This instructs the browser to cache the video immediately
          poster="/hero.jpg" // Fallback image while video is loading from cache
          className="w-full h-full object-cover grayscale-[20%] brightness-[0.5]"
        >
          {/* Priority: WebM (Small size, high quality) */}
          <source src="/video/hero.webm" type="video/webm" />
          {/* Fallback: MP4 (Wider compatibility) */}
          <source src="/video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
      {/* Content Area */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
        >
          <h1 className="font-display italic text-6xl md:text-[160px] text-paper leading-[0.8] font-thin mb-8 opacity-95 mix-blend-difference tracking-tighter">
            ROHAAB
          </h1>
          <p className="text-[10px] text-paper/80 uppercase tracking-[0.8em] font-medium mix-blend-difference mb-12">
            Where Heritage Meets Modern Elegance
          </p>
          <button 
            onClick={onExplore}
            className="px-16 py-6 border border-paper/20 text-paper text-[10px] uppercase tracking-[0.4em] backdrop-blur-sm hover:bg-paper hover:text-base transition-all duration-1000 font-medium"
            data-hover="true"
          >
            Enter the Collections
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-paper/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;