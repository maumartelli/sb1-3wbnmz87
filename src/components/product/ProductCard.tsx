import React from 'react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.price}</p>
      </div>
    </div>
  );
}