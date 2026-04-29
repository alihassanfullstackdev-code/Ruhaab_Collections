/**
 * src/pages/CategoryPage.tsx
*/
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const CategoryPage: React.FC = () => {
  const { category } = useParams();

  // URL slug ko category name se match karein
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => product.category === category);
  }, [category]);

  return (
    <div className="pt-60 px-6 md:px-24 pb-20 min-h-screen bg-base">
      <h1 className="font-display italic text-5xl md:text-8xl text-paper mb-20 capitalize">
        {category?.replace('-', ' ')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => {/* Open Modal */}} 
          />
        ))}
        
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-paper/30 italic py-20">
            No articles found in this collection yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;