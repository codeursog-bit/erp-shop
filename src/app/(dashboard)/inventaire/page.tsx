"use client";

import React, { useState } from 'react';

const InventairePage = () => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [editingStock, setEditingStock] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedRows(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const inventory = [
    {
      id: '1',
      productName: 'Tunique Bogolan d\'Honneur',
      ref: 'M1-BH-001',
      totalStock: 45,
      alertThreshold: 10,
      status: 'En Stock',
      variants: [
        { id: 'v1', name: 'L / Brown', stock: 15 },
        { id: 'v2', name: 'XL / Brown', stock: 12 },
        { id: 'v3', name: 'M / Brown', stock: 18 },
      ]
    },
    {
      id: '2',
      productName: 'Robe Saphir Kinshasa',
      ref: 'M2-RK-442',
      totalStock: 4,
      alertThreshold: 10,
      status: 'Critique',
      variants: [
        { id: 'v4', name: 'S / Blue', stock: 2 },
        { id: 'v5', name: 'M / Blue', stock: 2 },
      ]
    },
    {
      id: '3',
      productName: 'Pantalon Lin Saharien',
      ref: 'M1-PL-102',
      totalStock: 0,
      alertThreshold: 5,
      status: 'Rupture',
      variants: [
        { id: 'v6', name: 'M / Beige', stock: 0 },
        { id: 'v7', name: 'L / Beige', stock: 0 },
      ]
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-light tracking-tight text-[var(--dash-text)]">Gestion de l'Inventaire</h1>
          <p className="text-[11px] text-[var(--dash-muted)] uppercase tracking-[0.2em] font-bold mt-1">Contrôle des stocks et valorisation</p>
        </div>
        <button className="btn-dash-primary">Exporter Inventaire</button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="kpi-card p-6">
           <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Total SKUs</span>
           <div className="text-3xl font-light text-[var(--dash-text)] mt-2">1,240</div>
        </div>
        <div className="kpi-card p-6 border-t-2 border-[var(--dash-accent)]">
           <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Valeur Stock</span>
           <div className="text-3xl font-light text-[var(--dash-text)] mt-2">8,450,000 <span className="text-xs uppercase">FCFA</span></div>
        </div>
        <div className="kpi-card p-6 border-t-2 border-[var(--dash-danger)]">
           <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)] text-[var(--dash-danger)]">En Rupture</span>
           <div className="text-3xl font-light text-[var(--dash-danger)] mt-2">12</div>
        </div>
      </div>

      <div className="dash-card">
        <div className="overflow-x-auto">
          <table className="dash-table">
            <thead>
              <tr>
                <th className="w-10"></th>
                <th>Produit</th>
                <th>Référence</th>
                <th>Stock Total</th>
                <th>Seuil Alerte</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <React.Fragment key={item.id}>
                  <tr 
                    className="cursor-pointer group"
                    onClick={() => toggleRow(item.id)}
                  >
                    <td>
                      <svg 
                        width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        className={`transition-transform duration-300 ${expandedRows.includes(item.id) ? 'rotate-180' : 'rotate-90'}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </td>
                    <td>
                      <span className="font-bold text-[var(--dash-text)]">{item.productName}</span>
                    </td>
                    <td className="font-mono text-[var(--dash-accent)] tracking-widest text-[11px] uppercase">
                      {item.ref}
                    </td>
                    <td className="font-mono font-bold">
                       {editingStock === item.id ? (
                         <input 
                           autoFocus
                           className="dash-input w-20 py-1"
                           defaultValue={item.totalStock}
                           onBlur={() => setEditingStock(null)}
                           onClick={(e) => e.stopPropagation()}
                         />
                       ) : (
                         <span 
                           className="cursor-text hover:text-[var(--dash-accent)] transition-colors"
                           onClick={(e) => {
                             e.stopPropagation();
                             setEditingStock(item.id);
                           }}
                         >
                           {item.totalStock}
                         </span>
                       )}
                    </td>
                    <td className="text-[var(--dash-muted)] font-mono">{item.alertThreshold}</td>
                    <td>
                      <span className={`badge ${
                        item.status === 'En Stock' ? 'badge-success' : 
                        item.status === 'Critique' ? 'badge-warning' : 'badge-danger'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                  {expandedRows.includes(item.id) && (
                    <tr className="bg-[var(--dash-surface-2)]/50">
                      <td colSpan={6} className="p-0">
                        <div className="p-6 pl-16 animate-in slide-in-from-top-2 duration-300">
                           <table className="w-full text-left">
                              <thead>
                                <tr className="text-[10px] uppercase tracking-widest text-[var(--dash-muted)] border-b border-[var(--dash-border)]">
                                  <th className="pb-3">Variante</th>
                                  <th className="pb-3">Stock Actuel</th>
                                  <th className="pb-3 text-right">Ajuster</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.variants.map(variant => (
                                  <tr key={variant.id} className="border-b border-[var(--dash-border)] last:border-0">
                                    <td className="py-3 text-[12px] font-bold text-[var(--dash-text-2)]">{variant.name}</td>
                                    <td className="py-3 font-mono text-[12px]">{variant.stock}</td>
                                    <td className="py-3 text-right">
                                       <div className="flex justify-end space-x-2">
                                          <button className="w-6 h-6 rounded bg-[var(--dash-surface-3)] flex items-center justify-center hover:bg-[var(--dash-accent)] hover:text-black">-</button>
                                          <button className="w-6 h-6 rounded bg-[var(--dash-surface-3)] flex items-center justify-center hover:bg-[var(--dash-accent)] hover:text-black">+</button>
                                       </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                           </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventairePage;
