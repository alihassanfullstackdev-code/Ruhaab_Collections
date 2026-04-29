/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  fabric?: string[];
  modelUrl?: string;
  hoverImage?: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  type: 'large' | 'small' | 'wide';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
