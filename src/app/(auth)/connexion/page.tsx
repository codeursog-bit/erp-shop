"use client";

// API-READY: replace mock login with POST fetch('/api/auth/login') when backend is live
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock Auth Logic
    if (email === 'admin@racinebyganda.com' && password === 'demo2024') {
      router.push('/overview');
    } else {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="min-h-screen flex bg-[var(--color-surface)]">
      {/* Left: Brand Panel (Hidden on Mobile) */}
      <div className="hidden lg:flex w-[45%] bg-[var(--color-primary)] relative overflow-hidden flex-col items-center justify-center p-20">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, var(--color-accent) 25%, transparent 25%), 
                              linear-gradient(-45deg, var(--color-accent) 25%, transparent 25%), 
                              linear-gradient(45deg, transparent 75%, var(--color-accent) 75%), 
                              linear-gradient(-45deg, transparent 75%, var(--color-accent) 75%)`,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 0 40px, 40px 40px, 40px 0'
          }}></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="mb-10">
            <h1 className="text-4xl font-bold tracking-[0.4em] text-white uppercase leading-none">
              RACINE
            </h1>
            <span className="text-[12px] text-[var(--color-accent)] uppercase tracking-[0.6em] mt-2 block ml-[0.6em]">
              by Ganda
            </span>
          </div>
          <div className="w-12 h-[1px] bg-[var(--color-accent)] mb-10"></div>
          <p className="text-[var(--dash-muted)] text-sm uppercase tracking-[0.3em] font-light max-w-xs leading-loose">
            Luxe éthique & Héritage Congolais. <br />
            Gestion Intégrée.
          </p>
        </div>

        <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.4em] text-[var(--dash-surface-3)]">
          Kinshasa · Paris · Pointe-Noire
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-20 lg:px-32 bg-white">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-medium tracking-tight text-[var(--color-primary)] mb-2">Espace Marque</h2>
            <p className="text-[var(--color-muted)] text-sm font-light">Accédez à votre tableau de bord de gestion.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Email Professionnel</label>
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-5 py-4 border bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] transition-colors rounded-[var(--radius-sm)] ${error ? 'border-red-500' : 'border-[var(--color-border)]'}`}
                    placeholder="admin@racinebyganda.com"
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-border)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Mot de Passe</label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-5 py-4 border bg-[var(--color-surface)] text-sm outline-none focus:border-[var(--color-accent)] transition-colors rounded-[var(--radius-sm)] ${error ? 'border-red-500' : 'border-[var(--color-border)]'}`}
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-xs font-bold uppercase tracking-widest animate-in fade-in duration-300">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className={`w-4 h-4 border border-[var(--color-border)] rounded-[var(--radius-sm)] flex items-center justify-center transition-colors ${rememberMe ? 'bg-[var(--color-primary)] border-[var(--color-primary)]' : 'group-hover:border-[var(--color-accent)]'}`}>
                  {rememberMe && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
                </div>
                <input type="checkbox" className="hidden" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-muted)]">Se souvenir de moi</span>
              </label>
              
              <button type="button" className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-accent)] hover:underline">
                Mot de passe oublié ?
              </button>
            </div>

            <button type="submit" className="w-full btn-primary !py-5 uppercase tracking-[0.3em] shadow-lg">
              Connexion
            </button>
          </form>
        </div>

        <div className="mt-20 text-center lg:hidden">
          <div className="mb-4">
            <h1 className="text-xl font-bold tracking-[0.3em] text-[var(--color-primary)] uppercase">RACINE</h1>
            <span className="text-[10px] text-[var(--color-accent)] uppercase tracking-widest block mt-1">by Ganda</span>
          </div>
          <div className="text-[8px] uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Kinshasa · Paris · Pointe-Noire
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
