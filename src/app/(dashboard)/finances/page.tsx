"use client";

// API-READY: fetch('/api/finances/transactions') and fetch('/api/finances/summary') when backend is live
import React, { useState, useEffect, useMemo } from 'react';
import { financeService, Transaction } from '@/lib/mock/finances';
import TransactionModal from '@/components/dashboard/TransactionModal';
import StatusBadge from '@/components/dashboard/StatusBadge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const FinancesPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filterTab, setFilterTab] = useState<'all' | 'income' | 'expense' | 'pending'>('all');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [txs, sum] = await Promise.all([
          financeService.getAll(),
          financeService.getSummary()
        ]);
        setTransactions(txs);
        setSummary(sum);
      } catch (err) {
        console.error("Error fetching finances:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(transactions.map(t => t.category));
    return ['Toutes', ...Array.from(cats)];
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesTab = 
        filterTab === 'all' || 
        (filterTab === 'income' && t.type === 'income') ||
        (filterTab === 'expense' && t.type === 'expense') ||
        (filterTab === 'pending' && t.status === 'pending');
      
      const matchesCategory = selectedCategory === 'Toutes' || t.category === selectedCategory;
      
      return matchesTab && matchesCategory;
    });
  }, [transactions, filterTab, selectedCategory]);

  const handleAddTransaction = (newTx: Transaction) => {
    setTransactions(prev => [newTx, ...prev]);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[var(--dash-surface-glass)] backdrop-blur-md border border-[var(--dash-border)] p-4 shadow-2xl rounded-[var(--radius-md)]">
          <p className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)] mb-3">{label}</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-8">
              <span className="text-[10px] uppercase font-bold text-[var(--dash-text-2)]">Revenus</span>
              <span className="text-xs font-bold text-[var(--dash-accent)]">
                {payload[0].value.toLocaleString()} FC
              </span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-[10px] uppercase font-bold text-[var(--dash-text-2)]">Dépenses</span>
              <span className="text-xs font-bold text-[var(--dash-danger)]">
                {(payload[0].value * 0.6).toLocaleString()} FC
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  if (loading || !summary) {
    return (
      <div className="space-y-8 animate-pulse p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => <div key={i} className="h-40 dash-card opacity-50"></div>)}
        </div>
        <div className="h-96 dash-card opacity-50"></div>
        <div className="h-64 dash-card opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--dash-border)] pb-8">
        <div>
          <h1 className="text-3xl font-light tracking-tight text-[var(--dash-text)]">Finances & Trésorerie</h1>
          <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">
            Gestion des flux financiers et rentabilité opérationnelle
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-dash-primary flex items-center space-x-3 px-8 shadow-lg shadow-[var(--dash-accent-dim)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          <span>Nouvelle Transaction</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Income Card */}
        <div className="kpi-card p-8 group relative overflow-hidden">
          <div className="relative z-10">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--dash-muted)] font-bold mb-2">Revenus — Mensuel</span>
            <span className="text-3xl font-light text-[var(--dash-text)]">{summary.totalIncome.toLocaleString()} FC</span>
            <div className="mt-4 flex items-center space-x-3">
              <div className="badge badge-success">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                +12.5%
              </div>
              <span className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-wider">Tendance</span>
            </div>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] text-[var(--dash-accent)] opacity-[0.03] transform group-hover:scale-110 transition-transform duration-700">
             <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
        </div>

        {/* Expense Card */}
        <div className="dash-card p-8 group relative overflow-hidden border-t-2 border-[var(--dash-danger)]">
          <div className="relative z-10">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--dash-muted)] font-bold mb-2">Dépenses — Mensuel</span>
            <span className="text-3xl font-light text-[var(--dash-text)]">{summary.totalExpense.toLocaleString()} FC</span>
            <div className="mt-4 flex items-center space-x-3">
              <div className="badge badge-danger">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>
                +4.2%
              </div>
              <span className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-wider">Tendance</span>
            </div>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] text-[var(--dash-danger)] opacity-[0.03] transform group-hover:scale-110 transition-transform duration-700">
             <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
          </div>
        </div>

        {/* Balance Card */}
        <div className="dash-card-ghost p-8 relative">
          <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--dash-accent)] font-bold mb-2">Solde Net Global</span>
          <span className="text-4xl font-light text-[var(--dash-text)]">{summary.balance.toLocaleString()} FC</span>
          <div className="mt-6 h-1 w-full bg-[var(--dash-surface-3)] rounded-full overflow-hidden shadow-inner">
             <div className="h-full bg-[var(--dash-accent)] shadow-[0_0_8px_var(--dash-accent)]" style={{ width: '65%' }}></div>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-widest">Objectif Mensuel</p>
            <p className="text-[10px] text-[var(--dash-accent)] font-bold">65%</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="dash-card p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--dash-text)]">Performance Financière</h3>
            <p className="text-[11px] text-[var(--dash-muted)] uppercase tracking-widest font-bold mt-2">Comparaison flux entrants vs flux sortants</p>
          </div>
          <div className="flex items-center space-x-8 bg-[var(--dash-surface-2)] px-6 py-3 rounded-[var(--radius-md)] border border-[var(--dash-border)]">
             <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[var(--dash-accent)] shadow-[0_0_8px_var(--dash-accent)]"></div>
                <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[var(--dash-text-2)]">Revenus</span>
             </div>
             <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[var(--dash-surface-3)]"></div>
                <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[var(--dash-text-2)]">Dépenses</span>
             </div>
          </div>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={summary.monthlyRevenue} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(200,169,110,0.05)" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--dash-muted)', fontSize: 10, fontWeight: 700 }}
                dy={15}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'var(--dash-muted)', fontSize: 10, fontWeight: 700 }}
                tickFormatter={(val) => `${(val / 1000000).toFixed(1)}M`}
              />
              <Tooltip cursor={{ fill: 'rgba(200,169,110,0.03)' }} content={<CustomTooltip />} />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]} barSize={40}>
                {summary.monthlyRevenue.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={index === summary.monthlyRevenue.length - 1 ? 'var(--dash-accent)' : 'var(--dash-surface-3)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
          <div className="flex flex-wrap gap-3">
             {[
               { id: 'all', label: 'Toutes' },
               { id: 'income', label: 'Entrées' },
               { id: 'expense', label: 'Sorties' },
               { id: 'pending', label: 'En attente' }
             ].map(tab => (
               <button 
                 key={tab.id}
                 onClick={() => setFilterTab(tab.id as any)}
                 className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all border ${
                   filterTab === tab.id 
                     ? 'bg-[var(--dash-accent)] border-[var(--dash-accent)] text-black shadow-lg shadow-[var(--dash-accent-dim)]' 
                     : 'bg-[var(--dash-surface-2)] border-[var(--dash-border)] text-[var(--dash-muted)] hover:text-white'
                 }`}
               >
                 {tab.label.toUpperCase()}
               </button>
             ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
             <div className="relative w-full lg:w-64">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="dash-input appearance-none uppercase text-[10px] tracking-widest font-black pr-10"
                >
                   {categories.map(cat => (
                     <option key={cat} value={cat}>{cat.toUpperCase()}</option>
                   ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--dash-muted)]">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
             </div>
          </div>
        </div>

        <div className="dash-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Désignation</th>
                  <th>Catégorie</th>
                  <th>Direction</th>
                  <th className="text-right">Volume</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id}>
                    <td className="text-[10px] text-[var(--dash-muted)] font-black uppercase tracking-widest">
                       {new Date(tx.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                    </td>
                    <td>
                      <span className="text-[13px] font-bold text-white tracking-tight">{tx.label}</span>
                    </td>
                    <td>
                      <span className="badge badge-neutral text-[8px]">{tx.category.toUpperCase()}</span>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        {tx.type === 'income' ? (
                          <div className="w-5 h-5 rounded-full bg-[var(--dash-success)]/10 text-[var(--dash-success)] flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="18 15 12 9 6 15" /></svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-[var(--dash-danger)]/10 text-[var(--dash-danger)] flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9" /></svg>
                          </div>
                        )}
                        <span className={`text-[10px] font-black uppercase tracking-widest ${tx.type === 'income' ? 'text-[var(--dash-success)]' : 'text-[var(--dash-danger)]'}`}>
                          {tx.type === 'income' ? 'Cash-In' : 'Cash-Out'}
                        </span>
                      </div>
                    </td>
                    <td className="text-right">
                      <span className={`text-[14px] font-mono font-bold ${tx.type === 'income' ? 'text-[var(--dash-success)]' : 'text-[var(--dash-danger)]'}`}>
                        {tx.type === 'income' ? '+' : '-'}{tx.amount.toLocaleString()} FC
                      </span>
                    </td>
                    <td>
                      <StatusBadge status={tx.status === 'paid' ? 'delivered' : tx.status === 'pending' ? 'pending' : 'cancelled'} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredTransactions.length === 0 && (
            <div className="p-24 text-center text-[var(--dash-muted)] uppercase tracking-[0.5em] text-[11px] font-bold italic opacity-20">
               Aucun flux identifié
            </div>
          )}
        </div>
      </div>

      {/* Transaction Modal */}
      <TransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTransaction}
      />
    </div>
  );
};

export default FinancesPage;
