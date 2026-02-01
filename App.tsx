import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  // Handle scroll for floating button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atualizado para o novo número da Gislene (DDD 15)
  const whatsappNumber = "5515991939449"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20locação%20de%20máquinas.`;

  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      <Navbar whatsappLink={whatsappLink} />
      
      <main>
        <Hero whatsappLink={whatsappLink} />
        <About />
        <Fleet whatsappLink={whatsappLink} />
        <Contact whatsappLink={whatsappLink} />
      </main>

      <Footer whatsappLink={whatsappLink} />

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group ${
          showFloatingBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Falar no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-3xl text-white"></i>
        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Falar com Gislene
        </span>
      </a>
    </div>
  );
};

export default App;