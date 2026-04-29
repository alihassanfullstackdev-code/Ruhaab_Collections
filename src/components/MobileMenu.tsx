/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = ['Collections', 'Unstitched', 'Ready-to-Wear', 'The Stitch', 'Ateliers'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-base/95 backdrop-blur-3xl"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 150 }}
            className="fixed inset-y-0 left-0 z-[80] w-screen md:w-[600px] flex flex-col p-12 md:p-24 justify-center bg-base"
          >
            <button 
              className="absolute top-12 right-12 text-paper hover:rotate-90 transition-transform duration-500"
              onClick={onClose}
            >
              <X size={48} strokeWidth={1} />
            </button>

            <div className="flex flex-col gap-12">
              {menuItems.map((item) => (
                 <motion.button
                   key={item}
                   whileHover={{ x: 30 }}
                   onClick={() => onNavigate(item.toLowerCase().replace(/\s+/g, '-'))}
                   className="text-left font-display italic text-5xl md:text-8xl text-paper/40 hover:text-paper transition-all duration-700 group"
                 >
                   {item}
                 </motion.button>
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-paper/10 grid grid-cols-2 gap-12">
               <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6">Concierge</h4>
                  <p className="text-xs text-paper/40">+01 (900) ROHAAB</p>
               </div>
               <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-6">Inquiry</h4>
                  <p className="text-xs text-paper/40">ateliers@rohaab.com</p>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
