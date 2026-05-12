"use client";

// API-READY: fetch('/api/orders') with query params for filters/pagination when backend is live
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { orderService, Order, OrderStatus } from '@/lib/mock/orders';
import StatusBadge from '@/components/dashboard/StatusBadge';

const CommandesPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const data = await orderService.getAll();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
      const matchesSearch = 
        order.ref.toLowerCase().includes(searchQuery.toLowerCase()) || 
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesDate = true;
      if (dateStart) {
        matchesDate = matchesDate && new Date(order.createdAt) >= new Date(dateStart);
      }
      if (dateEnd) {
        matchesDate = matchesDate && new Date(order.createdAt) <= new Date(dateEnd);
      }

      return matchesStatus && matchesSearch && matchesDate;
    });
  }, [orders, selectedStatus, searchQuery, dateStart, dateEnd]);

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredOrders.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredOrders, currentPage]);

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  const selectedOrder = useMemo(() => 
    orders.find(o => o.id === selectedOrderId), 
    [orders, selectedOrderId]
  );

  const statuses: { id: OrderStatus | 'all'; label: string }[] = [
    { id: 'all', label: 'Toutes' },
    { id: 'pending', label: 'Attente' },
    { id: 'processing', label: 'Cours' },
    { id: 'shipped', label: 'Expédiées' },
    { id: 'delivered', label: 'Livrées' },
    { id: 'cancelled', label: 'Annulées' },
  ];

  if (loading) {
    return (
      <div className="space-y-10 animate-pulse p-8">
        <div className="h-10 bg-[var(--dash-surface-2)] rounded-[var(--radius-md)] w-64"></div>
        <div className="h-16 bg-[var(--dash-surface-2)] rounded-[var(--radius-md)] w-full"></div>
        <div className="h-[600px] dash-card opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--dash-border)] pb-8">
        <div>
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-light tracking-tight text-[var(--dash-text)]">Commandes Clients</h1>
            <span className="badge badge-neutral px-3 py-1 font-mono text-[10px] tracking-widest border-[var(--dash-border)]">
               {filteredOrders.length} DOSSIERS
            </span>
          </div>
          <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">Suivi logistique et facturation des acquisitions</p>
        </div>
        <button className="btn-dash-ghost px-8 shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          Exporter XLS
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
        <div className="flex flex-wrap gap-3">
          {statuses.map(status => (
            <button
              key={status.id}
              onClick={() => { setSelectedStatus(status.id); setCurrentPage(1); }}
              className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all border ${
                selectedStatus === status.id 
                  ? 'bg-[var(--dash-accent)] border-[var(--dash-accent)] text-black shadow-lg shadow-[var(--dash-accent-dim)]' 
                  : 'bg-[var(--dash-surface-2)] border-[var(--dash-border)] text-[var(--dash-muted)] hover:text-white'
              }`}
            >
              {status.label.toUpperCase()}
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
        </div>
      </div>

      {/* Table Section */}
      <div className="dash-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Référence</th>
                <th>Client</th>
                <th>Articles</th>
                <th>Montant</th>
                <th>Statut</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((order) => (
                <tr 
                  key={order.id} 
                  onClick={() => setSelectedOrderId(order.id)}
                  className="group hover:bg-[var(--dash-surface-2)] transition-colors cursor-pointer"
                >
                  <td className="text-[11px] font-mono font-bold text-[var(--dash-accent)] tracking-widest">{order.ref}</td>
                  <td>
                    <div className="flex flex-col">
                       <span className="block text-[13px] font-bold text-white leading-none">{order.customerName}</span>
                       <span className="block text-[10px] text-[var(--dash-muted)] mt-1">{order.customerEmail}</span>
                    </div>
                  </td>
                  <td className="text-[11px] font-bold text-[var(--dash-muted)]">
                    {order.products.length} {order.products.length > 1 ? 'Articles' : 'Article'}
                  </td>
                  <td className="text-[14px] font-mono font-bold text-white">
                    {order.total.toLocaleString()} <span className="text-[10px] text-[var(--dash-muted)]">FC</span>
                  </td>
                  <td>
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="text-[10px] text-[var(--dash-muted)] font-black uppercase tracking-widest">
                    {new Date(order.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="p-8 border-t border-[var(--dash-border)] flex justify-between items-center bg-[var(--dash-surface-glass)]">
            <span className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold">
              PAGE {currentPage} / {totalPages}
            </span>
            <div className="flex space-x-3">
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentPage(prev => Math.max(1, prev - 1)); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                disabled={currentPage === 1}
                className="btn-dash-ghost p-3 px-3 disabled:opacity-20 border-[var(--dash-border)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentPage(prev => Math.min(totalPages, prev + 1)); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                disabled={currentPage === totalPages}
                className="btn-dash-ghost p-3 px-3 disabled:opacity-20 border-[var(--dash-border)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Order Context Panel */}
      <AnimatePresence>
        {selectedOrderId && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
              onClick={() => setSelectedOrderId(null)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[550px] bg-[var(--dash-surface-glass)] backdrop-blur-xl border-l border-[var(--dash-border)] z-[210] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Panel Header */}
              <div className="p-10 border-b border-[var(--dash-border)] flex justify-between items-center bg-[var(--dash-surface-2)]">
                <div>
                  <h2 className="text-2xl font-light text-[var(--dash-text)] tracking-tight mb-2">Bon de Commande</h2>
                  <div className="flex items-center space-x-3">
                     <span className="text-[11px] text-[var(--dash-accent)] uppercase tracking-[0.2em] font-bold">{selectedOrder?.ref}</span>
                     <span className="w-1 h-1 rounded-full bg-[var(--dash-muted)]"></span>
                     <span className="text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-bold">
                        {selectedOrder && new Date(selectedOrder.createdAt).toLocaleString('fr-FR')}
                     </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedOrderId(null)}
                  className="btn-dash-ghost p-3 px-3 hover:text-[var(--dash-danger)]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
                {/* Status Command */}
                <div className="space-y-6">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Processus d'Exécution</h3>
                   <div className="flex items-center justify-between p-6 bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-lg)] shadow-inner">
                      <div>
                         <StatusBadge status={selectedOrder?.status as any} />
                         <p className="text-[9px] text-[var(--dash-muted)] uppercase font-bold tracking-[0.1em] mt-3 italic">Statut actuel du flux</p>
                      </div>
                      <div className="text-right">
                         <label className="block text-[9px] uppercase tracking-widest font-bold text-[var(--dash-muted)] mb-3">Intervention</label>
                         <div className="relative">
                            <select 
                              className="dash-input appearance-none pr-10 py-2 text-[10px] font-bold uppercase tracking-[0.1em] cursor-pointer"
                              value={selectedOrder?.status}
                              onChange={(e) => {
                                setOrders(prev => prev.map(o => o.id === selectedOrderId ? { ...o, status: e.target.value as OrderStatus } : o));
                              }}
                            >
                              <option value="pending">Mettre en Attente</option>
                              <option value="processing">Lancer Production</option>
                              <option value="shipped">Expédier Colis</option>
                              <option value="delivered">Confirmer Livraison</option>
                              <option value="cancelled">Annuler Dossier</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--dash-accent)]">
                               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Identité Marketing */}
                <div className="space-y-6">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Canal & Destination</h3>
                   <div className="grid grid-cols-2 gap-8 items-start">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Client Associé</label>
                        <div className="p-5 bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-lg)]">
                            <div className="w-10 h-10 rounded-full bg-[var(--dash-accent)] text-black flex items-center justify-center font-black text-xs mb-3 shadow-lg shadow-[var(--dash-accent-dim)]">
                                {selectedOrder?.customerName.charAt(0)}
                            </div>
                            <span className="block text-sm font-bold text-white tracking-tight">{selectedOrder?.customerName}</span>
                            <span className="block text-[10px] text-[var(--dash-muted)] font-medium mt-1 truncate">{selectedOrder?.customerEmail}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[9px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Adresse de Livraison</label>
                         <div className="p-5 bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-lg)] min-h-[110px] flex items-center italic">
                            <p className="text-[11px] text-[var(--dash-text-2)] leading-relaxed italic">"{selectedOrder?.shippingAddress}"</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Inventaire Commandé */}
                <div className="space-y-6">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Détail du Panier</h3>
                   <div className="bg-[var(--dash-surface-flat)] border border-[var(--dash-border)] divide-y divide-[var(--dash-border)] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl">
                      {selectedOrder?.products.map((p, idx) => (
                        <div key={idx} className="p-6 flex items-center justify-between group hover:bg-[var(--dash-surface-2)] transition-colors">
                           <div className="flex items-center space-x-5">
                              <div className="w-16 h-16 bg-[var(--dash-surface-3)] rounded-[var(--radius-sm)] flex items-center justify-center border border-[var(--dash-border)] shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--dash-muted)]"><path d="M20.37 8.91l-8.17-3.61a2 2 0 0 0-1.59 0l-8.17 3.61a2 2 0 0 0 0 3.66l8.17 3.61a2 2 0 0 0 1.59 0l8.17-3.61a2 2 0 0 0 0-3.66z" /><path d="M4.5 14.1l7.5 3.3 7.5-3.3" /><path d="M4.5 17.5l7.5 3.3 7.5-3.3" /></svg>
                              </div>
                              <div>
                                 <span className="block text-sm font-bold text-white tracking-tight">{p.name}</span>
                                 <span className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.2em] font-bold mt-1">
                                    {p.qty} UNITÉ(S) <span className="mx-2 opacity-30">×</span> {p.price.toLocaleString()} FC
                                 </span>
                              </div>
                           </div>
                           <span className="text-[14px] font-bold font-mono text-white">{(p.qty * p.price).toLocaleString()} FC</span>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Recapitulatif Comptable */}
                <div className="bg-gradient-to-br from-[var(--dash-surface-2)] to-black p-8 rounded-[var(--radius-lg)] border border-[var(--dash-border)] space-y-4 shadow-xl">
                   <div className="flex justify-between text-[11px] text-[var(--dash-muted)] uppercase tracking-widest font-bold">
                      <span>Valeur Marchande</span>
                      <span className="text-white">{(selectedOrder?.total ? selectedOrder.total - 12500 : 0).toLocaleString()} FC</span>
                   </div>
                   <div className="flex justify-between text-[11px] text-[var(--dash-muted)] uppercase tracking-widest font-bold">
                      <span>Frais de Transport</span>
                      <span className="text-white">12 500 FC</span>
                   </div>
                   <div className="flex justify-between pt-6 border-t border-[var(--dash-border)] items-center">
                      <span className="text-[12px] font-bold text-[var(--dash-accent)] uppercase tracking-[0.4em]">Net à Payer</span>
                      <span className="text-2xl font-light text-white tracking-tight">{selectedOrder?.total.toLocaleString()} <span className="text-xs font-black text-[var(--dash-muted)]">FC</span></span>
                   </div>
                </div>

                {/* Logs / Timeline */}
                <div className="space-y-6 pb-12">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Piste d'Audit</h3>
                   <div className="space-y-8 pl-6 border-l border-[var(--dash-border)] ml-3">
                      <div className="relative">
                         <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--dash-accent)] shadow-[0_0_10px_var(--dash-accent)]"></div>
                         <span className="block text-[10px] font-bold text-white uppercase tracking-[0.2em]">Capture de Commande Digitale</span>
                         <span className="text-[9px] text-[var(--dash-muted)] font-medium italic mt-1 font-mono">
                            Dossier initié le {selectedOrder && new Date(selectedOrder.createdAt).toLocaleDateString()} à {selectedOrder && new Date(selectedOrder.createdAt).toLocaleTimeString()}
                         </span>
                      </div>
                      {selectedOrder?.status !== 'pending' && (
                        <div className="relative">
                          <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--dash-success)] shadow-[0_0_10px_var(--dash-success)] opacity-50"></div>
                          <span className="block text-[10px] font-bold text-[var(--dash-text-2)] uppercase tracking-[0.2em]">Transition d'État : {selectedOrder?.status}</span>
                          <span className="text-[9px] text-[var(--dash-muted)] font-medium italic mt-1 font-mono uppercase tracking-widest">Opérateur Dashboard • Système</span>
                        </div>
                      )}
                   </div>
                </div>
              </div>

              {/* Panel Footer Actions */}
              <div className="p-10 border-t border-[var(--dash-border)] bg-[var(--dash-surface-2)] grid grid-cols-2 gap-6">
                 <button className="btn-dash-ghost flex items-center justify-center space-x-3 hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
                    <span>Imprimer Facture</span>
                 </button>
                 {selectedOrder?.status !== 'delivered' && selectedOrder?.status !== 'cancelled' && (
                   <button 
                    onClick={() => {
                      setOrders(prev => prev.map(o => o.id === selectedOrderId ? { ...o, status: 'delivered' } : o));
                    }}
                    className="btn-dash-primary shadow-xl shadow-[var(--dash-accent-dim)]"
                   >
                     Livraison Validée
                   </button>
                 )}
                 {(selectedOrder?.status === 'delivered' || selectedOrder?.status === 'cancelled') && (
                     <div className="col-span-2 text-center text-[10px] uppercase font-black tracking-[0.5em] text-[var(--dash-muted)] py-3 border border-dashed border-[var(--dash-border)] rounded-full">
                        Dossier Clôturé
                     </div>
                 )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommandesPage;
