"use client";

// API-READY: fetch('/api/finances/transactions') for POST when backend is live
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TransactionType, TransactionStatus } from '@/lib/mock/finances';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (transaction: any) => void;
}

const TransactionModal = ({ isOpen, onClose, onAdd }: TransactionModalProps) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    label: '',
    type: 'income' as TransactionType,
    category: 'Ventes en ligne',
    amount: 0,
    status: 'paid' as TransactionStatus,
  });

  const categories = {
    income: ["Ventes en ligne", "Ventes Boutique Kin", "Commande Spéciale", "Partenariat"],
    expense: ["Achat Wax", "Loyer Atelier", "Salaires", "Transport", "Marketing Social"]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.label || formData.amount <= 0) return;
    onAdd({
      id: `tx_${Date.now()}`,
      ...formData
    });
    setFormData({
      date: new Date().toISOString().split('T')[0],
      label: '',
      type: 'income' as TransactionType,
      category: 'Ventes en ligne',
      amount: 0,
      status: 'paid' as TransactionStatus,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200]"
          />
          <div className="fixed inset-0 flex items-center justify-center p-6 z-[210] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="w-full max-w-lg bg-[var(--dash-surface-glass)] border border-[var(--dash-border)] rounded-[var(--radius-lg)] shadow-[0_50px_100px_rgba(0,0,0,0.8)] pointer-events-auto overflow-hidden"
            >
              <div className="p-8 border-b border-[var(--dash-border)] flex justify-between items-center bg-[var(--dash-surface-2)]">
                <div>
                   <h2 className="text-xl font-light text-[var(--dash-text)] tracking-tight">
                     Nouvelle écriture comptable
                   </h2>
                   <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-bold mt-1">Saisie manuelle de flux de trésorerie</p>
                </div>
                <button 
                  onClick={onClose}
                  className="btn-dash-ghost p-2 px-2 hover:text-[var(--dash-danger)]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-10 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Nature du Flux</label>
                    <div className="flex p-1.5 bg-[var(--dash-surface-3)] rounded-[var(--radius-md)] border border-[var(--dash-border)]">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'income', category: categories.income[0] })}
                        className={`flex-1 py-3 text-[10px] font-bold uppercase rounded-[var(--radius-sm)] transition-all ${formData.type === 'income' ? 'bg-[var(--dash-accent)] text-black shadow-lg' : 'text-[var(--dash-muted)] hover:text-white'}`}
                      >
                        Encaissement
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: 'expense', category: categories.expense[0] })}
                        className={`flex-1 py-3 text-[10px] font-bold uppercase rounded-[var(--radius-sm)] transition-all ${formData.type === 'expense' ? 'bg-[var(--dash-danger)] text-white shadow-lg' : 'text-[var(--dash-muted)] hover:text-white'}`}
                      >
                        Décaissement
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Date d'opération</label>
                    <input 
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="dash-input"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Libellé de la transaction (Description)</label>
                  <input 
                    type="text"
                    value={formData.label}
                    onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                    placeholder="ex: Règlement Commande Haute Couture #2024-001"
                    className="dash-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Classification</label>
                    <div className="relative">
                       <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="dash-input appearance-none"
                      >
                        {categories[formData.type].map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--dash-muted)]">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">État de validation</label>
                    <div className="relative">
                       <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as TransactionStatus })}
                        className="dash-input appearance-none"
                      >
                        <option value="paid">Payé / Validé</option>
                        <option value="pending">En attente / Provision</option>
                        <option value="cancelled">Annulé / Erreur</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--dash-muted)]">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Valeur Nominale (FC)</label>
                  <div className="relative">
                     <input 
                      type="number"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                      className="w-full bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-md)] p-6 text-3xl font-light text-[var(--dash-accent)] outline-none focus:border-[var(--dash-accent)] transition-all pr-20"
                    />
                    <span className="absolute right-8 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--dash-muted)]">FC</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-dash-ghost border-transparent hover:bg-transparent hover:text-white"
                  >
                    Abandonner
                  </button>
                  <button
                    type="submit"
                    className="btn-dash-primary shadow-xl shadow-[var(--dash-accent-dim)]"
                  >
                    Valider l'opération
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TransactionModal;
