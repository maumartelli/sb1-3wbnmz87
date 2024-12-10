import React from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center px-4 h-16 border-b border-gray-200">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu size={24} />
        </button>
        
        <a href="/" className="text-2xl font-bold text-red-600">
          Supreme
        </a>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Search size={24} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ShoppingBag size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}