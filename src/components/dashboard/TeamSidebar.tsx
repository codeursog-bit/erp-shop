"use client";

// API-READY: fetch('/api/team') for POST or PUT when backend is live
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TeamMember, TeamStatus } from '@/lib/mock/team';

interface TeamSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  member?: TeamMember | null;
}

const TeamSidebar = ({ isOpen, onClose, member }: TeamSidebarProps) => {
  const [formData, setFormData] = useState<Partial<TeamMember>>({
    name: '',
    role: '',
    email: '',
    phone: '',
    department: 'Production',
    hireDate: new Date().toISOString().split('T')[0],
    status: 'active',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (member) {
      setFormData(member);
    } else {
      setFormData({
        name: '',
        role: '',
        email: '',
        phone: '',
        department: 'Production',
        hireDate: new Date().toISOString().split('T')[0],
        status: 'active',
      });
    }
    setErrors({});
  }, [member, isOpen]);

  const departments = ['Production', 'Ventes', 'Administration', 'Opérations', 'Design', 'Finance', 'Direction'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Le nom est requis';
    if (!formData.email) newErrors.email = 'L\'email est requis';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Membre enregistré:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[550px] bg-[var(--dash-surface-glass)] backdrop-blur-xl border-l border-[var(--dash-border)] z-[210] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="p-10 border-b border-[var(--dash-border)] flex justify-between items-center bg-[var(--dash-surface-2)]">
              <div>
                <h2 className="text-2xl font-light text-[var(--dash-text)] tracking-tight">
                  {member ? 'Fiche Collaborateur' : 'Recrutement Talent'}
                </h2>
                <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">
                  Administration des ressources humaines
                </p>
              </div>
              <button 
                onClick={onClose}
                className="btn-dash-ghost p-3 px-3 hover:text-[var(--dash-danger)] transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
              <div className="space-y-8">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Identité du Candidat</h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Nom complet & Prénom</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className={`dash-input ${errors.name ? 'border-[var(--dash-danger)] shadow-[0_0_8px_rgba(200,92,92,0.2)]' : ''}`}
                      placeholder="e.g. Marie-Josée Bakwa"
                    />
                    {errors.name && <p className="text-[9px] text-[var(--dash-danger)] font-bold uppercase tracking-widest">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Email Professionnel</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className={`dash-input ${errors.email ? 'border-[var(--dash-danger)]' : ''}`}
                        placeholder="m.bakwa@racine.cd"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Contact Direct</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="dash-input"
                        placeholder="+243 ..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Positionnement & Organisation</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Rôle / Intitulé du Poste</label>
                      <input 
                        type="text" 
                        value={formData.role}
                        onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                        className="dash-input"
                        placeholder="ex: Designer de mode"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Département Assigné</label>
                      <div className="relative">
                         <select 
                          value={formData.department}
                          onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                          className="dash-input appearance-none cursor-pointer"
                        >
                          {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--dash-muted)]">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Date Effective d'Entrée</label>
                    <input 
                      type="date" 
                      value={formData.hireDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, hireDate: e.target.value }))}
                      className="dash-input"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Contrôle des Accès</h3>
                
                <div className="flex items-center justify-between p-6 bg-[var(--dash-surface-2)] border border-[var(--dash-border)] rounded-[var(--radius-lg)]">
                  <div>
                    <span className="block text-xs font-bold text-[var(--dash-text)] tracking-tight">Accès au Dashboard</span>
                    <span className="text-[10px] text-[var(--dash-muted)] font-medium uppercase tracking-wider">Autoriser la gestion des ressources</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">{formData.status === 'active' ? '' : 'Désactivé'}</span>
                    <button 
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, status: prev.status === 'active' ? 'inactive' : 'active' }))}
                      className={`w-12 h-6 rounded-full relative transition-all shadow-inner ${formData.status === 'active' ? 'bg-[var(--dash-accent)]' : 'bg-[var(--dash-surface-3)]'}`}
                    >
                      <motion.div 
                        animate={{ x: formData.status === 'active' ? 26 : 4 }}
                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md" 
                      />
                    </button>
                    <span className="text-[10px] uppercase font-bold tracking-widest ${formData.status === 'active' ? 'text-[var(--dash-accent)]' : 'text-[var(--dash-muted)]'}">{formData.status === 'active' ? 'Opérationnel' : ''}</span>
                  </div>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="p-10 border-t border-[var(--dash-border)] bg-[var(--dash-surface-2)] grid grid-cols-2 gap-6">
              <button 
                type="button"
                onClick={onClose}
                className="btn-dash-ghost border-transparent hover:bg-transparent hover:text-white"
              >
                Annuler
              </button>
              <button 
                onClick={handleSubmit}
                className="btn-dash-primary shadow-xl shadow-[var(--dash-accent-dim)]"
              >
                {member ? 'Mettre à jour la fiche' : 'Enregistrer le Profil'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TeamSidebar;
