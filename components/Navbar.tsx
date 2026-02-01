import React, { useState } from 'react';

interface NavbarProps {
  whatsappLink: string;
}

const Navbar: React.FC<NavbarProps> = ({ whatsappLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Máquinas', href: '#maquinas' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-slate-900 text-white shadow-lg border-b border-amaral-yellow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="block">
              <img 
                src="https://i.imgur.com/AEuPFPf.png" 
                alt="Amaral Locações" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-amaral-yellow font-medium transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amaral-yellow hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded font-bold transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2"
            >
              <i className="fa-solid fa-bolt"></i>
              Orçamento Rápido
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-slate-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-amaral-yellow hover:bg-slate-700 rounded-md border-b border-slate-700 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-4 bg-amaral-yellow text-slate-900 px-4 py-3 rounded font-bold"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;