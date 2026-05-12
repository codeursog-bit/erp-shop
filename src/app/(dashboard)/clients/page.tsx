"use client";

// API-READY: replace customerService.getAll with fetch('/api/customers') when backend is live
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { customerService, Customer } from '@/lib/mock/customers';
import { orderService, Order } from '@/lib/mock/orders';
import StatusBadge from '@/components/dashboard/StatusBadge';
import KpiCard from '@/components/dashboard/KpiCard';

const getAvatarData = (name: string) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    '#C8A96E', // gold
    '#D4B98B', // light gold
    '#A68B5B', // bronze
    '#8C6D3E', // deep gold
    '#B8A278', // sand
    '#E5D1B0', // beige
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = colors[Math.abs(hash) % colors.length];

  return { initials, color };
};

const ClientsPage = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
  const [customerOrders, setCustomerOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await customerService.getAll();
        setCustomers(data);
      } catch (err) {
        console.error('Error fetching customers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!selectedCustomerId) {
        setCustomerOrders([]);
        return;
      }
      const customer = customers.find(c => c.id === selectedCustomerId);
      if (customer) {
        const allOrders = await orderService.getAll();
        const filtered = allOrders
          .filter(o => o.customerEmail === customer.email)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 5);
        setCustomerOrders(filtered);
      }
    };
    fetchOrders();
  }, [selectedCustomerId, customers]);

  const filteredCustomers = useMemo(() => {
    return customers.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [customers, searchQuery]);

  const stats = useMemo(() => {
    const total = customers.length;
    const activeClients = customers.filter(c => c.status === 'active').length;
    const avgSpent = total > 0 ? customers.reduce((acc, c) => acc + c.totalSpent, 0) / total : 0;
    
    return {
      total,
      activeClients,
      avgSpent
    };
  }, [customers]);

  const selectedCustomer = useMemo(() => 
    customers.find(c => c.id === selectedCustomerId),
    [customers, selectedCustomerId]
  );

  if (loading) {
    return (
      <div className="space-y-10 animate-pulse p-8">
        <div className="h-10 bg-[var(--dash-surface-2)] rounded-[var(--radius-md)] w-64"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => <div key={i} className="h-40 dash-card opacity-50"></div>)}
        </div>
        <div className="h-[600px] dash-card opacity-50 w-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--dash-border)] pb-8">
        <div>
          <h1 className="text-3xl font-light tracking-tight text-[var(--dash-text)]">Répertoire Clients</h1>
          <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">Gestion de la relation client et du CRM de prestige</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 min-w-[320px]">
            <input 
              type="text" 
              placeholder="Rechercher par nom, email ou ville..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="dash-input pl-12"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--dash-muted)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
          </div>
          <button className="btn-dash-ghost px-6 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Exporter
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <KpiCard 
           label="Total Portefeuille" 
           value={stats.total.toString()} 
           icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
        />
        <KpiCard 
           label="Comptes Actifs" 
           value={stats.activeClients.toString()} 
           icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20.42 4.58a10 10 0 1 1-14.84 0" /><line x1="12" y1="1" x2="12" y2="12" /></svg>}
        />
        <KpiCard 
           label="Valeur Vie Client" 
           value={`${Math.round(stats.avgSpent).toLocaleString()} FC`} 
           icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
        />
      </div>

      {/* Table Section */}
      <div className="dash-card-flat overflow-hidden shadow-2xl shadow-black/30">
        <div className="overflow-x-auto">
          <table className="dash-table">
            <thead>
              <tr>
                <th className="w-20">Visuel</th>
                <th>Dénomination & Contact</th>
                <th>Localité</th>
                <th className="text-center">Commandes</th>
                <th>Volume d'Achat</th>
                <th>Dernière Recurrence</th>
                <th>Statut</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => {
                const { initials, color } = getAvatarData(customer.name);
                return (
                  <tr 
                    key={customer.id} 
                    onClick={() => setSelectedCustomerId(customer.id)}
                    className="hover:bg-[var(--dash-surface-2)] transition-colors cursor-pointer group"
                  >
                    <td>
                      <div 
                         style={{ backgroundColor: color + '15', border: `1px solid ${color}40`, color: color }}
                         className="w-12 h-12 rounded-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest group-hover:scale-110 transition-transform duration-500 shadow-md"
                      >
                        {initials}
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col">
                        <span className="block text-[13px] font-bold text-white tracking-tight">{customer.name}</span>
                        <span className="block text-[10px] text-[var(--dash-muted)] font-medium italic">{customer.email}</span>
                      </div>
                    </td>
                    <td>
                      <span className="text-[11px] font-bold text-[var(--dash-text-2)] uppercase tracking-widest">{customer.city}</span>
                    </td>
                    <td className="text-center">
                       <span className="text-[11px] font-black font-mono bg-[var(--dash-surface-3)] px-3 py-1 rounded-full">{customer.totalOrders}</span>
                    </td>
                    <td className="text-[14px] font-bold font-mono text-[var(--dash-accent)]">
                      {customer.totalSpent.toLocaleString()} FC
                    </td>
                    <td className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-widest italic opacity-60">
                      {customer.lastOrder}
                    </td>
                    <td>
                       <StatusBadge status={customer.status === 'active' ? 'delivered' : 'pending'} />
                    </td>
                    <td>
                      <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                         <button className="btn-dash-ghost p-2 px-2">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6" /></svg>
                         </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Context Panel */}
      <AnimatePresence>
        {selectedCustomerId && selectedCustomer && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
              onClick={() => setSelectedCustomerId(null)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[550px] bg-[var(--dash-surface-glass)] backdrop-blur-xl border-l border-[var(--dash-border)] z-[210] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Panel Header */}
              <div className="p-10 border-b border-[var(--dash-border)] flex justify-between items-start bg-[var(--dash-surface-2)]">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div 
                    style={{ backgroundColor: getAvatarData(selectedCustomer.name).color + '15', border: `2px solid ${getAvatarData(selectedCustomer.name).color}` }}
                    className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-2xl"
                  >
                    {getAvatarData(selectedCustomer.name).initials}
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-light text-white tracking-tight">{selectedCustomer.name}</h2>
                    <div className="flex flex-wrap items-center gap-3">
                       <div className="badge badge-success px-4 bg-transparent border-[var(--dash-accent)] text-[var(--dash-accent)]">CLIENT PRESTIGE</div>
                       <span className="text-[11px] text-[var(--dash-muted)] font-black uppercase tracking-widest">{selectedCustomer.city}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCustomerId(null)}
                  className="btn-dash-ghost p-3 px-3 hover:text-[var(--dash-danger)]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
                {/* Stats Matrix */}
                <div className="grid grid-cols-3 gap-6">
                   <div className="bg-[var(--dash-surface-3)] border border-[var(--dash-border)] p-6 rounded-[var(--radius-lg)] flex flex-col items-center justify-center text-center shadow-inner">
                      <span className="text-2xl font-light text-white mb-1">{selectedCustomer.totalOrders}</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-black text-[var(--dash-muted)]">Commandes</span>
                   </div>
                   <div className="bg-[var(--dash-surface-3)] border border-[var(--dash-border)] p-6 rounded-[var(--radius-lg)] flex flex-col items-center justify-center text-center shadow-inner">
                      <span className="text-2xl font-light text-[var(--dash-accent)] mb-1">{(selectedCustomer.totalSpent / 1000).toFixed(0)}k</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-black text-[var(--dash-muted)]">CA Cumulé</span>
                   </div>
                   <div className="bg-[var(--dash-surface-3)] border border-[var(--dash-border)] p-6 rounded-[var(--radius-lg)] flex flex-col items-center justify-center text-center shadow-inner">
                      <span className="text-sm font-bold text-white mb-1">
                        {selectedCustomer.totalOrders > 0 ? Math.round(selectedCustomer.totalSpent / selectedCustomer.totalOrders).toLocaleString() : 0}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-black text-[var(--dash-muted)]">Panier Moy.</span>
                   </div>
                </div>

                {/* Engagement / Recent Activity */}
                <div className="space-y-6">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Flux Transactionnel</h3>
                   <div className="space-y-4">
                      {customerOrders.length > 0 ? (
                        customerOrders.map((order) => (
                          <div key={order.id} className="flex items-center justify-between p-6 bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-lg)] hover:border-[var(--dash-accent)] transition-all group cursor-pointer shadow-lg">
                             <div className="flex flex-col">
                                <span className="text-[12px] font-bold text-[var(--dash-accent)] tracking-[0.2em] mb-1">{order.ref}</span>
                                <span className="text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-medium italic">{new Date(order.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                             </div>
                             <div className="flex items-center space-x-6">
                                <span className="text-[14px] font-bold font-mono text-white">{order.total.toLocaleString()} FC</span>
                                <StatusBadge status={order.status as any} />
                             </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-16 text-center border border-dashed border-[var(--dash-border)] rounded-[var(--radius-lg)] opacity-20 italic text-[11px] uppercase tracking-[0.4em]">
                          Aucun historique détecté
                        </div>
                      )}
                   </div>
                </div>

                {/* Coordinates & Contact */}
                <div className="space-y-6">
                   <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Coordonnées Privées</h3>
                   <div className="bg-gradient-to-br from-[var(--dash-surface-2)] to-black p-8 rounded-[var(--radius-lg)] border border-[var(--dash-border)] space-y-6 shadow-xl">
                      <div className="flex items-center justify-between group">
                         <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--dash-surface-3)] flex items-center justify-center text-[var(--dash-muted)] group-hover:text-[var(--dash-accent)] transition-colors">
                               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <div className="flex flex-col">
                               <span className="text-[9px] uppercase tracking-widest font-black text-[var(--dash-muted)]">Canal Email</span>
                               <span className="text-[13px] font-bold text-white tracking-tight">{selectedCustomer.email}</span>
                            </div>
                         </div>
                         <button className="text-[10px] uppercase font-black tracking-widest text-[var(--dash-accent)] opacity-0 group-hover:opacity-100 transition-opacity">COPIER</button>
                      </div>
                      <div className="flex items-center justify-between group">
                         <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-[var(--dash-surface-3)] flex items-center justify-center text-[var(--dash-muted)] group-hover:text-[var(--dash-accent)] transition-colors">
                               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div className="flex flex-col">
                               <span className="text-[9px] uppercase tracking-widest font-black text-[var(--dash-muted)]">Téléphone Direct</span>
                               <span className="text-[13px] font-bold text-white tracking-tight">{selectedCustomer.phone}</span>
                            </div>
                         </div>
                         <button className="text-[10px] uppercase font-black tracking-widest text-[var(--dash-accent)] opacity-0 group-hover:opacity-100 transition-opacity">APPELER</button>
                      </div>
                      <div className="pt-6 border-t border-[var(--dash-border)]">
                         <span className="block text-[9px] uppercase tracking-widest font-black text-[var(--dash-muted)] mb-3 text-center">Localisation Résidentielle</span>
                         <div className="p-4 bg-white/5 rounded-[var(--radius-sm)] border border-white/5 flex items-center justify-center space-x-3 italic text-[11px] text-[var(--dash-text-2)]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                            <span>{selectedCustomer.city}, {selectedCustomer.country}</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Panel Action Footer */}
              <div className="p-10 border-t border-[var(--dash-border)] bg-[var(--dash-surface-2)] grid grid-cols-2 gap-6">
                 <button className="btn-dash-ghost flex items-center justify-center space-x-3 hover:text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    <span>Annoter Fiche</span>
                 </button>
                 <button className="btn-dash-primary shadow-xl shadow-[var(--dash-accent-dim)]">
                    Contacter Client
                 </button>
                 <button className="col-span-2 py-4 text-[10px] uppercase font-black tracking-[0.4em] text-[var(--dash-danger)] hover:bg-[var(--dash-danger)]/10 transition-colors border border-[var(--dash-danger)]/20 rounded-[var(--radius-lg)]">
                    Archiver le profil
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientsPage;
