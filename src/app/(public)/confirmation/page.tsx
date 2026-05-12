"use client";

// API-READY: fetch('/api/orders/' + ref) to get real order details when backend is live
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/public/Navbar';

const ConfirmationPage = () => {
  const [ref, setRef] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setRef(params.get('ref') || 'RBG-XXXX-0000');
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ref);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-40 pb-20 text-center">
        {/* Animated Checkmark */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 rounded-full border-4 border-[var(--color-accent)] flex items-center justify-center relative overflow-hidden">
            <svg 
              className="w-12 h-12 text-[var(--color-accent)]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline 
                points="20 6 9 17 4 12" 
                className="animate-[draw_0.6s_ease-out_forwards]"
                style={{ strokeDasharray: 50, strokeDashoffset: 50 }}
              />
            </svg>
          </div>
        </div>

        <style>{`
          @keyframes draw {
            to { stroke-dashoffset: 0; }
          }
        `}</style>

        <h1 className="text-4xl font-medium tracking-tight text-[var(--color-primary)] mb-4">
          Commande confirmée !
        </h1>
        <p className="text-[var(--color-muted)] text-sm mb-12 max-w-md mx-auto leading-relaxed">
          Merci pour votre confiance. Votre commande a été enregistrée avec succès et est en cours de traitement par notre atelier.
        </p>

        {/* Order Ref */}
        <div className="inline-flex items-center space-x-4 bg-white border border-[var(--color-border)] px-6 py-4 rounded-[var(--radius-sm)] mb-16 group">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-muted)]">Référence :</span>
          <span className="text-sm font-bold tracking-widest text-[var(--color-accent)]">{ref}</span>
          <button 
            onClick={copyToClipboard}
            className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors p-1"
            title="Copier la référence"
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-[10px] uppercase font-bold tracking-[0.4em] text-[var(--color-muted)] mb-10 text-center">Statut de la commande</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 relative max-w-2xl mx-auto">
            {/* Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-[15px] left-0 right-0 h-[1px] bg-[var(--color-border)] -z-0"></div>
            
            {[
              { label: 'Confirmée', status: 'done', check: true },
              { label: 'En préparation', status: 'current', check: false },
              { label: 'Expédiée', status: 'upcoming', check: false },
              { label: 'Livrée', status: 'upcoming', check: false }
            ].map((step, idx) => (
              <div key={step.label} className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4 z-10 w-full md:w-auto">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${step.status === 'done' ? 'bg-[var(--color-accent)] border-[var(--color-accent)]' : step.status === 'current' ? 'bg-white border-[var(--color-accent)]' : 'bg-white border-[var(--color-border)]'}`}>
                  {step.check ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  ) : (
                    <div className={`w-2 h-2 rounded-full ${step.status === 'current' ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'}`}></div>
                  )}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-widest ${step.status === 'upcoming' ? 'text-[var(--color-muted)]' : 'text-[var(--color-primary)]'}`}>
                  {step.label}
                </span>
                {/* Vertical Line (Mobile) */}
                {idx < 3 && <div className="md:hidden absolute left-4 h-8 w-[1px] bg-[var(--color-border)] mt-8"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)] p-8 text-left mb-12 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-8 border-b border-[var(--color-border)] pb-4">Résumé des informations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-[var(--color-muted)] font-bold mb-1">Détails de livraison</span>
                <p className="text-sm font-medium leading-relaxed">
                  Ganda Moke<br />
                  Avenue de l'Equateur, Gombe<br />
                  Kinshasa, RDC
                </p>
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-[var(--color-muted)] font-bold mb-1">Livraison estimée</span>
                <p className="text-sm font-medium">Sous 5 à 7 jours ouvrés</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-[var(--color-muted)] font-bold mb-1">Mode de paiement</span>
                <p className="text-sm font-medium">Carte Bancaire • Visa **** 4242</p>
              </div>
              <div>
                <span className="block text-[8px] uppercase tracking-widest text-[var(--color-muted)] font-bold mb-1">Total payé</span>
                <p className="text-xl font-light text-[var(--color-accent)]">135 000 FC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto btn-primary !py-5 !px-12 uppercase tracking-[0.3em] text-[10px]">
            Retour à la boutique
            <svg 
              className="ml-3" 
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              onClick={() => window.history.pushState({}, '', '/collections')}
            >
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button className="w-full sm:w-auto btn-ghost !border !border-[var(--color-border)] !py-5 !px-12 uppercase tracking-[0.3em] text-[10px]">
            Suivre ma commande
          </button>
        </div>
      </main>

      <footer className="py-12 text-center text-[10px] text-[var(--color-muted)] uppercase tracking-widest border-t border-[var(--color-border)]">
        Besoin d'aide ? Contactez-nous à <a href="mailto:support@racine.cd" className="text-[var(--color-accent)] hover:underline">support@racine.cd</a>
      </footer>
    </div>
  );
};

export default ConfirmationPage;
