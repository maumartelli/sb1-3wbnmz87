import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta Box Logo',
    price: 'R$ 499',
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=600&h=600'
  },
  {
    id: 2,
    name: 'Moletom Hoodie',
    price: 'R$ 899',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&h=600'
  },
  {
    id: 3,
    name: 'Calça Cargo',
    price: 'R$ 799',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&h=600'
  },
  {
    id: 4,
    name: 'Jaqueta Bomber',
    price: 'R$ 1299',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&h=600'
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer">
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
      ))}
    </div>
  );
}