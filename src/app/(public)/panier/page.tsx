"use client";

// API-READY: cart submit will POST to /api/orders when backend is live
import React, { useState } from 'react';
import Navbar from '@/components/public/Navbar';
import { useCart } from '@/lib/cart';

const CartPage = () => {
  const { items, removeItem, updateQty, subtotal, isLoaded } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const shippingFees = subtotal > 50000 || subtotal === 0 ? 0 : 5000;
  const total = subtotal + shippingFees;

  if (!isLoaded) return null;

  if (items.length === 0) {
    return (
      <div className="bg-[var(--color-surface)] min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 pt-40 pb-20 flex flex-col items-center justify-center text-center">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-10 opacity-40">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <h1 className="text-3xl font-medium mb-4">Votre panier est vide</h1>
          <p className="text-[var(--color-muted)] max-w-sm mb-10 leading-relaxed">
            Il semble que vous n'ayez pas encore ajouté d'articles à votre panier. Parcourez nos collections pour trouver votre prochaine pièce unique.
          </p>
          <button 
            onClick={() => window.history.pushState({}, '', '/collections')}
            className="btn-primary uppercase tracking-[0.3em] !px-12"
          >
            Découvrir nos collections
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-surface)] min-h-screen font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Cart Items */}
          <div className="flex-1">
            <div className="flex items-end space-x-4 mb-12 border-b border-[var(--color-border)] pb-6">
              <h1 className="text-3xl font-medium tracking-tight">Mon Panier</h1>
              <span className="text-[var(--color-muted)] text-sm pb-1">({items.length} articles)</span>
            </div>

            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center space-x-6 py-8 border-b border-[var(--color-border)] last:border-0 group">
                  <div className="w-24 h-32 bg-[var(--color-surface-2)] rounded-[var(--radius-sm)] flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[var(--color-muted)] opacity-20">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight mb-2">{item.name}</h4>
                      <div className="flex items-center space-x-4 text-[10px] text-[var(--color-muted)] uppercase tracking-widest font-medium">
                        <span>Taille: <span className="text-[var(--color-text)]">{item.size}</span></span>
                        <div className="w-1 h-1 rounded-full bg-[var(--color-border)]"></div>
                        <span>Couleur: <span className="text-[var(--color-text)]">{item.color}</span></span>
                      </div>
                      <div className="mt-4 text-sm font-light text-[var(--color-accent)]">
                        {item.price.toLocaleString('fr-FR')} FC
                      </div>
                    </div>

                    <div className="flex items-center space-x-8">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[var(--color-border)] rounded-[var(--radius-sm)] overflow-hidden bg-white">
                        <button 
                          onClick={() => updateQty(item.id, item.size, item.color, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-surface-2)] transition-colors"
                        >-</button>
                        <span className="w-8 text-center text-xs font-bold">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, item.size, item.color, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[var(--color-surface-2)] transition-colors"
                        >+</button>
                      </div>

                      <div className="text-sm font-bold tracking-tight min-w-[100px] text-right">
                        {(item.price * item.qty).toLocaleString('fr-FR')} FC
                      </div>

                      <button 
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="text-[var(--color-muted)] hover:text-red-500 transition-colors p-2"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Summary */}
          <div className="w-full lg:w-[38%]">
            <div className="sticky top-32 bg-[var(--color-surface-2)] p-8 rounded-[var(--radius-sm)] border border-[var(--color-border)]/10 shadow-sm">
              <h2 className="text-xl font-bold uppercase tracking-widest border-b border-[var(--color-border)] pb-6 mb-8">Résumé</h2>
              
              <div className="space-y-6">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-[var(--color-muted)] uppercase tracking-widest text-[10px]">Sous-total</span>
                  <span>{subtotal.toLocaleString('fr-FR')} FC</span>
                </div>
                
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-[var(--color-muted)] uppercase tracking-widest text-[10px]">Livraison</span>
                  <span>{shippingFees === 0 ? 'Gratuite' : `${shippingFees.toLocaleString('fr-FR')} FC`}</span>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]">
                   <div className="flex items-center gap-3">
                      <input 
                        type="text" 
                        placeholder="Code promo" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-white border border-[var(--color-border)] px-4 py-3 text-xs uppercase tracking-widest outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]"
                      />
                      <button className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-accent)] hover:underline">Appliquer</button>
                   </div>
                </div>

                <div className="pt-6 flex justify-between items-baseline">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Total</span>
                   <span className="text-2xl font-light text-[var(--color-accent)]">{total.toLocaleString('fr-FR')} FC</span>
                </div>

                <button 
                  onClick={() => window.history.pushState({}, '', '/checkout')}
                  className="w-full btn-primary !py-5 uppercase tracking-[0.3em] shadow-md !bg-[var(--color-primary)] mt-4"
                >
                  Passer la commande
                </button>

                <div className="text-center pt-4">
                  <button 
                    onClick={() => window.history.pushState({}, '', '/collections')}
                    className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors border-b border-transparent hover:border-current"
                  >
                    Continuer les achats
                  </button>
                </div>

                {/* Trust Section */}
                <div className="pt-10 flex flex-col items-center">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-[var(--color-muted)] mb-6">Paiement sécurisé par</span>
                  <div className="flex items-center space-x-6 opacity-40">
                    {/* Simplified SVG icons for payment providers */}
                    <svg width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                    <svg width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="12" r="5" /><circle cx="16" cy="12" r="5" /></svg>
                    <svg width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M16.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
