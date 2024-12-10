import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-center items-center px-4 h-16 border-b border-gray-200">
        <a href="/" className="text-2xl font-bold text-red-600">
          Supreme
        </a>
      </div>
    </header>
  );
}