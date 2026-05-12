"use client";

// API-READY: replace mock submit with POST fetch('/api/orders') when backend is live
import React, { useState } from 'react';
import Navbar from '@/components/public/Navbar';
import { useCart } from '@/lib/cart';

const CheckoutPage = () => {
  const { items, subtotal, clearCart, isLoaded } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Congo',
    shippingMethod: 'standard',
    paymentMethod: 'card'
  });

  const shippingFees = formData.shippingMethod === 'express' ? 12000 : 5000;
  const total = subtotal + shippingFees;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email.includes('@') && formData.phone.length > 8;
  const isStep2Valid = formData.address && formData.city && formData.country;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Mock Final Submission
      const ref = `RBG-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Date.now().toString().slice(-4)}`;
      clearCart();
      window.history.pushState({}, '', `/confirmation?ref=${ref}`);
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            {/* Progress Bar */}
            <div className="flex justify-between items-center mb-16 max-w-md mx-auto">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex flex-col items-center relative flex-1">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold z-10 transition-all ${step >= s ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white' : 'bg-white border-[var(--color-border)] text-[var(--color-muted)]'}`}>
                    {s}
                  </div>
                  <span className={`text-[8px] uppercase tracking-widest font-bold mt-3 ${step >= s ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)]'}`}>
                    {s === 1 ? 'Coordonnées' : s === 2 ? 'Livraison' : 'Paiement'}
                  </span>
                  {s < 3 && (
                    <div className={`absolute left-[50%] top-4 w-full h-[1px] -z-0 ${step > s ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'}`}></div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Coordonnées */}
              <div className={`bg-white border transition-all rounded-[var(--radius-sm)] ${step === 1 ? 'border-[var(--color-accent)] p-8' : 'border-[var(--color-border)] p-6 opacity-60 pointer-events-none'}`}>
                 <div className="flex justify-between items-center mb-10">
                   <h2 className="text-sm font-bold uppercase tracking-[0.2em]">01. Coordonnées</h2>
                   {step > 1 && <button type="button" onClick={() => setStep(1)} className="text-[10px] uppercase font-bold text-[var(--color-accent)]">Modifier</button>}
                 </div>

                 {step === 1 && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Prénom</label>
                         <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="Ganda" required />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Nom</label>
                         <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="Moke" required />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Email</label>
                         <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="ganda@racine.cd" required />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Téléphone</label>
                         <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="+243 811 000 000" required />
                      </div>
                      <div className="md:col-span-2 pt-4">
                        <button type="submit" disabled={!isStep1Valid} className="btn-primary !px-12 disabled:opacity-30">Continuer</button>
                      </div>
                   </div>
                 )}
              </div>

              {/* Step 2: Livraison */}
              <div className={`bg-white border transition-all rounded-[var(--radius-sm)] ${step === 2 ? 'border-[var(--color-accent)] p-8' : 'border-[var(--color-border)] p-6 opacity-60 pointer-events-none'}`}>
                 <div className="flex justify-between items-center mb-10">
                   <h2 className="text-sm font-bold uppercase tracking-[0.2em]">02. Livraison</h2>
                   {step > 2 && <button type="button" onClick={() => setStep(2)} className="text-[10px] uppercase font-bold text-[var(--color-accent)]">Modifier</button>}
                 </div>

                 {step === 2 && (
                   <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 space-y-2">
                           <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Adresse</label>
                           <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="Avenue de l'Equateur, Gombe" required />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Ville</label>
                           <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="Kinshasa" required />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Pays</label>
                           <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-[1.125rem] border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)] appearance-none">
                              <option>Congo (RDC)</option>
                              <option>France</option>
                              <option>Côte d'Ivoire</option>
                              <option>Gabon</option>
                           </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {[
                           { id: 'standard', label: 'Standard', desc: '5-7 jours ouvrés', price: 5000 },
                           { id: 'express', label: 'Express', desc: '48 heures maximum', price: 12000 }
                         ].map(mode => (
                           <label 
                            key={mode.id}
                            className={`cursor-pointer p-6 border-2 transition-all rounded-[var(--radius-sm)] ${formData.shippingMethod === mode.id ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-[var(--color-border)] hover:border-[var(--color-accent)]/30'}`}
                           >
                             <input type="radio" name="shippingMethod" value={mode.id} checked={formData.shippingMethod === mode.id} onChange={handleInputChange} className="hidden" />
                             <div className="flex justify-between items-start">
                                <div>
                                  <span className="block text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">{mode.label}</span>
                                  <span className="block text-[10px] text-[var(--color-muted)] mt-1">{mode.desc}</span>
                                </div>
                                <span className="text-sm font-bold text-[var(--color-accent)]">{mode.price.toLocaleString('fr-FR')} FC</span>
                             </div>
                           </label>
                         ))}
                      </div>

                      <div className="pt-4">
                        <button type="submit" disabled={!isStep2Valid} className="btn-primary !px-12 disabled:opacity-30">Continuer</button>
                      </div>
                   </div>
                 )}
              </div>

              {/* Step 3: Paiement */}
              <div className={`bg-white border transition-all rounded-[var(--radius-sm)] ${step === 3 ? 'border-[var(--color-accent)] p-8' : 'border-[var(--color-border)] p-6 opacity-60 pointer-events-none'}`}>
                 <div className="flex justify-between items-center mb-10">
                   <h2 className="text-sm font-bold uppercase tracking-[0.2em]">03. Paiement</h2>
                 </div>

                 {step === 3 && (
                   <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: 'card', label: 'Carte Bancaire', icon: 'VISA' },
                          { id: 'm-money', label: 'Mobile Money', icon: 'M-PESA' },
                          { id: 'wave', label: 'Wave', icon: 'WAVE' }
                        ].map(method => (
                          <label 
                            key={method.id}
                            className={`cursor-pointer p-4 border-2 transition-all text-center rounded-[var(--radius-sm)] ${formData.paymentMethod === method.id ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5' : 'border-[var(--color-border)] hover:border-[var(--color-accent)]/30'}`}
                          >
                            <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={handleInputChange} className="hidden" />
                            <span className="block text-[10px] font-bold uppercase tracking-widest">{method.label}</span>
                          </label>
                        ))}
                      </div>

                      <div className="space-y-6">
                        {formData.paymentMethod === 'card' && (
                          <div className="space-y-4 animate-in fade-in duration-300">
                             <div className="space-y-2">
                               <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Numéro de carte</label>
                               <div className="relative">
                                  <input type="text" className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="4242 4242 4242 4242" />
                                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-2">
                                     <div className="w-8 h-5 bg-white border border-[var(--color-border)] rounded-sm"></div>
                                     <div className="w-8 h-5 bg-white border border-[var(--color-border)] rounded-sm"></div>
                                  </div>
                               </div>
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Date d'expiration</label>
                                  <input type="text" className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="MM/YY" />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">CVC</label>
                                  <input type="text" className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="123" />
                                </div>
                             </div>
                          </div>
                        )}

                        {formData.paymentMethod === 'm-money' && (
                          <div className="space-y-4 animate-in fade-in duration-300">
                             <div className="space-y-2">
                               <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Opérateur</label>
                               <select className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]">
                                  <option>M-Pesa</option>
                                  <option>Orange Money</option>
                                  <option>Airtel Money</option>
                               </select>
                             </div>
                             <div className="space-y-2">
                               <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Numéro de téléphone</label>
                               <input type="tel" className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="+243 ..." />
                             </div>
                          </div>
                        )}

                        {formData.paymentMethod === 'wave' && (
                          <div className="space-y-2 animate-in fade-in duration-300">
                             <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Numéro Wave</label>
                             <input type="tel" className="w-full px-4 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] rounded-[var(--radius-sm)]" placeholder="+243 ..." />
                          </div>
                        )}
                      </div>

                      <button type="submit" className="w-full btn-primary !py-5 uppercase tracking-[0.3em] !bg-[var(--color-accent)] !text-white shadow-lg text-xs">
                        Confirmer la commande • {total.toLocaleString('fr-FR')} FC
                      </button>
                   </div>
                 )}
              </div>
            </form>
          </div>

          {/* Right: Summary Sidebar */}
          <div className="w-full lg:w-[38%]">
            <div className="sticky top-32 space-y-8">
              <div className="bg-[var(--color-surface-2)] p-8 rounded-[var(--radius-sm)] border border-[var(--color-border)]/20">
                <h2 className="text-xs font-bold uppercase tracking-widest mb-8 pb-4 border-b border-[var(--color-border)]">Résumé de la commande</h2>
                
                <div className="space-y-6">
                  <div className="max-h-[300px] overflow-y-auto space-y-4 pr-2">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4">
                        <div className="w-12 h-16 bg-white rounded-sm flex-shrink-0 flex items-center justify-center opacity-20">
                          <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="1" /></svg>
                        </div>
                        <div className="flex-1 text-[10px]">
                          <span className="block font-bold uppercase truncate">{item.name}</span>
                          <span className="block text-[var(--color-muted)] mt-0.5">Taille: {item.size} • Qte: {item.qty}</span>
                          <span className="block font-medium mt-1">{(item.price * item.qty).toLocaleString('fr-FR')} FC</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 pt-6 border-t border-[var(--color-border)] text-xs">
                    <div className="flex justify-between">
                      <span className="text-[var(--color-muted)] font-medium">Sous-total</span>
                      <span className="font-bold">{subtotal.toLocaleString('fr-FR')} FC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--color-muted)] font-medium">Livraison</span>
                      <span className="font-bold">{shippingFees.toLocaleString('fr-FR')} FC</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-4 border-t border-[var(--color-border)]">
                      <span className="text-[10px] font-bold uppercase tracking-widest">Total</span>
                      <span className="text-xl font-light text-[var(--color-accent)]">{total.toLocaleString('fr-FR')} FC</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                 <button onClick={() => window.history.pushState({}, '', '/panier')} className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors border-b border-transparent hover:border-current">
                   Retour au panier
                 </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
