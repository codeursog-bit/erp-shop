// API-READY: replace profile data with fetch('/api/auth/me') when backend is live
import React, { useState } from 'react';

interface TopBarProps {
  title: string;
  onToggleSidebar: () => void;
  onOpenMobileMenu: () => void;
}

const TopBar = ({ title, onToggleSidebar, onOpenMobileMenu }: TopBarProps) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="h-[80px] bg-[var(--dash-surface-glass)] backdrop-blur-md border-b border-[var(--dash-border)] flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center">
        {/* Toggle Sidebar Button (Desktop/Tablet) */}
        <button 
          onClick={onToggleSidebar}
          className="hidden md:flex p-2.5 mr-6 bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-md)] text-[var(--dash-muted)] hover:text-[var(--dash-text)] hover:border-[var(--dash-border-hover)] transition-all"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={onOpenMobileMenu}
          className="flex md:hidden p-2 mr-4 text-[var(--dash-muted)]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--dash-text)]">{title}</h2>
      </div>

      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="hidden lg:flex relative">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="dash-input w-[320px] pl-10"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--dash-muted)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-[var(--dash-muted)] hover:text-[var(--dash-text)] transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[var(--dash-bg)]"></span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center space-x-2 p-1 hover:bg-[var(--dash-surface)] rounded-md transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--dash-accent)] text-white text-[10px] font-bold flex items-center justify-center">
              GM
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`text-[var(--dash-muted)] transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {isProfileOpen && (
            <>
              <div 
                className="fixed inset-0 z-30" 
                onClick={() => setIsProfileOpen(false)}
              ></div>
              <div className="absolute right-0 mt-3 w-64 dash-card z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-0">
                 <div className="p-5 border-b border-[var(--dash-border)] bg-[var(--dash-surface-2)]">
                    <span className="block text-xs font-bold text-[var(--dash-text)] uppercase tracking-widest mb-1">Ganda Moke</span>
                    <span className="block text-[10px] text-[var(--dash-muted)] uppercase tracking-widest font-medium">Directeur Artistique</span>
                 </div>
                 <div className="p-2">
                    <button className="nav-item w-full">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                       <span className="text-[11px] uppercase tracking-widest font-bold">Profil</span>
                    </button>
                    <button className="nav-item w-full">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                       <span className="text-[11px] uppercase tracking-widest font-bold">Paramètres</span>
                    </button>
                 </div>
                 <div className="p-2 border-t border-[var(--dash-border)]">
                    <button onClick={() => window.history.pushState({}, '', '/connexion')} className="nav-item w-full text-red-400 hover:bg-red-500/10">
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                       <span className="text-[11px] uppercase tracking-widest font-bold">Déconnexion</span>
                    </button>
                 </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
