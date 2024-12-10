import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { NewsletterModal } from '../newsletter/NewsletterModal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            Coleção 2024/2025
          </h1>
          <Button 
            className="px-8 py-3 text-lg font-medium"
            onClick={() => setIsModalOpen(true)}
          >
            Cadastre-se para receber novidades
          </Button>
        </div>
      </div>
      
      <NewsletterModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}