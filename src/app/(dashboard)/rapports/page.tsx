"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const data = {
  trends: [
    { name: 'Lun', sales: 4000, target: 4500 },
    { name: 'Mar', sales: 3000, target: 4500 },
    { name: 'Mer', sales: 6000, target: 4500 },
    { name: 'Jeu', sales: 5000, target: 4500 },
    { name: 'Ven', sales: 9000, target: 4500 },
    { name: 'Sam', sales: 8500, target: 4500 },
    { name: 'Dim', sales: 11000, target: 4500 },
  ],
  categories: [
    { name: 'Tunique', value: 450, color: '#C8A96E' },
    { name: 'Robes', value: 300, color: '#5BA375' },
    { name: 'Accessoires', value: 200, color: '#5B8FC8' },
    { name: 'Pantalons', value: 150, color: '#C85C5C' },
  ]
};

const RapportsPage = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-[var(--dash-surface-2)] p-4 rounded-full border border-[var(--dash-border)]">
        <div className="flex space-x-2">
          {['Cette semaine', 'Ce mois', 'Ce trimestre', 'Personnalisé'].map((p, i) => (
            <button key={p} className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all ${i === 1 ? 'bg-[var(--dash-accent)] text-black' : 'text-[var(--dash-muted)] hover:text-white'}`}>
              {p}
            </button>
          ))}
        </div>
        <button className="btn-dash-primary flex items-center space-x-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Télécharger CSV</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: 'CA Total', value: '42.5M', trend: '+12%' },
          { label: 'Commandes', value: '842', trend: '+5%' },
          { label: 'Ticket Moyen', value: '85k', trend: '-2%' },
          { label: 'Nouveaux Clients', value: '124', trend: '+18%' },
          { label: 'Taux Annulat.', value: '2.4%', trend: '-1%' },
          { label: 'Best Seller', value: 'Tunique B.', trend: '' },
        ].map(kpi => (
          <div key={kpi.label} className="dash-card p-6 flex flex-col items-center text-center">
            <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">{kpi.label}</span>
            <div className="text-xl font-light text-[var(--dash-text)] mt-2">{kpi.value}</div>
            {kpi.trend && (
              <span className={`text-[10px] mt-2 ${kpi.trend.startsWith('+') ? 'text-[var(--dash-success)]' : 'text-[var(--dash-danger)]'}`}>
                {kpi.trend}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 dash-card p-10">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] mb-10 text-[var(--dash-text)]">Performance vs Objectifs</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.trends}>
                <CartesianGrid vertical={false} stroke="var(--dash-border)" strokeOpacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--dash-muted)', fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--dash-muted)', fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ background: 'var(--dash-surface)', border: '1px solid var(--dash-border)', borderRadius: '8px' }}
                  itemStyle={{ fontSize: '11px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="sales" stroke="var(--dash-accent)" fill="var(--dash-accent-dim)" strokeWidth={3} />
                <Area type="monotone" dataKey="target" stroke="var(--dash-muted)" fill="transparent" strokeWidth={1} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dash-card p-10">
           <h3 className="text-[12px] font-bold uppercase tracking-[0.4em] mb-10 text-[var(--dash-text)]">Ventes par Catégorie</h3>
           <div className="h-80 w-full">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.categories} layout="vertical">
                   <CartesianGrid horizontal={false} stroke="var(--dash-border)" strokeOpacity={0.2} />
                   <XAxis type="number" hide />
                   <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: 'var(--dash-text-2)', fontSize: 11, fontWeight: 'bold' }} width={80} />
                   <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {data.categories.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                   </Bar>
                </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RapportsPage;
