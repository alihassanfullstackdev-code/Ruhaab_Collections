/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const EditorialGallery: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Parallax movement
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const editorialData = [
    { 
      id: 1, 
      img: '/j-2.jpg', 
      video: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-golden-silk-fabric-28100-large.mp4', 
      title: 'Artisan' 
    },
    { 
      id: 2, 
      img: '/j-1.jpg', 
      video: 'https://assets.mixkit.co/videos/preview/mixkit-white-silk-fabric-flowing-in-the-air-42644-large.mp4', 
      title: 'Heritage' 
    }
  ];

  return (
    <section className="relative min-h-screen bg-base py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        
        {/* Section Heading */}
        <div className="mb-40 md:mb-60">
          <span className="text-[10px] uppercase tracking-[1em] text-accent block mb-6">Volume II</span>
          <h2 className="font-display italic text-6xl md:text-[10vw] text-paper/90 leading-[0.8] mix-blend-difference">
            Defined by <br /> <span className="ml-[10vw]">Detail.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-12 gap-8">
          
          {/* Main Large Item */}
          <motion.div 
            style={{ y: y1 }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="col-span-12 md:col-span-7 aspect-[3/4] relative z-10 group"
          >
            <div className="w-full h-full overflow-hidden border border-paper/10 bg-paper/5 relative cursor-none">
              <img 
                src={editorialData[0].img} 
                className={`w-full h-full object-cover transition-opacity duration-1000 ${hoveredIndex === 1 ? 'opacity-0' : 'opacity-100'}`} 
                alt="Editorial 1"
              />
              
              <AnimatePresence>
                {hoveredIndex === 1 && (
                  <motion.video
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={editorialData[0].video} type="video/mp4" />
                  </motion.video>
                )}
              </AnimatePresence>
              
              {/* Custom floating cursor for luxury feel */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30">
                 <div className="px-6 py-3 bg-paper/10 backdrop-blur-md border border-paper/20 rounded-full text-paper text-[9px] uppercase tracking-widest">
                    Observe Texture
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Item */}
          <motion.div 
            style={{ y: y2 }}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="col-span-8 md:col-span-4 md:col-start-9 mt-[-10%] md:mt-40 relative z-20 group"
          >
            <div className="w-full aspect-[4/5] overflow-hidden border border-paper/10 bg-paper/5 shadow-2xl relative">
              <img 
                src={editorialData[1].img} 
                className={`w-full h-full object-cover transition-opacity duration-1000 ${hoveredIndex === 2 ? 'opacity-0' : 'opacity-100'}`} 
                alt="Editorial 2"
              />
              
              <AnimatePresence>
                {hoveredIndex === 2 && (
                  <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={editorialData[1].video} type="video/mp4" />
                  </motion.video>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8">
              <h4 className="text-paper text-[11px] uppercase tracking-[0.4em] mb-4 italic">The Heritage Stitch</h4>
              <p className="text-paper/40 text-[13px] font-light leading-relaxed max-w-[250px]">
                Watch the fabric respond to movement. Every thread is placed with purpose.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Big Background Branding */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center opacity-[0.02] pointer-events-none -mb-20">
          <h3 className="font-display italic text-[40vw] text-paper leading-none">R</h3>
        </div>

      </div>
    </section>
  );
};

export default EditorialGallery;