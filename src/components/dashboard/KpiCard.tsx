// API-READY: no direct API call in this UI component
import React from 'react';

interface KpiCardProps {
  label: string;
  value: string;
  trend?: {
    value: string;
    isUp: boolean;
  };
  icon: React.ReactNode;
}

const KpiCard = ({ label, value, trend, icon }: KpiCardProps) => {
  return (
    <div className="kpi-card p-8 group border-b border-[var(--dash-border)] hover:-translate-y-0.5 transition-all duration-[var(--transition)] hover:shadow-xl hover:shadow-black/20">
      <div className="flex justify-between items-center mb-10">
        <div className="w-10 h-10 rounded-full bg-[var(--dash-accent-dim)] flex items-center justify-center text-[var(--dash-accent)] shadow-sm group-hover:bg-[var(--dash-accent)] group-hover:text-black transition-colors duration-[var(--transition)]">
          {icon}
        </div>
        {trend && (
           <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-tight ${
             trend.isUp 
               ? 'bg-[var(--dash-success)]/10 text-[var(--dash-success)] border border-[var(--dash-success)]/20' 
               : 'bg-[var(--dash-danger)]/10 text-[var(--dash-danger)] border border-[var(--dash-danger)]/20'
           }`}>
             {trend.isUp ? '↑' : '↓'} {trend.value}
           </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-[36px] font-light leading-none tracking-tighter text-[var(--dash-text)] transition-colors group-hover:text-white">
          {value}
        </div>
        <div className="text-[12px] uppercase font-bold tracking-[0.2em] text-[var(--dash-muted)] group-hover:text-[var(--dash-text-2)] transition-colors">
          {label}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;
