import { ReactNode } from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  categoryName: string;
  rating: number;
  reviewCount: number;
  discount: number;
  isPrime: boolean;
  features: string[];
  warranty?: string;
  date: string;
  featured: number; // 0-10, higher = more featured
}

export interface Category {
  id: string;
  name: string;
  icon: ReactNode;
  description?: string;
  productCount: number;
}