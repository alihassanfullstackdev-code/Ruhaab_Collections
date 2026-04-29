/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      className="group relative flex flex-col cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      data-cursor-text="Acquire"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6">
        {/* Reveal Mask Effect */}
        <motion.div 
          className="absolute inset-0 bg-base z-10"
          initial={{ y: 0 }}
          whileInView={{ y: '-100%' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        />
        
        {/* Main Image */}
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover will-change-transform"
          variants={{
            rest: { scale: 1, opacity: 1 },
            hover: { scale: 1.05, opacity: product.hoverImage ? 0 : 1 }
          }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        />

        {/* Hover Image Swap */}
        {product.hoverImage && (
          <motion.img 
            src={product.hoverImage} 
            alt={`${product.name} detail`} 
            className="absolute inset-0 h-full w-full object-cover will-change-transform opacity-0"
            variants={{
              rest: { opacity: 0, scale: 1.1 },
              hover: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          />
        )}

        {/* Minimal Tags */}
        {product.isNew && (
           <div className="absolute top-4 left-4 text-[8px] uppercase tracking-[0.2em] font-bold text-paper border border-paper/30 px-2 py-1 backdrop-blur-sm">
             New Arrival
           </div>
        )}
      </div>

      <div className="flex flex-col items-start">
        <h3 className="font-display text-xl italic font-medium text-paper group-hover:text-accent transition-colors duration-500 mb-2">
          {product.name}
        </h3>
        <div className="w-full flex justify-between items-baseline">
          <p className="text-[9px] uppercase tracking-[0.2em] text-paper/40">
            {product.category}
          </p>
          <p className="text-[10px] font-medium text-accent">
            Rs. {product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
