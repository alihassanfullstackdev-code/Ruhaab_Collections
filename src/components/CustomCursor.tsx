/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('Explore');
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.2 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[data-hover="true"]');
      
      const productCard = target.closest('[data-cursor-text]');
      if (productCard) {
        setCursorText(productCard.getAttribute('data-cursor-text') || 'Explore');
      } else {
        setCursorText('Explore');
      }

      setIsHovering(!!clickable || !!productCard);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center hidden md:flex will-change-transform"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="relative rounded-full border border-paper/20 flex items-center justify-center"
        style={{ width: 12, height: 12 }}
        animate={{
          scale: isHovering ? 8 : 1, 
          backgroundColor: isHovering ? 'rgba(245, 245, 240, 0.1)' : 'rgba(184, 134, 11, 0.5)',
          borderColor: isHovering ? 'rgba(184, 134, 11, 0.4)' : 'rgba(245, 245, 240, 0.2)',
          backdropFilter: isHovering ? 'blur(4px)' : 'blur(0px)',
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        <motion.span 
          className="z-10 text-[10px] font-display italic text-accent overflow-hidden whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 0.18 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {cursorText}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;