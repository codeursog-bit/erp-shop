"use client";

// API-READY: fetch('/api/products') for POST or PUT when backend is live
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, ProductVariant } from '@/lib/mock/products';

interface ProductSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
}

const ProductSidebar = ({ isOpen, onClose, product }: ProductSidebarProps) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: 'Vêtements',
    description: '',
    price: 0,
    comparePrice: 0,
    images: [],
    variants: [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        name: '',
        category: 'Vêtements',
        description: '',
        price: 0,
        comparePrice: 0,
        images: [],
        variants: [{ size: 'M', color: '', stock: 0 }],
      });
    }
    setErrors({});
  }, [product, isOpen]);

  const addVariant = () => {
    setFormData((prev) => ({
      ...prev,
      variants: [...(prev.variants || []), { size: 'M', color: '', stock: 0 }],
    }));
  };

  const updateVariant = (index: number, field: keyof ProductVariant, value: string | number) => {
    const newVariants = [...(formData.variants || [])];
    newVariants[index] = { ...newVariants[index], [field]: value };
    setFormData((prev) => ({ ...prev, variants: newVariants }));
  };

  const removeVariant = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      variants: (prev.variants || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Le nom est requis';
    if (!formData.price || formData.price <= 0) newErrors.price = 'Le prix est requis';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Produit enregistré:', formData);
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[600px] bg-[var(--dash-surface-glass)] backdrop-blur-xl border-l border-[var(--dash-border)] z-[210] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="p-10 border-b border-[var(--dash-border)] flex justify-between items-center bg-[var(--dash-surface-2)]">
              <div>
                <h2 className="text-2xl font-light text-[var(--dash-text)] tracking-tight">
                  {product ? 'Détails du Produit' : 'Nouveau au Catalogue'}
                </h2>
                <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">
                  Gestion d'inventaire et merchandising
                </p>
              </div>
              <button 
                onClick={onClose}
                className="btn-dash-ghost p-3 px-3 hover:text-[var(--dash-danger)] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
              {/* Infos générales */}
              <div className="space-y-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--dash-accent)]">Spécifications Générales</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Dénomination de la Pièce</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={`dash-input ${errors.name ? 'border-[var(--dash-danger)]' : ''}`}
                      placeholder="ex: Robe Wax 'Lola' Haute Couture"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Référence (SKU)</label>
                      <input 
                        type="text" 
                        value={formData.id || 'GEN-AUTO-2024'} 
                        disabled
                        className="dash-input bg-[var(--dash-surface-2)] opacity-50 cursor-not-allowed font-mono text-[11px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Catégorie</label>
                      <div className="relative">
                         <select 
                          value={formData.category}
                          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                          className="dash-input appearance-none cursor-pointer text-[10px] font-bold uppercase tracking-widest"
                        >
                          <option>Vêtements</option>
                          <option>Accessoires</option>
                          <option>Bijoux</option>
                          <option>Chaussures</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--dash-muted)]">
                           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dash-divider"></div>

              {/* Images */}
              <div className="space-y-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--dash-accent)]">Médias & Galerie</h3>
                <div className="grid grid-cols-2 gap-4">
                   <div 
                     className="aspect-square bg-[var(--dash-surface-2)] border border-dashed border-[var(--dash-border)] rounded-[var(--radius-lg)] flex flex-col items-center justify-center text-center p-6 hover:border-[var(--dash-accent)] transition-all cursor-pointer group"
                     onDragOver={(e) => { e.preventDefault(); (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--dash-accent)'; }}
                     onDragLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--dash-border)'; }}
                   >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--dash-muted)] group-hover:text-[var(--dash-accent)] mb-3 transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                      <p className="text-[9px] uppercase font-black tracking-widest text-[var(--dash-muted)] group-hover:text-white transition-colors">Déposer ou Parcourir</p>
                      <p className="text-[8px] text-[var(--dash-muted)] mt-2 italic">PNG, JPG jusqu'à 10MB</p>
                   </div>
                   <div className="aspect-square bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-lg)] overflow-hidden relative group flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[var(--dash-muted)] opacity-20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                   </div>
                </div>
              </div>

              <div className="dash-divider"></div>

              {/* Prix */}
              <div className="space-y-6">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--dash-accent)]">Tarification</h3>
                <div className="grid grid-cols-2 gap-6 bg-[var(--dash-surface-2)]/30 p-6 rounded-[var(--radius-lg)] border border-[var(--dash-border)]">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Prix Public</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={formData.price}
                        onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
                        className="dash-input text-lg font-light pr-12 text-[var(--dash-accent)]"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-[var(--dash-muted)]">FC</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Prix Barré</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={formData.comparePrice || ''}
                        onChange={(e) => setFormData(prev => ({ ...prev, comparePrice: Number(e.target.value) }))}
                        className="dash-input text-lg font-light pr-12 opacity-40 line-through"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-[var(--dash-muted)]">FC</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dash-divider"></div>

              {/* Variantes */}
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Déclinaisons & Stocks</h3>
                  <button 
                    type="button"
                    onClick={addVariant}
                    className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-accent)] hover:underline"
                  >
                    + Nouvelle Variante
                  </button>
                </div>
                
                <div className="space-y-4">
                  {formData.variants?.map((variant, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 items-end bg-[var(--dash-surface-2)] border border-[var(--dash-border)] p-6 rounded-[var(--radius-lg)] relative group hover:border-[var(--dash-accent)]/30 transition-all">
                      <div className="space-y-2">
                        <label className="text-[8px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Taille</label>
                        <input 
                          type="text" 
                          value={variant.size}
                          onChange={(e) => updateVariant(index, 'size', e.target.value)}
                          className="dash-input py-2 text-[11px] text-center"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[8px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Couleur</label>
                        <input 
                          type="text" 
                          value={variant.color}
                          onChange={(e) => updateVariant(index, 'color', e.target.value)}
                          className="dash-input py-2 text-[11px] text-center"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[8px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Quantité</label>
                        <input 
                          type="number" 
                          value={variant.stock}
                          onChange={(e) => updateVariant(index, 'stock', Number(e.target.value))}
                          className="dash-input py-2 text-[11px] text-center"
                        />
                      </div>
                      <div className="flex justify-center h-full items-center">
                        <button 
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="btn-dash-ghost p-3 px-3 hover:text-[var(--dash-danger)] transition-all transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statut Toggle */}
              <div className="pb-10">
                <div className="flex items-center justify-between p-6 bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-lg)]">
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight">Visibilité boutique</span>
                    <span className="text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-medium">Activer la mise en vente publique</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Archivé</span>
                    <button 
                      type="button"
                      className="w-12 h-6 bg-[var(--dash-accent)] rounded-full relative transition-all shadow-inner"
                    >
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
                    </button>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white">Public</span>
                  </div>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="p-10 border-t border-[var(--dash-border)] bg-[var(--dash-surface-2)] grid grid-cols-2 gap-6">
              <button 
                type="button"
                onClick={onClose}
                className="btn-dash-ghost border-transparent hover:bg-transparent hover:text-white"
              >
                Abandonner
              </button>
              <button 
                onClick={handleSubmit}
                className="btn-dash-primary shadow-xl shadow-[var(--dash-accent-dim)]"
              >
                {product ? 'Actualiser le Produit' : 'Inscrire au Catalogue'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductSidebar;
