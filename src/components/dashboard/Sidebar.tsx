// API-READY: replace user data with fetch('/api/auth/me') when backend is live
import React from 'react';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  currentPath: string;
  isCollapsed?: boolean;
  onNavigate: (path: string) => void;
}

const Sidebar = ({ currentPath, isCollapsed, onNavigate }: SidebarProps) => {
  const router = useRouter();
  const navItems = [
    { 
      label: 'Vue d\'ensemble', 
      path: '/overview', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    { 
      label: 'Commandes', 
      path: '/commandes', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" />
        </svg>
      )
    },
    { 
      label: 'Catalogue', 
      path: '/catalogue', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
        </svg>
      )
    },
    { 
      label: 'Inventaire', 
      path: '/inventaire', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    { 
      label: 'Clients', 
      path: '/clients', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    { 
      label: 'Équipe', 
      path: '/equipe', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      )
    },
    { 
      label: 'Finances', 
      path: '/finances', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      )
    },
    { 
      label: 'Paramètres', 
      path: '/parametres', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      )
    },
    { 
      label: 'Rapports', 
      path: '/rapports', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      )
    },
    { 
      label: 'Notifications', 
      path: '/notifications', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    }
  ];

  const handleLogout = () => {
    router.push('/connexion');
  };

  return (
    <div className={`h-screen bg-[var(--dash-bg)] border-r border-[var(--dash-border)] flex flex-col transition-all duration-[var(--transition-slow)] ${isCollapsed ? 'w-[75px]' : 'w-[260px]'}`}>
      {/* Sidebar Top: Logo */}
      <div className={`p-8 mb-4 border-b border-[var(--dash-border)] flex items-center ${isCollapsed ? 'justify-center px-0' : 'space-x-4'}`}>
        {!isCollapsed ? (
          <div className="flex flex-col items-start overflow-hidden whitespace-nowrap">
            <h1 className="text-xl font-bold tracking-[0.4em] text-[var(--dash-text)] uppercase leading-none">
              RACINE
            </h1>
            <span className="text-[10px] text-[var(--dash-accent)] uppercase tracking-widest mt-1.5 font-bold">
              by Ganda
            </span>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--dash-accent)] flex items-center justify-center text-black font-black text-xs shadow-lg shadow-[var(--dash-accent-glow)]">R</div>
        )}
      </div>

      {!isCollapsed && (
        <div className="px-6 mb-8 overflow-hidden">
          <div className="dash-card-ghost py-3 px-4 flex items-center">
             <div className="w-2 h-2 rounded-full bg-[var(--dash-success)] mr-3 shadow-[0_0_8px_var(--dash-success)] animate-pulse"></div>
             <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--dash-text)] whitespace-nowrap">Atelier Kinshasa</span>
          </div>
        </div>
      )}

      {/* Nav Items */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              title={isCollapsed ? item.label : ''}
              className={`nav-item w-full ${isActive ? 'active' : ''} ${isCollapsed ? 'justify-center px-0' : ''}`}
            >
              <div className="shrink-0">
                {item.icon}
              </div>
              {!isCollapsed && (
                <span className="text-[11px] uppercase tracking-widest font-bold whitespace-nowrap">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar Bottom: User & Logout */}
      <div className="p-4 border-t border-[var(--dash-border)] space-y-3">
        {!isCollapsed ? (
          <div className="dash-card-flat p-4 flex items-center space-x-3">
            <div className={`w-9 h-9 rounded-full bg-[var(--dash-surface-3)] border border-[var(--dash-border)] text-[var(--dash-accent)] text-[11px] font-bold flex items-center justify-center shadow-inner`}>
              GM
            </div>
            <div className="flex-1 overflow-hidden">
              <span className="block text-xs font-bold text-[var(--dash-text)] uppercase tracking-tight truncate">Ganda Moke</span>
              <span className="block text-[9px] text-[var(--dash-muted)] uppercase tracking-widest font-bold">Propriétaire</span>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-[var(--dash-surface-3)] border border-[var(--dash-border)] text-[var(--dash-accent)] text-[10px] font-bold flex items-center justify-center mx-auto shadow-inner">
            GM
          </div>
        )}

        <button 
          onClick={handleLogout}
          className={`w-full flex items-center p-3 rounded-[var(--radius-md)] text-[var(--dash-danger)] hover:bg-[var(--dash-danger-bg)] transition-all group ${isCollapsed ? 'justify-center' : ''}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {!isCollapsed && <span className="ml-3 text-[10px] uppercase font-bold tracking-widest">Quitter</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
