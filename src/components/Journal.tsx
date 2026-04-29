/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion, Variants } from 'framer-motion';

const JOURNAL_ITEMS = [
  { id: 1, img: '/j-1.jpg', title: 'The Heirloom Canvas', desc: 'Pure cotton-silk woven with memories.' },
  { id: 2, img: '/j-2.jpg', title: 'Artisanal Heritage', desc: 'Hand-picked threads for excellence.' },
  { id: 3, img: '/j-4.jpg', title: 'The Atelier Process', desc: 'Refining raw into royal stitches.' },
  { id: 4, img: '/j-3.jpg', title: 'Velvet Noir', desc: 'Deep textures for winter elegance.' },
  { id: 5, img: '/j-1.jpg', title: 'Zari Work', desc: 'Traditional gold thread embroidery.' },
  { id: 6, img: '/j-2.jpg', title: 'Royal Chiffon', desc: 'Lightweight elegance for evening wear.' },
];

const Journal: React.FC = () => {
  // Animation Variants for the Container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har item ke darmiyan gap
      },
    },
  };

  // Animation Variants for each Item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.19, 1, 0.22, 1] as any // Cast to any to satisfy Framer Motion's strict Easing type
      }
    },
  };

  return (
    <section id="collections" className="py-24 bg-base overflow-hidden">
      {/* Header with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="px-6 md:px-16 mb-24 max-w-[1400px] mx-auto text-center"
      >
        <h2 className="font-display italic text-5xl md:text-7xl text-accent mb-4">
          New Arrival — 2026
        </h2>
        {/* <p className="text-[10px] uppercase tracking-[0.5em] text-accent"></p> */}
      </motion.div>

      {/* Grid with Staggered Entrance */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20"
        >
          {JOURNAL_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col group"
            >
              {/* Image Container with Reveal Animation */}
              <div className="relative aspect-[4/5] overflow-hidden bg-paper/5 border border-paper/5 mb-6">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
                  />
                </motion.div>

                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-base/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Text Animation */}
              <div className="px-2">
                <span className="text-[8px] uppercase tracking-[0.3em] text-paper/30 mb-2 block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Series 0{item.id}
                  </motion.span>
                </span>

                <h3 className="font-display italic text-2xl text-paper mb-2 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-[11px] font-light text-paper/50 leading-relaxed italic line-clamp-2 border-l border-paper/10 pl-4 group-hover:border-accent transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Journal;