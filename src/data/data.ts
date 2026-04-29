import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Zari Thread Unstitched',
    category: 'unstitched', // URL path se match karta hai
    price: 12500,
    image: '/j-1.jpg',
    hoverImage: '/j-2.jpg',
    description: 'Exquisite hand-woven zari work on premium cotton silk.',
    isNew: true,
    fabric: ['Cotton Silk', 'Zari Thread']
  },
  {
    id: 'p2',
    name: 'Pret Luxe Ensemble',
    category: 'ready-to-wear',
    price: 18000,
    image: '/j-2.jpg',
    hoverImage: '/j-3.jpg',
    description: 'A masterpiece of modern silhouette and traditional embroidery.',
    isNew: false
  },
  {
    id: 'p3',
    name: 'Royal Heritage Stitched',
    category: 'stitched',
    price: 24500,
    image: '/j-3.jpg',
    hoverImage: '/j-4.jpg',
    description: 'Fully stitched formal wear for royal occasions.',
    isNew: true
  },
  {
    id: 'p4',
    name: 'Summer Breeze Collection',
    category: 'new-arrivals',
    price: 9500,
    image: '/j-4.jpg',
    hoverImage: '/j-1.jpg',
    description: 'Lightweight fabric with delicate floral motifs.',
    isNew: true
  }
];