import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Loja</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Novidades</a></li>
              <li><a href="#" className="hover:text-red-500">Camisetas</a></li>
              <li><a href="#" className="hover:text-red-500">Moletons</a></li>
              <li><a href="#" className="hover:text-red-500">Acessórios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Ajuda</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">FAQ</a></li>
              <li><a href="#" className="hover:text-red-500">Envios</a></li>
              <li><a href="#" className="hover:text-red-500">Devoluções</a></li>
              <li><a href="#" className="hover:text-red-500">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Política</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Privacidade</a></li>
              <li><a href="#" className="hover:text-red-500">Termos</a></li>
              <li><a href="#" className="hover:text-red-500">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Nossa História</a></li>
              <li><a href="#" className="hover:text-red-500">Lojas</a></li>
              <li><a href="#" className="hover:text-red-500">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© 2024 Supreme Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}