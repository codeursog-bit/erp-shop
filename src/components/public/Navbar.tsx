"use client";

// API-READY: replace cart count with fetch('/api/cart/count') when backend is live
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem('racine_cart') || '[]');
      setCartCount(cart.length);
    };

    updateCount();
    window.addEventListener('cart-updated', updateCount);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('cart-updated', updateCount);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-[var(--color-border)] py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[var(--color-text)]"
          onClick={() => setIsMenuOpen(true)}
          id="mobile-menu-open"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-10">
          <a 
            href="/" 
            className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); }}
          >
            Accueil
          </a>
          <a 
            href="/collections" 
            className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/collections'); }}
          >
            Collections
          </a>
          <a 
            href="#" 
            className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
          >
            Showroom
          </a>
          <a 
            href="#" 
            className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
          >
            Notre histoire
          </a>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold tracking-[0.3em] text-[var(--color-primary)] uppercase leading-none">
            RACINE
          </h1>
          <span className="text-[10px] text-[var(--color-accent)] uppercase tracking-widest mt-1">
            by Ganda
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          
          <button 
            onClick={() => window.history.pushState({}, '', '/panier')}
            className="relative text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-[var(--color-accent)] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[200] flex flex-col p-10 animate-in fade-in duration-300">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} id="mobile-menu-close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {['Collections', 'Showroom', 'Notre histoire', 'Contact'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-2xl uppercase tracking-[0.3em] font-light text-[var(--color-text)] hover:text-[var(--color-accent)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="text-center text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            Kinshasa · Paris · Pointe-Noire
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
