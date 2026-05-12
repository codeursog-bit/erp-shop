"use client";

// API-READY: fetch('/api/team') when backend is live
import React, { useState, useEffect, useMemo } from 'react';
import { teamService, TeamMember } from '@/lib/mock/team';
import TeamSidebar from '@/components/dashboard/TeamSidebar';

const getAvatarData = (name: string) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const colors = ['bg-[#C8A96E]', 'bg-[#5BA375]', 'bg-[#C8943A]', 'bg-[#C85C5C]', 'bg-[#7A7268]'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return { initials, color: colors[Math.abs(hash) % colors.length] };
};

const EquipePage = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedDept, setSelectedDept] = useState('Tous');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      setLoading(true);
      try {
        const data = await teamService.getAll();
        setMembers(data);
      } catch (err) {
        console.error("Error fetching team:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  const departments = useMemo(() => {
    const depts = new Set(members.map(m => m.department));
    return ['Tous', ...Array.from(depts)];
  }, [members]);

  const filteredMembers = useMemo(() => {
    if (selectedDept === 'Tous') return members;
    return members.filter(m => m.department === selectedDept);
  }, [members, selectedDept]);

  const handleEdit = (member: TeamMember) => {
    setSelectedMember(member);
    setIsSidebarOpen(true);
  };

  const handleAdd = () => {
    setSelectedMember(null);
    setIsSidebarOpen(true);
  };

  if (loading) {
    return (
      <div className="space-y-10 animate-pulse p-8">
        <div className="h-10 bg-[var(--dash-surface-2)] rounded-[var(--radius-md)] w-64"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-56 dash-card opacity-50"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[var(--dash-border)] pb-8">
        <div>
          <h1 className="text-3xl font-light tracking-tight text-[var(--dash-text)]">Équipe & Talents</h1>
          <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">
            Organisation interne et gestion des accès collaborateurs
          </p>
        </div>
        <button 
          onClick={handleAdd}
          className="btn-dash-primary flex items-center space-x-3 px-8"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          <span>Nouveau Membre</span>
        </button>
      </div>

      {/* Filters & View Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
        <div className="flex flex-wrap gap-3">
          {departments.map(dept => (
             <button 
               key={dept}
               onClick={() => setSelectedDept(dept)}
               className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all border ${
                 selectedDept === dept 
                   ? 'bg-[var(--dash-accent)] border-[var(--dash-accent)] text-black shadow-lg shadow-[var(--dash-accent-dim)]' 
                   : 'bg-[var(--dash-surface-2)] border-[var(--dash-border)] text-[var(--dash-muted)] hover:text-white'
               }`}
             >
               {dept.toUpperCase()}
             </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 bg-[var(--dash-surface-2)] p-1 border border-[var(--dash-border)] rounded-full px-2">
          <button 
            onClick={() => setView('grid')}
            className={`p-2 rounded-full transition-all ${view === 'grid' ? 'bg-[var(--dash-accent)] text-black shadow-lg' : 'text-[var(--dash-muted)] hover:text-white'}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
          </button>
          <button 
            onClick={() => setView('list')}
            className={`p-2 rounded-full transition-all ${view === 'list' ? 'bg-[var(--dash-accent)] text-black shadow-lg' : 'text-[var(--dash-muted)] hover:text-white'}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredMembers.map((member) => {
            const { initials, color } = getAvatarData(member.name);
            const hoursPercent = Math.min((member.hoursThisWeek / 40) * 100, 100);
            
            return (
              <div key={member.id} className="dash-card p-8 group hover:-translate-y-1 transition-all duration-300 relative">
                <div className="flex justify-between items-start mb-10">
                  <div className="relative">
                    <div className={`w-[52px] h-[52px] rounded-full ${color} flex items-center justify-center text-sm font-black text-black border-2 border-white/20`}>
                      {initials}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[var(--dash-surface)] ${member.status === 'active' ? 'bg-[var(--dash-success)] shadow-[0_0_8px_var(--dash-success)]' : 'bg-[var(--dash-muted)]'}`}></div>
                  </div>
                  <button onClick={() => handleEdit(member)} className="p-2 text-[var(--dash-muted)] hover:text-[var(--dash-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                  </button>
                </div>

                <div className="space-y-1">
                  <h3 className="text-[15px] font-bold text-white tracking-tight">{member.name}</h3>
                  <p className="text-[10px] text-[var(--dash-accent)] uppercase font-black tracking-widest">{member.role.toUpperCase()}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="badge badge-neutral text-[8px] tracking-widest">{member.department.toUpperCase()}</span>
                </div>

                <div className="mt-10 space-y-4 pt-6 border-t border-[var(--dash-border)]">
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                       <span className="text-[9px] uppercase tracking-widest font-black text-[var(--dash-muted)]">Charge Hebdomadaire</span>
                       <span className="text-[11px] font-mono font-bold text-white">{member.hoursThisWeek}h<span className="text-[var(--dash-muted)] font-normal text-[9px] ml-1">/ 40h</span></span>
                    </div>
                    <div className="h-1 w-full bg-[var(--dash-surface-3)] rounded-full overflow-hidden">
                       <div className="h-full bg-[var(--dash-accent)]" style={{ width: `${hoursPercent}%` }}></div>
                    </div>
                  </div>
                  <div className="text-[10px] text-[var(--dash-muted)] font-medium leading-none flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    {member.email}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="dash-card-flat overflow-hidden shadow-xl shadow-black/20">
          <div className="overflow-x-auto">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Collaborateur</th>
                  <th>Rôle</th>
                  <th>Département</th>
                  <th>Contact</th>
                  <th>Charge Hebdo</th>
                  <th>Statut</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((m) => (
                  <tr key={m.id}>
                    <td>
                      <div className="flex items-center space-x-4">
                         <div className="relative">
                            <div className={`w-10 h-10 rounded-full ${getAvatarData(m.name).color} flex items-center justify-center text-xs font-bold text-black border-2 border-[var(--dash-surface)]`}>
                               {getAvatarData(m.name).initials}
                            </div>
                            <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[var(--dash-surface)] ${m.status === 'active' ? 'bg-[var(--dash-success)] shadow-[0_0_5px_var(--dash-success)]' : 'bg-[var(--dash-muted)]'}`}></div>
                         </div>
                         <span className="text-[13px] font-bold text-[var(--dash-text)] tracking-tight">{m.name}</span>
                      </div>
                    </td>
                    <td className="text-[11px] text-[var(--dash-text-2)] uppercase tracking-widest font-bold">{m.role}</td>
                    <td>
                       <span className="badge badge-neutral">
                          {m.department}
                       </span>
                    </td>
                    <td className="text-[11px] text-[var(--dash-text-2)] tracking-tight">{m.email}</td>
                    <td>
                       <div className="flex flex-col gap-2 min-w-[120px]">
                          <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                             <span>{m.hoursThisWeek}h</span>
                             <span className="text-[var(--dash-muted)] font-normal">/ 40h</span>
                          </div>
                          <div className="h-1 w-full bg-[var(--dash-surface-3)] rounded-full overflow-hidden">
                             <div className="h-full bg-[var(--dash-accent)]" style={{ width: `${(m.hoursThisWeek / 40) * 100}%` }}></div>
                          </div>
                       </div>
                    </td>
                    <td>
                       <div className="badge badge-success">
                          <div className="w-1 h-1 rounded-full bg-current"></div>
                          En Ligne
                       </div>
                    </td>
                    <td>
                      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                         <button onClick={() => handleEdit(m)} className="btn-dash-ghost p-2 px-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                         </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sidebar Overlay */}
      <TeamSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        member={selectedMember}
      />
    </div>
  );
};

export default EquipePage;
