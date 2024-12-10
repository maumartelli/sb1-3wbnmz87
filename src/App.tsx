import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Footer } from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;