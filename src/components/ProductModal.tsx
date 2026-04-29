/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Product } from '../types';
import JewelryViewer from './JewelryViewer';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAcquire: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAcquire }) => {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 overflow-hidden"
        >
           <div className="absolute inset-0 bg-base/98 backdrop-blur-xl" onClick={onClose} />
           <motion.div
             layoutId={product.id}
             className="relative w-full max-w-7xl h-full md:h-[85vh] bg-base grid grid-cols-12 overflow-hidden shadow-2xl"
           >
              <button 
                className="absolute top-8 right-8 z-[110] text-paper/60 hover:text-paper transition-colors"
                onClick={onClose}
              >
                <X size={32} strokeWidth={1} />
              </button>

              {/* Left: 3D or Detail Viewer */}
              <div className="col-span-12 lg:col-span-8 bg-paper/5 relative">
                 <JewelryViewer 
                   modelUrl={product.modelUrl} 
                   fallbackImage={product.image} 
                 />
              </div>

              {/* Right: Product Info */}
              <div className="col-span-12 lg:col-span-4 p-12 md:p-20 overflow-y-auto flex flex-col justify-center">
                 <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8">{product.category}</p>
                 <h2 className="font-display italic text-6xl md:text-8xl mb-8 leading-none">{product.name}</h2>
                 <p className="text-sm font-light leading-loose text-paper/60 mb-16 italic">
                   {product.description}
                 </p>

                 {product.fabric && (
                    <div className="mb-16">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 opacity-30">Artisanal Fabric</h4>
                      <div className="flex gap-4">
                         {product.fabric.map(f => (
                            <div key={f} className="text-[9px] uppercase tracking-widest border border-paper/10 px-4 py-2 hover:border-accent transition-colors cursor-default">
                              {f}
                            </div>
                         ))}
                      </div>
                    </div>
                 )}

                 <div className="text-4xl font-medium text-paper mb-16">Rs. {product.price.toLocaleString()}</div>
                 
                 <button 
                   onClick={() => onAcquire(product)}
                   className="w-full py-8 bg-accent text-base text-[10px] uppercase tracking-[0.6em] font-bold hover:brightness-110 transition-all active:scale-[0.98]"
                 >
                   Acquire Piece
                 </button>
              </div>
           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
