"use client";

// API-READY: fetch('/api/dashboard/overview') when backend is live
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import KpiCard from '@/components/dashboard/KpiCard';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { orderService, Order } from '@/lib/mock/orders';
import { financeService } from '@/lib/mock/finances';
import { inventoryService, InventoryItem } from '@/lib/mock/inventory';
import { customerService } from '@/lib/mock/customers';

const OverviewPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    kpis: any;
    revenueData: any[];
    orderStats: any[];
    recentOrders: Order[];
    lowStock: InventoryItem[];
  } | null>(null);

  useEffect(() => {
    const loadOverview = async () => {
      setLoading(true);
      try {
        const [orders, finances, inventory, customers, recentOrders, lowStock] = await Promise.all([
          orderService.getAll(),
          financeService.getSummary(),
          inventoryService.getOutOfStock(),
          customerService.getAll(),
          orderService.getRecent(5),
          inventoryService.getLowStock()
        ]);

        const stats = [
          { name: 'Livré', value: orders.filter(o => o.status === 'delivered').length, color: 'var(--dash-success)' },
          { name: 'En cours', value: orders.filter(o => o.status === 'processing' || o.status === 'shipped').length, color: 'var(--dash-accent)' },
          { name: 'En attente', value: orders.filter(o => o.status === 'pending').length, color: 'var(--dash-warning)' },
          { name: 'Annulé', value: orders.filter(o => o.status === 'cancelled').length, color: 'var(--dash-danger)' }
        ];

        setData({
          kpis: {
            revenue: `${(finances.totalIncome / 1000000).toFixed(1)}M FC`,
            ordersCount: orders.filter(o => {
               const date = new Date(o.createdAt);
               const now = new Date();
               return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
            }).length.toString(),
            activeCustomers: customers.filter(c => c.status === 'active').length.toString(),
            outOfStock: inventory.length.toString()
          },
          revenueData: finances.monthlyRevenue,
          orderStats: stats,
          recentOrders,
          lowStock
        });
      } catch (err) {
        console.error("Failed to load overview", err);
      } finally {
        setLoading(false);
      }
    };

    loadOverview();
  }, []);

  if (loading || !data) {
    return (
      <div className="space-y-10 animate-pulse p-8">
        <div className="h-10 bg-[var(--dash-surface-2)] rounded-[var(--radius-md)] w-64"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-40 dash-card opacity-50"></div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[450px] dash-card opacity-50"></div>
          <div className="h-[450px] dash-card opacity-50"></div>
        </div>
      </div>
    );
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[var(--dash-surface-glass)] backdrop-blur-xl border border-[var(--dash-border)] p-5 shadow-2xl rounded-[var(--radius-lg)]">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--dash-muted)] mb-3">{label}</p>
          <div className="flex items-center space-x-3">
             <div className="w-2.5 h-2.5 rounded-full bg-[var(--dash-accent)] shadow-[0_0_10px_var(--dash-accent)]"></div>
             <span className="text-[14px] font-bold text-white font-mono">{payload[0].value.toLocaleString()} FCFA</span>
          </div>
        </div>
      );
    }
    return null;
  };

  const QuickAction = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className="dash-card-ghost p-6 flex flex-col items-center justify-center text-center space-y-4 group hover:border-[var(--dash-accent)]/50 transition-all aspect-square sm:aspect-auto"
    >
       <div className="w-12 h-12 rounded-full bg-[var(--dash-surface-2)] flex items-center justify-center text-[var(--dash-muted)] group-hover:text-[var(--dash-accent)] group-hover:bg-[var(--dash-accent-dim)] transition-all duration-500">
          {icon}
       </div>
       <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[var(--dash-text-2)] group-hover:text-white transition-colors">{label}</span>
    </button>
  );

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[var(--dash-border)] pb-8">
        <div>
          <h1 className="text-4xl font-light tracking-tighter text-[var(--dash-text)]">Tableau de Bord</h1>
          <p className="text-[11px] text-[var(--dash-muted)] uppercase tracking-[0.4em] font-bold mt-2">Maison Racine by Ganda • Performance Operationnelle</p>
        </div>
        <div className="flex space-x-4">
          <button className="btn-dash-ghost px-8 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Rapport PDF
          </button>
          <button className="btn-dash-primary px-8 shadow-2xl shadow-[var(--dash-accent-dim)]">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mr-2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
             Nouvelle Vente
          </button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <KpiCard 
          label="Chiffre d'Affaires" 
          value={data.kpis.revenue} 
          trend={{ value: '12.4%', isUp: true }}
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22m5-18H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>}
        />
        <KpiCard 
          label="Conversion Dossiers" 
          value={data.kpis.ordersCount}
          trend={{ value: '8.2%', isUp: true }}
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>}
        />
        <KpiCard 
          label="Portefeuille Clients" 
          value={data.kpis.activeCustomers}
          trend={{ value: '14%', isUp: true }}
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>}
        />
        <KpiCard 
          label="Seuil de Rupture" 
          value={data.kpis.outOfStock}
          trend={{ value: '2', isUp: false }}
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>}
        />
      </div>

      {/* Quick Actions Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
         <QuickAction label="Nouvelle commande" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>} />
         <QuickAction label="Ajouter produit" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>} />
         <QuickAction label="Exporter rapport" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>} />
         <QuickAction label="Voir analytics" icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>} />
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Revenue Projection Area Chart */}
        <div className="lg:col-span-3 dash-card p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[var(--dash-text)] transition-colors">Évolution du Chiffre d'Affaires</h3>
              <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-bold mt-2">Suivi des encaissements en devise locale</p>
            </div>
            <div className="flex items-center space-x-2 bg-[var(--dash-surface-2)] p-1.5 rounded-full border border-[var(--dash-border)]">
               {['7J', '30J', '6M', '1A'].map(period => (
                 <button key={period} className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all ${period === '6M' ? 'bg-[var(--dash-accent)] text-black shadow-lg shadow-[var(--dash-accent-dim)]' : 'text-[var(--dash-muted)] hover:text-white'}`}>
                    {period}
                 </button>
               ))}
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.revenueData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--dash-accent)" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="var(--dash-accent)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="var(--dash-border)" strokeOpacity={0.2} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--dash-muted)', fontSize: 10, fontWeight: 900 }}
                  dy={15}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--dash-muted)', fontSize: 10, fontWeight: 900 }}
                  tickFormatter={(val) => `${(val / 1000000).toFixed(1)}M`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="var(--dash-accent)" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorRev)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Status Donut Chart */}
        <div className="lg:col-span-2 dash-card p-10 flex flex-col">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[var(--dash-text)] mb-12">Statut des Commandes</h3>
          <div className="flex-1 min-h-[300px] w-full relative mb-12">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.orderStats}
                  cx="50%"
                  cy="50%"
                  innerRadius="65%"
                  outerRadius="95%"
                  stroke="none"
                  paddingAngle={6}
                  dataKey="value"
                >
                  {data.orderStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[32px] font-light text-[var(--dash-text)] leading-none">
                {data.orderStats.reduce((acc, s) => acc + s.value, 0)}
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--dash-muted)] font-black mt-2">Dossiers</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {data.orderStats.map((stat) => {
              const total = data.orderStats.reduce((acc, s) => acc + s.value, 0);
              const percent = total > 0 ? Math.round((stat.value / total) * 100) : 0;
              return (
                <div key={stat.name} className="flex items-center justify-between group">
                   <div className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: stat.color, boxShadow: `0 0 10px ${stat.color}40` }}></div>
                      <span className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{stat.name}</span>
                   </div>
                   <div className="flex items-baseline space-x-1">
                      <span className="text-[12px] font-bold text-white">{stat.value}</span>
                      <span className="text-[8px] text-[var(--dash-muted)] font-black">({percent}%)</span>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity & Inventory Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-3 dash-card overflow-hidden">
           <div className="p-10 border-b border-[var(--dash-border)] flex justify-between items-center bg-[var(--dash-surface-2)]">
              <div>
                <h3 className="text-[12px] font-light uppercase tracking-[0.4em] text-white">Transactions de Prestige</h3>
                <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-black mt-2">Ventes enregistrées omnicanal</p>
              </div>
              <button 
                onClick={() => router.push('/commandes')}
                className="text-[11px] uppercase font-bold tracking-[0.3em] text-[var(--dash-accent)] hover:text-white transition-colors flex items-center group"
              >
                Voir toutes <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
           </div>
           <div className="overflow-x-auto">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Ref Monolithe</th>
                    <th>Identité Client</th>
                    <th>Valorisation</th>
                    <th>Horodatage</th>
                    <th>Statut Logique</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentOrders.map((order) => (
                    <tr key={order.id} className="group hover:bg-[var(--dash-surface-2)] transition-colors cursor-pointer">
                      <td className="text-[11px] font-mono font-bold text-[var(--dash-accent)] tracking-widest uppercase">{order.ref}</td>
                      <td className="text-[13px] font-bold text-white tracking-tight">{order.customerName}</td>
                      <td className="text-[13px] font-mono font-black text-white">{order.total.toLocaleString()} <span className="text-[10px] text-[var(--dash-muted)]">FC</span></td>
                      <td className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-widest">
                        {new Date(order.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                      </td>
                      <td><StatusBadge status={order.status as any} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>

        {/* Inventory System Alerts */}
        <div className="lg:col-span-2 flex flex-col space-y-8">
           {data.lowStock.length > 0 && (
             <div className="dash-card border-l-[3px] border-[var(--dash-warning)] bg-[var(--dash-warning-bg)]/30 p-10 flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-8">
                   <div className="w-10 h-10 rounded-full bg-[var(--dash-warning)]/10 flex items-center justify-center text-[var(--dash-warning)] shadow-[0_0_15px_rgba(200,148,58,0.1)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                   </div>
                   <div>
                      <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] text-[var(--dash-warning)]">Alerte de Stock</h3>
                      <p className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-widest mt-1">Seuil de vigilance depassé</p>
                   </div>
                </div>
                
                <p className="text-[11px] text-[var(--dash-text-2)] font-bold uppercase tracking-widest leading-relaxed mb-10">
                  {data.lowStock.length} références nécessitent un réapprovisionnement immédiat pour maintenir la continuité opérationnelle.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                   {data.lowStock.slice(0, 5).map(item => (
                     <span key={item.id} className="px-5 py-2.5 bg-black/40 border border-white/5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-white hover:border-[var(--dash-accent)]/30 transition-all">
                        {item.productName} • <span className="text-[var(--dash-danger)]">{item.totalStock}</span>
                     </span>
                   ))}
                </div>

                <div className="mt-auto">
                   <button 
                     onClick={() => router.push('/catalogue')}
                     className="w-full btn-dash-ghost border-[var(--dash-warning)]/30 text-[var(--dash-warning)] hover:bg-[var(--dash-warning)] hover:text-black py-4 transition-all uppercase text-[10px] tracking-[0.3em]"
                   >
                      Optimiser l'Inventaire
                   </button>
                </div>
             </div>
           )}

           {/* Performance Snapshot */}
           <div className="dash-card p-10 bg-gradient-to-br from-[var(--dash-surface-glass)] to-black/80 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--dash-accent)]/10 flex items-center justify-center text-[var(--dash-accent)] mb-6 shadow-2xl">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h4 className="text-[10px] uppercase font-black tracking-[0.5em] text-[var(--dash-muted)] mb-2">Efficacité de l'Écosystème</h4>
              <span className="text-[48px] font-light text-[var(--dash-success)] leading-none tracking-tighter">98.4%</span>
              <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-black mt-6">Flux logistique & Service Client</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
