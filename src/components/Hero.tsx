import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=2000&h=1000"
        alt="Supreme Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Coleção Outono/Inverno 2024
          </h1>
          <button className="bg-red-600 text-white px-8 py-3 text-lg font-medium hover:bg-red-700 transition-colors">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}