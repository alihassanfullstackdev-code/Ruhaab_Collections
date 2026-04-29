/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-base text-paper border-t border-paper/5 py-48 px-8 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-y-32">
        <div className="col-span-12 lg:col-span-4">
           <div className="font-display italic text-6xl mb-16 opacity-80">ROHAAB</div>
           <p className="text-sm text-paper/40 leading-relaxed max-w-sm mb-16 font-light">
             Since 1992, curating the finest hand-embroidered heritage for the modern woman. Royal minimalism redefined.
           </p>
           <div className="flex gap-12">
              <a href="#" className="text-paper/60 hover:text-accent transition-colors"><Instagram size={20} strokeWidth={1} /></a>
              <a href="#" className="text-paper/60 hover:text-accent transition-colors"><Facebook size={20} strokeWidth={1} /></a>
           </div>
        </div>

        <div className="col-span-6 lg:col-span-2 lg:col-start-7">
           <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-12">Journal</h4>
           <div className="flex flex-col gap-8 text-xs font-light tracking-wide text-paper/60">
              <a href="#" className="hover:text-paper transition-colors">Heritage Series</a>
              <a href="#" className="hover:text-paper transition-colors">Bespoke Couture</a>
              <a href="#" className="hover:text-paper transition-colors">Art of Tilla</a>
              <a href="#" className="hover:text-paper transition-colors">Sustainability</a>
           </div>
        </div>

        <div className="col-span-6 lg:col-span-2">
           <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-12">Company</h4>
           <div className="flex flex-col gap-8 text-xs font-light tracking-wide text-paper/60">
              <a href="#" className="hover:text-paper transition-colors">Private View</a>
              <a href="#" className="hover:text-paper transition-colors">Global Ateliers</a>
              <a href="#" className="hover:text-paper transition-colors">Legal Inquiry</a>
              <a href="#" className="hover:text-paper transition-colors">Careers</a>
           </div>
        </div>

        <div className="col-span-12 lg:col-span-2">
           <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-12">Registry</h4>
           <p className="text-[10px] text-paper/40 mb-12 leading-relaxed">Join our private list for seasonal launches.</p>
           <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-paper/10 py-6 w-full text-[10px] tracking-[0.2em] focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-accent"><ArrowRight size={16} /></button>
           </div>
        </div>
      </div>

      <div className="mt-48 pt-12 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-12">
         <p className="text-[9px] uppercase tracking-[0.5em] text-paper/20">© 2025 Rohaab Collections — Royal Minimalism</p>
         <p className="text-[9px] uppercase tracking-[0.5em] text-paper/20">Design by Antigravity Ateliers</p>
      </div>
    </footer>
  );
};

export default Footer;
