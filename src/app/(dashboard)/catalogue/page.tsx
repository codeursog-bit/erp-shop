"use client";

// API-READY: fetch('/api/products') for GET, POST, PUT, DELETE when backend is live
import React, { useState, useEffect, useMemo } from 'react';
import { productService, Product } from '@/lib/mock/products';
import ProductSidebar from '@/components/dashboard/ProductSidebar';

const CataloguePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'table' | 'grid'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getAll();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ['Toutes', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Toutes' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsSidebarOpen(true);
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setIsSidebarOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Souhaitez-vous retirer cette pièce du catalogue ?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="space-y-10 animate-pulse p-8">
        <div className="h-10 bg-[var(--dash-surface-2)] rounded-[var(--radius-md)] w-64"></div>
        <div className="h-16 bg-[var(--dash-surface-2)] rounded-[var(--radius-md)] w-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="h-72 dash-card opacity-50"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--dash-border)] pb-8">
        <div>
          <h1 className="text-3xl font-light tracking-tight text-[var(--dash-text)]">Catalogue & Collection</h1>
          <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">
            Gestion des pièces de prestige et du stock commercial
          </p>
        </div>
        <button 
          onClick={handleAdd}
          className="btn-dash-primary flex items-center space-x-3 px-8 shadow-lg shadow-[var(--dash-accent-dim)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          <span>Nouvelle Pièce</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all border ${
                selectedCategory === cat
                  ? 'bg-[var(--dash-accent)] border-[var(--dash-accent)] text-black shadow-lg shadow-[var(--dash-accent-dim)]' 
                  : 'bg-[var(--dash-surface-2)] border-[var(--dash-border)] text-[var(--dash-muted)] hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <input 
              type="text" 
              placeholder="Rechercher..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="dash-input pl-10 h-10"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--dash-muted)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-[var(--dash-surface-2)] p-1 border border-[var(--dash-border)] rounded-full px-2">
            <button 
              onClick={() => setView('table')}
              className={`p-2 rounded-full transition-all ${view === 'table' ? 'bg-[var(--dash-accent)] text-black shadow-lg' : 'text-[var(--dash-muted)] hover:text-white'}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
            <button 
              onClick={() => setView('grid')}
              className={`p-2 rounded-full transition-all ${view === 'grid' ? 'bg-[var(--dash-accent)] text-black shadow-lg' : 'text-[var(--dash-muted)] hover:text-white'}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
            </button>
          </div>
        </div>
      </div>

      {view === 'table' ? (
        <div className="dash-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>SKU</th>
                  <th>Catégorie</th>
                  <th>Prix</th>
                  <th>Stock</th>
                  <th>Statut</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => {
                  const totalStock = p.variants.reduce((acc, v) => acc + v.stock, 0);
                  return (
                    <tr key={p.id} className="group">
                      <td>
                        <div className="flex items-center space-x-4">
                           <div className="w-[44px] h-[44px] bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-md flex items-center justify-center overflow-hidden shrink-0">
                             {p.images[0] ? (
                               <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                             ) : (
                               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--dash-muted)]"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                             )}
                           </div>
                           <span className="text-[13px] font-bold text-white tracking-tight">{p.name}</span>
                        </div>
                      </td>
                      <td className="text-[10px] font-mono font-bold text-[var(--dash-accent)] tracking-widest">{p.id}</td>
                      <td>
                         <span className="badge badge-neutral text-[9px]">{p.category.toUpperCase()}</span>
                      </td>
                      <td className="text-[14px] font-mono font-bold text-white">{p.price.toLocaleString()} FC</td>
                      <td>
                        <div className="flex items-center space-x-3">
                           <div className={`w-2 h-2 rounded-full ${totalStock === 0 ? 'bg-[var(--dash-danger)]' : totalStock < 10 ? 'bg-[var(--dash-warning)]' : 'bg-[var(--dash-success)]'}`}></div>
                           <span className="text-[12px] font-mono font-bold text-white">{totalStock}</span>
                        </div>
                      </td>
                      <td>
                         <span className="badge badge-success">ACTIF</span>
                      </td>
                      <td>
                        <div className="flex justify-end space-x-2">
                          <button onClick={() => handleEdit(p)} className="p-2 text-[var(--dash-muted)] hover:text-[var(--dash-accent)]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
             <div className="p-32 text-center text-[var(--dash-muted)] uppercase tracking-[0.5em] text-[11px] font-bold italic opacity-20">
                Aucun article référencé
             </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((p) => {
             const totalStock = p.variants.reduce((acc, v) => acc + v.stock, 0);
             return (
               <div key={p.id} onClick={() => handleEdit(p)} className="dash-card group cursor-pointer flex flex-col h-full overflow-hidden">
                 <div className="aspect-[4/5] bg-[var(--dash-surface-2)] relative overflow-hidden">
                    {p.images[0] ? (
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center opacity-[0.03] transform scale-150 group-hover:rotate-12 transition-transform duration-1000">
                         <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--dash-accent)" strokeWidth="1"><path d="M20.37 8.91l-8.17-3.61a2 2 0 0 0-1.59 0l-8.17 3.61a2 2 0 0 0 0 3.66l8.17 3.61a2 2 0 0 0 1.59 0l8.17-3.61a2 2 0 0 0 0-3.66z" /><path d="M4.5 14.1l7.5 3.3 7.5-3.3" /><path d="M4.5 17.5l7.5 3.3 7.5-3.3" /></svg>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-[var(--dash-accent)] text-black p-3 rounded-[var(--radius-sm)] shadow-2xl">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex justify-between items-center mb-2">
                           <span className={`badge ${totalStock < 5 ? 'badge-danger' : 'badge-neutral bg-black/60 backdrop-blur-md'}`}>
                              {totalStock} UNITÉS
                           </span>
                           <span className="text-[10px] font-bold text-white tracking-[0.2em] shadow-black drop-shadow-md">{p.id}</span>
                        </div>
                    </div>
                 </div>
                 <div className="p-8 space-y-4 bg-gradient-to-b from-[var(--dash-surface)] to-[var(--dash-surface-2)] flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--dash-accent)] font-bold">{p.category}</span>
                      <h4 className="text-base font-bold text-[var(--dash-text)] tracking-tight mt-1 line-clamp-2">{p.name}</h4>
                    </div>
                    <div className="flex justify-between items-end pt-4 border-t border-[var(--dash-border)]">
                       <span className="text-lg font-light text-[var(--dash-text)]">{p.price.toLocaleString()} <span className="text-xs font-bold text-[var(--dash-muted)]">FC</span></span>
                       <div className="text-[9px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">VOIR DETAILS</div>
                    </div>
                 </div>
               </div>
             );
          })}
        </div>
      )}

      {/* Sidebar Overlay */}
      <ProductSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        product={selectedProduct}
      />
    </div>
  );
};

export default CataloguePage;
