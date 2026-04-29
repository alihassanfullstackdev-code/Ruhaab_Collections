/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Product } from './types';

export const PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Sultan Tilla Kurta', 
    category: 'The Heirloom Series', 
    price: 38500, 
    image: 'https://images.unsplash.com/photo-1583391733975-430932da9f93?q=80&w=1000&auto=format&fit=crop', 
    hoverImage: 'https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Deep maroon lawn kurta featuring signature antique gold tilla work along the neckline and cuffs. A tribute to royal Mughal artistry.',
    isNew: true,
    fabric: ['Premium Lawn', 'Silk Resham'],
    modelUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/gem/model.gltf'
  },
  { 
    id: '2', 
    name: 'Noor Jahan Peshwas', 
    category: 'Bridal Couture', 
    price: 125000, 
    image: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?q=80&w=1000&auto=format&fit=crop', 
    hoverImage: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
    description: 'A 12-kali kalidar peshwas in pure silk, hand-embroidered with sitara and badla work. Timeless elegance reimagined for the modern bride.'
  },
  { 
    id: '3', 
    name: 'Zari Organza Wrap', 
    category: 'Pret Luxe', 
    price: 24500, 
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop', 
    hoverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    description: 'Sheer organza wrap with delicate resham floral motifs. Effortless, ethereal, and quintessentially Rohaab.'
  },
  { 
    id: '4', 
    name: 'Mehtab Velvet Set', 
    category: 'Winter Heritage', 
    price: 65000, 
    image: 'https://images.unsplash.com/photo-1617142108319-66c7ab469f41?q=80&w=1000&auto=format&fit=crop', 
    hoverImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop',
    description: 'Silk velvet kurta in obsidian black with hand-placed silver embellishments. The pinnacle of winter luxury.',
    isNew: true,
    modelUrl: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/diamond/model.gltf'
  }
];
