"use client";

// API-READY: sidebar navigation links can be updated to real API routes when needed
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const currentPath = usePathname();
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-collapse on tablet size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 1024 && window.innerWidth >= 768) {
          setIsSidebarCollapsed(true);
        } else if (window.innerWidth >= 1024) {
          setIsSidebarCollapsed(false);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/overview': return 'Vue d\'ensemble';
      case '/commandes': return 'Commandes';
      case '/catalogue': return 'Catalogue';
      case '/inventaire': return 'Inventaire';
      case '/clients': return 'Clients';
      case '/equipe': return 'Équipe';
      case '/finances': return 'Finances';
      case '/parametres': return 'Paramètres';
      case '/rapports': return 'Rapports';
      case '/notifications': return 'Notifications';
      default: return 'Tableau de Bord';
    }
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[var(--dash-bg)] text-[var(--dash-text)] font-sans selection:bg-[var(--dash-accent)] selection:text-white">
      {/* Desktop/Tablet Sidebar */}
      <div className="hidden md:block sticky top-0 h-screen shrink-0 z-50">
        <Sidebar 
          currentPath={currentPath} 
          isCollapsed={isSidebarCollapsed}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 bottom-0 z-[70] md:hidden animate-in slide-in-from-left duration-300">
            <Sidebar 
              currentPath={currentPath} 
              isCollapsed={false}
              onNavigate={handleNavigate}
            />
          </div>
        </>
      )}

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar 
          title={getPageTitle(currentPath)} 
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />
        
        <main className="p-6 md:p-10 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
