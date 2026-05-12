import React from 'react';

const NotificationsPage = () => {
  const notifications = [
    {
      id: '1',
      group: 'Aujourd\'hui',
      items: [
        { id: 'n1', type: 'Commande', title: 'Nouvelle commande encaissée', description: 'Commande #MR-2024-001 par Ganda Moke (850,000 FC)', time: 'il y a 2 min', read: false },
        { id: 'n2', type: 'Stock', title: 'Alerte Stock Critique', description: 'Robe Saphir Kinshasa : Seulement 3 unités restantes', time: 'il y a 1h', read: false },
      ]
    },
    {
      id: '2',
      group: 'Hier',
      items: [
        { id: 'n3', type: 'Paiement', title: 'Versement validé', description: 'Traitement mensuel Stripe effectué vers BCDC', time: 'il y a 22h', read: true },
        { id: 'n4', type: 'Système', title: 'Mise à jour Logicielle', description: 'Version 2.4.0 active : Amélioration du moteur de recherche', time: 'il y a 1j', read: true },
      ]
    }
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'Commande': return 'var(--dash-accent)';
      case 'Stock': return 'var(--dash-warning)';
      case 'Paiement': return 'var(--dash-success)';
      case 'Système': return 'var(--dash-info)';
      default: return 'var(--dash-muted)';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-700">
      <div className="flex justify-between items-end border-b border-[var(--dash-border)] pb-8">
        <div>
          <h1 className="text-2xl font-light tracking-tight text-[var(--dash-text)]">Centre de Notifications</h1>
          <div className="flex space-x-4 mt-6">
             {['Tout', 'Commandes', 'Logistique', 'Système'].map((f, i) => (
                <button key={f} className={`px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest border transition-all ${i === 0 ? 'bg-[var(--dash-accent)] border-[var(--dash-accent)] text-black shadow-lg' : 'border-[var(--dash-border)] text-[var(--dash-muted)] hover:text-white'}`}>
                   {f.toUpperCase()}
                </button>
             ))}
          </div>
        </div>
        <button className="text-[10px] uppercase font-black tracking-widest text-[var(--dash-accent)] hover:underline mb-2">
          Tout marquer comme lu
        </button>
      </div>

      <div className="space-y-12">
        {notifications.map(group => (
          <div key={group.group} className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[var(--dash-muted)] pl-4">{group.group}</h3>
            <div className="space-y-2">
              {group.items.map(note => (
                <div 
                  key={note.id} 
                  className={`dash-card p-6 flex items-start space-x-6 border-l-2 transition-all cursor-pointer ${note.read ? 'opacity-60 bg-[var(--dash-surface-2)]/30 border-transparent' : 'border-[var(--dash-accent)]'}`}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${getTypeStyle(note.type)}15`, color: getTypeStyle(note.type) }}>
                     <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: getTypeStyle(note.type) }}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--dash-muted)] mb-1">{note.type}</span>
                       <span className="text-[10px] text-[var(--dash-muted)] font-medium italic">{note.time}</span>
                    </div>
                    <h4 className="text-[14px] font-bold text-[var(--dash-text)]">{note.title}</h4>
                    <p className="text-[12px] text-[var(--dash-text-2)] mt-1.5 leading-relaxed">{note.description}</p>
                  </div>
                  {!note.read && (
                    <button className="w-8 h-8 rounded-full hover:bg-[var(--dash-surface-2)] flex items-center justify-center text-[var(--dash-muted)] hover:text-white transition-colors">
                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-40 opacity-10">
           <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mb-8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /><path d="M12 2v2" /></svg>
           <p className="text-[12px] uppercase font-black tracking-[0.5em]">Silence absolu</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
