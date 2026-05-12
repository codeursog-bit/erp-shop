"use client";

// API-READY: fetch('/api/tenant/settings') GET + PUT when backend is live
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'boutique' | 'domaine' | 'paiements' | 'notifications' | 'securite';

const ParametresPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('boutique');
  const [isDirty, setIsDirty] = useState(false);
  const [accentColor, setAccentColor] = useState('#C8A96E');

  // Form States
  const [boutiqueData, setBoutiqueData] = useState({
    name: 'Racine by Ganda',
    slogan: 'L\'élégance du Wax au cœur de Kinshasa',
    description: 'Une maison de couture dédiée à l\'excellence et à la promotion de l\'artisanat Congolais.',
    address: '24 Avenue du Fleuve, Gombe',
    city: 'Kinshasa',
    country: 'RD Congo',
    phone: '+243 81 000 0000',
    email: 'contact@racinebyganda.cd',
    insta: 'racine_ganda',
    fb: 'racinebyganda',
    wa: '+243810000000'
  });

  const [domainData, setDomainData] = useState({
    subdomain: 'racine-ganda',
    customDomain: 'boutique.racinebyganda.cd',
    status: 'active'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    newOrder: true,
    lowStock: true,
    newCustomer: false,
    paymentReceived: true,
    weeklyReport: false,
  });

  const [dnsOpen, setDnsOpen] = useState(false);

  // Update accent color in CSS variable for live preview
  useEffect(() => {
    document.documentElement.style.setProperty('--dash-accent', accentColor);
    document.documentElement.style.setProperty('--color-accent', accentColor);
  }, [accentColor]);

  const handleInputChange = (field: string, value: any) => {
    setBoutiqueData(prev => ({ ...prev, [field]: value }));
    setIsDirty(true);
  };

  const handleNotificationToggle = (key: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({ ...prev, [key]: !prev[key] }));
    setIsDirty(true);
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'boutique', label: 'Ma Boutique', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
    { id: 'domaine', label: 'Domaine & URL', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
    { id: 'paiements', label: 'Paiements', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg> },
    { id: 'notifications', label: 'Notifications', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg> },
    { id: 'securite', label: 'Sécurité', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> },
  ];

  return (
    <div className="pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12 border-b border-[var(--dash-border)] pb-8">
        <h1 className="text-3xl font-light tracking-tight text-[var(--dash-text)]">Configuration Système</h1>
        <p className="text-[10px] text-[var(--dash-muted)] uppercase tracking-[0.3em] font-bold mt-2">
          Personnalisation et réglages avancés de votre instance Racine
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar Nav */}
        <div className="lg:w-72 flex flex-col space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-item w-full ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span className="shrink-0">{tab.icon}</span>
              <span className="text-[11px] uppercase tracking-widest font-bold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="dash-card p-10 space-y-12"
            >
              {activeTab === 'boutique' && (
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Identité de Marque</h3>
                    <div className="flex items-center space-x-10">
                       <div className="w-32 h-32 bg-[var(--dash-surface-2)] border-2 border-dashed border-[var(--dash-border)] rounded-[var(--radius-lg)] flex flex-col items-center justify-center text-[var(--dash-muted)] overflow-hidden relative group cursor-pointer hover:border-[var(--dash-accent)] transition-colors">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20.37 8.91l-8.17-3.61a2 2 0 0 0-1.59 0l-8.17 3.61a2 2 0 0 0 0 3.66l8.17 3.61a2 2 0 0 0 1.59 0l8.17-3.61a2 2 0 0 0 0-3.66z" /><path d="M4.5 14.1l7.5 3.3 7.5-3.3" /><path d="M4.5 17.5l7.5 3.3 7.5-3.3" /></svg>
                          <span className="text-[9px] uppercase font-bold tracking-widest mt-3">Logo Racine</span>
                          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--dash-accent)" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                             <span className="text-[9px] uppercase font-bold tracking-widest mt-2 text-white">Remplacer</span>
                          </div>
                       </div>
                       <div className="space-y-3">
                          <p className="text-sm font-bold text-[var(--dash-text)]">Signature Visuelle</p>
                          <p className="text-[11px] text-[var(--dash-muted)] max-w-xs leading-relaxed font-medium">Format recommandés: SVG vectoriel ou PNG haute résolution sans fond. Limite: 1 Mo.</p>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Nom Commercial</label>
                          <input 
                            type="text" 
                            value={boutiqueData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="dash-input"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Slogan de marque</label>
                          <input 
                            type="text" 
                            value={boutiqueData.slogan}
                            onChange={(e) => handleInputChange('slogan', e.target.value)}
                            className="dash-input"
                          />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Manifeste / Description</label>
                       <textarea 
                         rows={4}
                         value={boutiqueData.description}
                         onChange={(e) => handleInputChange('description', e.target.value)}
                         className="dash-input resize-none"
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Nuancier de Marque (Accent)</label>
                       <div className="flex items-center space-x-6 bg-[var(--dash-surface-2)] p-4 rounded-[var(--radius-lg)] border border-[var(--dash-border)]">
                          <div className="relative">
                            <input 
                              type="color" 
                              value={accentColor}
                              onChange={(e) => { setAccentColor(e.target.value); setIsDirty(true); }}
                              className="w-14 h-14 bg-transparent border-none cursor-pointer rounded-full overflow-hidden p-0"
                            />
                            <div className="absolute inset-0 rounded-full ring-2 ring-[var(--dash-border)] pointer-events-none"></div>
                          </div>
                          <div className="flex-1">
                            <input 
                              type="text" 
                              value={accentColor}
                              onChange={(e) => { setAccentColor(e.target.value); setIsDirty(true); }}
                              className="bg-[var(--dash-surface-3)] border border-[var(--dash-border)] rounded-[var(--radius-sm)] px-4 py-2 text-xs font-mono text-[var(--dash-accent)] outline-none focus:border-[var(--dash-accent)] w-32"
                            />
                            <p className="text-[10px] text-[var(--dash-muted)] mt-2 font-medium">Cette couleur s'appliquera instantanément à tous les boutons et accents système.</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-8 pt-10 border-t border-[var(--dash-border)]">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Contact & Siège Social</h3>
                    <div className="space-y-6">
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Adresse du Studio</label>
                          <input 
                            type="text" 
                            value={boutiqueData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            className="dash-input"
                          />
                       </div>
                       <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Ville</label>
                            <input 
                              type="text" 
                              value={boutiqueData.city}
                              onChange={(e) => handleInputChange('city', e.target.value)}
                              className="dash-input"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Pays</label>
                            <input 
                              type="text" 
                              value={boutiqueData.country}
                              onChange={(e) => handleInputChange('country', e.target.value)}
                              className="dash-input"
                            />
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'domaine' && (
                <div className="space-y-12">
                   <div className="space-y-6">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Infrastruture Web</h3>
                      <div className="space-y-10">
                         <div className="dash-card-ghost p-6 space-y-4">
                            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--dash-muted)]">URL Système Racine</label>
                            <div className="flex items-center justify-between">
                               <div className="text-sm font-bold text-[var(--dash-text)] tracking-tight">
                                  {domainData.subdomain}<span className="text-[var(--dash-muted)]">.racine.app</span>
                               </div>
                               <span className="badge badge-success shadow-[0_0_8px_var(--dash-success)]">
                                  <div className="w-1 h-1 rounded-full bg-current"></div>
                                  Propulsé
                               </span>
                            </div>
                         </div>

                         <div className="space-y-4">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Domaine Premium</label>
                            <div className="flex gap-4">
                               <input 
                                 type="text" 
                                 value={domainData.customDomain}
                                 onChange={(e) => { setDomainData(prev => ({ ...prev, customDomain: e.target.value })); setIsDirty(true); }}
                                 className="flex-1 dash-input"
                                 placeholder="ex: maison-ganda.cd"
                               />
                               <button className="btn-dash-primary whitespace-nowrap px-10">
                                  Connecter
                                </button>
                            </div>
                            <div className="flex items-center space-x-3 bg-[var(--dash-surface-2)] p-3 rounded-[var(--radius-md)] border border-[var(--dash-border)]">
                               <div className="w-2 h-2 rounded-full bg-[var(--dash-success)] animate-pulse"></div>
                               <span className="text-[10px] text-[var(--dash-text-2)] uppercase font-bold tracking-widest">Connecté & Protégé via SSL Shard</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-6 pt-12 border-t border-[var(--dash-border)]">
                      <button 
                        onClick={() => setDnsOpen(!dnsOpen)}
                        className="flex items-center justify-between w-full group"
                      >
                         <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-muted)] group-hover:text-[var(--dash-accent)] transition-colors">Configuration Technique DNS</h3>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform duration-[var(--transition-slow)] ${dnsOpen ? 'rotate-180 text-[var(--dash-accent)]' : 'text-[var(--dash-muted)]'}`}><polyline points="6 9 12 15 18 9" /></svg>
                      </button>
                      
                      {dnsOpen && (
                        <div className="space-y-6 animate-in slide-in-from-top-4 fade-in duration-500">
                           <p className="text-[11px] text-[var(--dash-muted)] leading-relaxed italic font-medium">Veuillez renseigner ces champs chez votre hébergeur pour finaliser la liaison :</p>
                           <div className="dash-card-flat p-8 space-y-6 font-mono">
                              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--dash-border)] pb-4 gap-2">
                                 <span className="text-[10px] text-[var(--dash-accent)] font-bold tracking-[0.1em]">ENREGISTREMENT CNAME</span>
                                 <span className="text-[10px] text-[var(--dash-muted)]">HOST: boutique</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white break-all">
                                   nodes.racinebyganda.systems
                                </span>
                                <button className="text-[10px] uppercase font-bold text-[var(--dash-accent)] hover:underline ml-4">Copier</button>
                              </div>
                           </div>
                        </div>
                      )}
                   </div>
                </div>
              )}

              {activeTab === 'paiements' && (
                <div className="space-y-12">
                   <div className="text-left space-y-3">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Passerelles de Transaction</h3>
                      <p className="text-[11px] text-[var(--dash-muted)] max-w-xl leading-relaxed font-medium uppercase tracking-widest">Activez les solutions Mobile Money et Bancaires pour votre boutique.</p>
                   </div>

                   <div className="grid grid-cols-1 gap-8">
                      {[
                        { id: 'stripe', name: 'Stripe Global', logo: 'S', color: 'bg-[#635BFF]', status: 'not_configured', desc: 'Paiements internationaux par carte bancaire (Visa, MC, AMEX).' },
                        { id: 'cinetpay', name: 'CinetPay Afrique', logo: 'CP', color: 'bg-[#F37021]', status: 'active', desc: 'Mobile Money local (Orange, Airtel, M-Pesa) & Visa/UBA.' },
                        { id: 'wave', name: 'Wave Mobile', logo: 'W', color: 'bg-[#1DB46F]', status: 'not_configured', desc: 'Encaissements instantanés via QR Code et App Wave.' }
                      ].map(method => (
                        <div key={method.id} className="dash-card-flat p-8 hover:border-[var(--dash-accent)] transition-all group">
                           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                              <div className="flex space-x-6 items-center">
                                 <div className={`w-16 h-16 shrink-0 rounded-[var(--radius-md)] ${method.color} flex items-center justify-center font-black text-xl text-white shadow-2xl`}>
                                    {method.logo}
                                 </div>
                                 <div className="space-y-2">
                                    <div className="flex items-center space-x-4">
                                       <h4 className="text-base font-bold text-white tracking-tight">{method.name}</h4>
                                       {method.status === 'active' ? (
                                         <span className="badge badge-success">Connecté</span>
                                       ) : (
                                         <span className="badge badge-neutral">Inactif</span>
                                       )}
                                    </div>
                                    <p className="text-[11px] text-[var(--dash-muted)] font-medium max-w-sm leading-relaxed">{method.desc}</p>
                                 </div>
                              </div>
                              <button className="btn-dash-ghost px-8 group-hover:border-[var(--dash-accent)] group-hover:text-[var(--dash-accent)]">
                                 Configurer
                              </button>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-12">
                   <div className="space-y-3">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Flux d'Alertes</h3>
                      <p className="text-[11px] text-[var(--dash-muted)] font-bold uppercase tracking-widest">Configuration des rappels et webhooks opérationnels.</p>
                   </div>

                   <div className="dash-card-flat overflow-hidden divide-y divide-[var(--dash-border)] shadow-xl shadow-black/20">
                      {[
                        { id: 'newOrder', label: 'Vente Validée', desc: 'Notification push et email à chaque tunnel de conversion réussi.' },
                        { id: 'lowStock', label: 'Alerte Inventaire', desc: 'Alerte critique quand un article descend sous le seuil de 5 unités.' },
                        { id: 'newCustomer', label: 'Acquisition Client', desc: 'Rapport immédiat lors de la création d\'un nouveau profil client.' },
                        { id: 'paymentReceived', label: 'Confirmation Bancaire', desc: 'Sync auto après reception effective des fonds sur la passerelle.' },
                        { id: 'weeklyReport', label: 'Performance Hebdo', desc: 'Résumé exécutif des revenus et du trafic chaque lundi matin.' }
                      ].map(item => (
                        <div key={item.id} className="p-8 flex items-center justify-between group hover:bg-[var(--dash-surface-2)] transition-colors">
                           <div className="space-y-2">
                              <h4 className="text-sm font-bold text-[var(--dash-text)] transition-colors group-hover:text-[var(--dash-accent)] tracking-tight">{item.label}</h4>
                              <p className="text-[11px] text-[var(--dash-muted)] font-medium leading-relaxed max-w-md">{item.desc}</p>
                           </div>
                           <button 
                             onClick={() => handleNotificationToggle(item.id as any)}
                             className={`w-12 h-6 rounded-full relative transition-all shadow-inner ${notificationSettings[item.id as keyof typeof notificationSettings] ? 'bg-[var(--dash-accent)]' : 'bg-[var(--dash-surface-3)]'}`}
                           >
                             <motion.div 
                               animate={{ x: notificationSettings[item.id as keyof typeof notificationSettings] ? 26 : 4 }}
                               className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg" 
                             />
                           </button>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              {activeTab === 'securite' && (
                <div className="space-y-12">
                   <div className="space-y-8">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Accès & Authentification</h3>
                      <div className="grid grid-cols-1 gap-6 max-w-md">
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Ancien Mot de Passe</label>
                            <input type="password" placeholder="••••••••" className="dash-input font-mono" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Nouveau Mot de Passe</label>
                            <input type="password" placeholder="••••••••" className="dash-input font-mono" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Confirmation</label>
                            <input type="password" placeholder="••••••••" className="dash-input font-mono" />
                         </div>
                         <button className="btn-dash-primary mt-4">
                            Modifier mes accès
                         </button>
                      </div>
                   </div>

                   <div className="space-y-8 pt-12 border-t border-[var(--dash-border)]">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-accent)]">Intégration API & Webhooks</h3>
                      <div className="space-y-6 max-w-2xl">
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Clé Privée (Test)</label>
                            <div className="relative">
                               <input type="password" value="rk_test_51Px9X7H6G4k8v2..." readOnly className="dash-input font-mono pr-20" />
                               <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-[var(--dash-accent)] uppercase tracking-widest">Voir</button>
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--dash-muted)]">Clé secrète (Live)</label>
                            <div className="relative">
                               <input type="password" value="rk_live_51Px9X7H6G4k8v2..." readOnly className="dash-input font-mono pr-20" />
                               <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-[var(--dash-accent)] uppercase tracking-widest">Voir</button>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-8 pt-12 border-t border-[var(--dash-border)]">
                      <div className="bg-[var(--dash-danger)]/5 border border-[var(--dash-danger)]/20 p-8 rounded-[var(--radius-lg)]">
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--dash-danger)] mb-4">Zone de Danger</h3>
                        <p className="text-[11px] text-[var(--dash-muted)] font-medium leading-relaxed max-w-xl mb-8 uppercase tracking-widest">La suppression de votre instance est irréversible. Toutes vos données de catalogue, clients et finances seront immédiatement purgées.</p>
                        <button className="px-8 py-3 bg-[var(--dash-danger)]/10 border border-[var(--dash-danger)]/40 text-[var(--dash-danger)] text-[10px] uppercase font-black tracking-widest rounded-[var(--radius-sm)] hover:bg-[var(--dash-danger)] transition-colors hover:text-white">
                           Supprimer le compte Boutique
                        </button>
                      </div>
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <AnimatePresence>
        {isDirty && (
          <motion.div 
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 150, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 lg:left-[260px] bg-[var(--dash-surface-glass)] backdrop-blur-xl border-t border-[var(--dash-border)] p-8 z-[150] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center space-x-4">
               <div className="w-10 h-10 rounded-full bg-[var(--dash-accent-dim)] flex items-center justify-center text-[var(--dash-accent)] animate-pulse">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1-2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
               </div>
               <div>
                  <p className="text-xs font-bold text-white tracking-tight uppercase">Modifications Détectées</p>
                  <p className="text-[10px] text-[var(--dash-muted)] font-bold uppercase tracking-widest mt-0.5">Veuillez sauvegarder pour appliquer les changements.</p>
               </div>
            </div>
            <div className="flex space-x-6 w-full md:w-auto">
               <button 
                 onClick={() => { setIsDirty(false); window.location.reload(); }}
                 className="flex-1 md:flex-none btn-dash-ghost border-transparent hover:bg-transparent hover:text-white"
               >
                  Annuler
               </button>
               <button 
                 onClick={() => { setIsDirty(false); console.log("Sauvegarde boutique:", boutiqueData); }}
                 className="flex-1 md:flex-none btn-dash-primary px-12"
               >
                  Confirmer les Réglages
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ParametresPage;
