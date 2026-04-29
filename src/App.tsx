/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScroll, AnimatePresence } from 'framer-motion';

// Components
import CustomCursor from './components/CustomCursor';
import AIChat from './components/AIChat';
import Header from './components/Header';
import Hero from './components/Hero';
import Journal from './components/Journal';
import PretSlider from './components/PretSlider';
import TopSeller from './components/TopSeller';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import MobileMenu from './components/MobileMenu';

// Pages (New Pages for Routing)
import CategoryPage from './pages/CategoryPage'; 

// Data & Types
import { Product } from './types';
import { PRODUCTS } from './data';

// --- Home Component ---
const Home: React.FC<{
  scrollYProgress: any,
  setSelectedProduct: (p: Product) => void
}> = ({ scrollYProgress, setSelectedProduct }) => (
  <>
    <Hero
      scrollYProgress={scrollYProgress}
      onExplore={() => {
        document.getElementById('ready-to-wear')?.scrollIntoView({ behavior: 'smooth' });
      }}
    />
    <section id="ready-to-wear">
      <PretSlider
        products={PRODUCTS}
        onProductClick={setSelectedProduct}
      />
    </section>
    <section id="collections">
      <Journal />
    </section>
    <section id="top-sellers">
      <TopSeller
        products={PRODUCTS}
        onProductClick={setSelectedProduct}
      />
    </section>
  </>
);

const AppContent: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);

  const { scrollYProgress } = useScroll();

  // Navigation Logic
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAcquire = (product: Product) => {
    setCartCount(prev => prev + 1);
    setSelectedProduct(null);
  };

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-base overflow-x-hidden bg-base text-paper font-sans">
      <CustomCursor />

      <Header
        onMenuOpen={() => setMobileMenuOpen(true)}
        cartCount={cartCount}
      />

      <main>
        <Routes>
          {/* 1. Main Home Route */}
          <Route path="/" element={
            <Home
              scrollYProgress={scrollYProgress}
              setSelectedProduct={setSelectedProduct}
            />
          } />

          {/* 2. Dynamic Category Routes */}
          {/* Header ke saare links (new-arrivals, unstitched, etc.) isi route mein handle honge */}
          <Route path="/:category" element={
             <CategoryPage 
               onProductClick={setSelectedProduct} 
             />
          } />

          {/* 3. Fallback for 404 (Optional) */}
          <Route path="*" element={
            <div className="h-screen flex items-center justify-center font-display italic text-2xl">
              Page Not Found
            </div>
          } />
        </Routes>
      </main>

      <Footer />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAcquire={handleAcquire}
          />
        )}
      </AnimatePresence>

      <AIChat />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;