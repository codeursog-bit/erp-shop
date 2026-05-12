"use client";

// API-READY: replace productService.getAll() with fetch('/api/products') + URLSearchParams for filters when backend is live
import React, { useState, useEffect, useMemo } from 'react';
import { productService, Product } from '@/lib/mock/products';
import ProductCard from '@/components/public/ProductCard';
import Navbar from '@/components/public/Navbar';

const CollectionsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 150000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    productService.getAll().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
        const sizeMatch = selectedSizes.length === 0 || p.variants.some(v => selectedSizes.includes(v.size));
        const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
        const stockMatch = !inStockOnly || !p.isSoldOut;
        return categoryMatch && sizeMatch && priceMatch && stockMatch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0; // Default: newest (assuming order in mock is newest)
      });
  }, [products, selectedCategories, selectedSizes, priceRange, inStockOnly, sortBy]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setPriceRange([0, 150000]);
    setInStockOnly(false);
  };

  if (loading) {
    return (
      <div className="bg-[var(--color-surface)] min-h-screen">
        <Navbar />
        <div className="pt-32 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="hidden md:block col-span-1 h-96 bg-[var(--color-surface-2)] animate-pulse rounded-[var(--radius-sm)]"></div>
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-[3/4] bg-[var(--color-surface-2)] animate-pulse rounded-[var(--radius-sm)]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 md:px-20 px-6 max-w-7xl mx-auto">
        {/* Mobile Filter Trigger */}
        <div className="md:hidden flex space-x-4 mb-8">
           <button 
            onClick={() => setIsMobileFiltersOpen(true)}
            className="flex-1 flex items-center justify-center space-x-2 py-3 bg-white border border-[var(--color-border)] text-sm font-medium rounded-[var(--radius-sm)]"
           >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
             </svg>
             <span>Filtres</span>
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block col-span-1 space-y-10 sticky top-32 h-fit">
            <div>
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">Filtrer</h3>
                  <button onClick={resetFilters} className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)]">Effacer</button>
               </div>
               
               {/* Categories */}
               <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Catégories</h4>
                  <div className="space-y-3">
                    {['Prêt-à-porter', 'Wax Prints', 'Accessoires', 'Vêtements', 'Bijoux', 'Chaussures'].map(cat => (
                      <label key={cat} className="flex items-center group cursor-pointer">
                        <div className={`w-4 h-4 border border-[var(--color-border)] rounded-[var(--radius-sm)] flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-[var(--color-primary)] border-[var(--color-primary)]' : 'group-hover:border-[var(--color-accent)]'}`}>
                          {selectedCategories.includes(cat) && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                        </div>
                        <input type="checkbox" className="hidden" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} />
                        <span className="ml-3 text-sm text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
               </div>

               {/* Tailles */}
               <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Tailles</h4>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'Unique'].map(size => (
                      <button 
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`min-w-[40px] px-2 py-2 text-[10px] font-bold border transition-all rounded-[var(--radius-sm)] ${selectedSizes.includes(size) ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white' : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)]'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
               </div>

               {/* Prix */}
               <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Prix (FCFA)</h4>
                  <div className="space-y-4">
                    <input 
                      type="range" 
                      min="0" 
                      max="150000" 
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-[var(--color-accent)] h-1 bg-[var(--color-border)] rounded-full appearance-none"
                    />
                    <div className="flex justify-between text-[10px] text-[var(--color-muted)] uppercase tracking-widest">
                       <span>0 FC</span>
                       <span>{priceRange[1].toLocaleString('fr-FR')} FC</span>
                    </div>
                  </div>
               </div>

               {/* Disponibilité */}
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">En stock</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={inStockOnly} onChange={() => setInStockOnly(!inStockOnly)} />
                    <div className="w-11 h-6 bg-[var(--color-surface-2)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-accent)]"></div>
                  </label>
               </div>
            </div>
          </aside>

          {/* Main Area */}
          <div className="col-span-3">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 pb-6 border-b border-[var(--color-border)] gap-6">
              <div className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-muted)]">
                {filteredProducts.length} produits trouvés
              </div>
              
              <div className="flex items-center space-x-8">
                {/* Sort dropdown */}
                <div className="relative group">
                   <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-xs uppercase tracking-widest font-bold pr-8 outline-none cursor-pointer"
                   >
                     <option value="newest">Nouveautés</option>
                     <option value="price-asc">Prix croissant</option>
                     <option value="price-desc">Prix décroissant</option>
                   </select>
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                   </div>
                </div>

                {/* View Toggles */}
                <div className="flex items-center space-x-3 border-l border-[var(--color-border)] pl-8">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1 transition-colors ${viewMode === 'grid' ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:text-[var(--color-accent)]'}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1 transition-colors ${viewMode === 'list' ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:text-[var(--color-accent)]'}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Content Rendering */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-[var(--color-surface-2)] rounded-full flex items-center justify-center mb-8 opacity-50">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H7" /><path d="M15 3v4" /><path d="M19 3v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Aucun produit trouvé</h3>
                <p className="text-[var(--color-muted)] text-sm mb-8">Essayez de modifier vos filtres ou de réinitialiser la recherche.</p>
                <button onClick={resetFilters} className="btn-primary">Réinitialiser les filtres</button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="flex flex-col sm:flex-row items-center border border-[var(--color-border)] p-4 rounded-[var(--radius-sm)] hover:bg-[var(--color-surface-2)] transition-colors group">
                    <div className="w-24 h-24 bg-white rounded-[var(--radius-sm)] flex-shrink-0 flex items-center justify-center overflow-hidden">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                    </div>
                    <div className="ml-0 sm:ml-6 mt-4 sm:mt-0 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-bold text-[var(--color-text)] uppercase tracking-tight">{p.name}</h4>
                          <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest mt-1">{p.category}</p>
                        </div>
                        <div className="text-sm font-bold text-[var(--color-primary)]">{p.price.toLocaleString('fr-FR')} FC</div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.variants.map(v => (
                          <span key={v.size} className="text-[9px] font-bold px-2 py-1 bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)]">{v.size}</span>
                        ))}
                        {p.isSoldOut ? (
                           <span className="badge-danger">Épuisé</span>
                        ) : (
                           <span className="badge-success">En stock</span>
                        )}
                      </div>
                    </div>
                    <button className="mt-4 sm:mt-0 sm:ml-6 btn-primary !py-2 !px-6 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Voir
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-24 border-t border-[var(--color-border)] pt-12 flex items-center justify-center space-x-6">
                <button className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                </button>
                <div className="flex items-center space-x-4">
                  {[1, 2, 3].map(page => (
                    <button key={page} className={`w-10 h-10 flex items-center justify-center text-[10px] font-bold transition-all rounded-[var(--radius-sm)] ${page === 1 ? 'bg-[var(--color-primary)] text-white' : 'hover:bg-[var(--color-surface-2)] text-[var(--color-muted)]'}`}>
                      {page < 10 ? `0${page}` : page}
                    </button>
                  ))}
                </div>
                <button className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Filters Overlay */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[200] animate-in fade-in duration-300">
           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)}></div>
           <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-[var(--radius-lg)] p-8 h-[80vh] overflow-y-auto transform transition-transform duration-500 animate-in slide-in-from-bottom flex flex-col">
              <div className="flex justify-between items-center mb-8">
                 <h2 className="text-lg font-bold uppercase tracking-widest">Filtres</h2>
                 <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                 </button>
              </div>

              <div className="flex-1 space-y-12">
                 {/* Reusing desktop logic snippets simplified */}
                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Catégories</h3>
                    <div className="grid grid-cols-2 gap-3">
                       {['Prêt-à-porter', 'Wax Prints', 'Accessoires', 'Vêtements', 'Bijoux', 'Chaussures'].map(cat => (
                         <button 
                          key={cat} 
                          onClick={() => toggleCategory(cat)}
                          className={`px-4 py-3 text-xs border rounded-[var(--radius-sm)] transition-all ${selectedCategories.includes(cat) ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'border-[var(--color-border)] text-[var(--color-muted)]'}`}
                         >
                           {cat}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Tailles</h3>
                    <div className="flex flex-wrap gap-3">
                       {['XS', 'S', 'M', 'L', 'XL', 'Unique'].map(size => (
                         <button key={size} onClick={() => toggleSize(size)} className={`w-12 h-12 flex items-center justify-center text-xs font-bold border rounded-[var(--radius-sm)] ${selectedSizes.includes(size) ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'border-[var(--color-border)] text-[var(--color-muted)]'}`}>
                           {size}
                         </button>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="sticky bottom-0 pt-8 pb-4 bg-white border-t border-[var(--color-border)] grid grid-cols-2 gap-4">
                 <button onClick={resetFilters} className="btn-ghost !border !border-[var(--color-border)] uppercase tracking-widest text-[10px]">Tout effacer</button>
                 <button onClick={() => setIsMobileFiltersOpen(false)} className="btn-primary uppercase tracking-widest text-[10px]">Afficher les résultats</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;
