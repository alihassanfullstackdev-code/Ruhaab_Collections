import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { id: 'new-arrivals', name: 'New Arrivals', path: '/new-arrivals' },
  { id: 'unstitched', name: 'Unstitched', path: '/unstitched' },
  { id: 'ready-to-wear', name: 'Ready-to-Wear', path: '/ready-to-wear' },
  { id: 'stitched', name: 'Stitched', path: '/stitched' },
  { id: 'top-sellers', name: 'Top Sellers', path: '/top-sellers' },
  { id: 'collections', name: 'Collections', path: '/collections' },
];

interface HeaderProps {
  onMenuOpen: () => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen, cartCount }) => {
  const location = useLocation();

  return (
    /* Absolute position barqarar hai */
    <header className="absolute top-0 left-0 right-0 z-[60] pointer-events-none">
      
      {/* 1. Main Navbar: Background ko thora dark gradient diya hai taake prominent ho */}
      <div className="px-6 md:px-16 py-8 md:py-10 flex items-center justify-between pointer-events-auto 
                      bg-gradient-to-b from-base/90 to-transparent border-b border-paper/10">
        
        {/* Center: Brand Identity - Opacity barha di hai */}
        <div className="flex-[2] text-start">
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display italic text-2xl md:text-5xl font-semibold tracking-tighter cursor-pointer mix-blend-difference text-paper"
            >
              Rohaab Collections
            </motion.div>
          </Link>
        </div>

        {/* Right: Functional Icons - Inka rang thora prominent kiya hai */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-8 pointer-events-auto">
          <button className="hidden sm:block opacity-70 hover:opacity-100 transition-opacity text-paper">
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button className="relative opacity-80 hover:opacity-100 transition-opacity text-paper">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 text-[9px] font-bold bg-accent text-base rounded-full w-4.5 h-4.5 flex items-center justify-center shadow-lg"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button className="hidden md:block opacity-70 hover:opacity-100 transition-opacity text-paper">
            <User size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* 2. Sub-Header: Tabs ko thora aur dark aur clear kiya hai */}
      <nav className="hidden lg:flex justify-center gap-12 py-5 pointer-events-auto border-b border-paper/10 bg-base/40 backdrop-blur-sm">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.id}
              to={link.path}
              className={`text-[9px] uppercase font-medium tracking-[0.5em] transition-all duration-500 relative group ${
                isActive ? 'text-accent' : 'text-paper/60 hover:text-paper'
              }`}
            >
              {link.name}
              
              {/* Active underline thori moti ki hai */}
              <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-accent transition-all duration-500 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;