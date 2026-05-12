// API-READY: replace productService.getFeatured() with fetch('/api/products?featured=true')
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/public/Navbar';
import ProductCard from '@/components/public/ProductCard';
import { productService, Product } from '@/lib/mock/products';
import { BRAND_IMAGES } from '@/lib/mock/images';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    productService.getFeatured().then(setFeaturedProducts);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const collections = [
    { label: 'Prêt-à-porter', image: BRAND_IMAGES.collection_pret, href: '/collections?cat=Vêtements' },
    { label: 'Wax Prints',    image: BRAND_IMAGES.collection_wax,  href: '/collections?cat=Wax' },
    { label: 'Accessoires',   image: BRAND_IMAGES.collection_access, href: '/collections?cat=Accessoires' },
  ];

  return (
    <div className="bg-[var(--color-surface)] selection:bg-[var(--color-accent)] selection:text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col md:flex-row pt-20 md:pt-0">
        {/* Left: editorial image */}
        <div className="w-full md:w-[55%] h-[65vh] md:h-screen relative bg-[var(--color-surface-2)]">
          <Image
            src={BRAND_IMAGES.hero}
            alt="Racine by Ganda — collection signature"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
            quality={90}
            className="object-cover"
          />
          {/* subtle dark gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Right: manifesto */}
        <div className="w-full md:w-[45%] flex items-center px-8 md:px-20 py-20 bg-white">
          <div className="max-w-md">
            <span className="block text-[10px] uppercase tracking-[0.5em] text-[var(--color-muted)] mb-8">
              Pointe-Noire · Brazzaville · Paris
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[var(--color-primary)] mb-10">
              Porter ses <br />
              <span className="italic font-light text-[var(--color-accent)]">Racines</span>
            </h1>
            <p className="text-base text-[var(--color-text)] leading-relaxed mb-12 font-light">
              La maison Racine célèbre l&apos;héritage textile congolais à travers des pièces sculpturales,
              où le Wax premium rencontre la structure contemporaine.
            </p>
            <a href="/collections" className="btn-primary group inline-flex">
              Découvrir la Collection
              <svg className="ml-3 transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-28 px-6 md:px-20">
        <div className="mb-16 flex items-center">
          <h2 className="text-3xl font-medium tracking-tight whitespace-nowrap mr-12">Nouveautés</h2>
          <div className="h-[1px] w-full bg-[var(--color-border)]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="/collections" className="btn-ghost inline-flex">
            Voir toute la collection
          </a>
        </div>
      </section>

      {/* ── BRAND STORY BANNER ── */}
      <section className="bg-[var(--color-primary)] flex flex-col md:flex-row overflow-hidden min-h-[500px]">
        <div className="w-full md:w-1/2 p-14 md:p-28 flex flex-col justify-center">
          <div className="w-20 h-[1px] bg-[var(--color-accent)] mb-10" />
          <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-inv)] leading-tight mb-8">
            L&apos;ADN Ganda :<br />
            Réinventer le patrimoine.
          </h2>
          <p className="text-[var(--color-muted)] text-base leading-relaxed max-w-lg mb-10">
            Chaque pièce est une conversation entre hier et demain. Nous sourçons nos tissus
            auprès des derniers artisans de Pointe-Noire pour créer une garde-robe qui raconte votre histoire.
          </p>
          <a href="/notre-histoire" className="btn-ghost inline-flex self-start !border-white/20 !text-white hover:!bg-white/10">
            Notre histoire
          </a>
        </div>
        {/* Right: real atelier image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <Image
            src={BRAND_IMAGES.storyBanner}
            alt="Atelier Racine by Ganda — Pointe-Noire"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </section>

      {/* ── COLLECTIONS GRID ── */}
      <section className="p-6 md:p-16">
        <div className="mb-12 flex items-center">
          <h2 className="text-2xl font-medium tracking-tight whitespace-nowrap mr-10">Collections</h2>
          <div className="h-[1px] w-full bg-[var(--color-border)]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-auto md:h-[60vh]">
          {collections.map((col) => (
            <a
              key={col.label}
              href={col.href}
              className="group relative overflow-hidden cursor-pointer rounded-[var(--radius-sm)] bg-[var(--color-surface-2)]"
            >
              <Image
                src={col.image}
                alt={`Collection ${col.label}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={80}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/22 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl uppercase tracking-[0.3em] font-light transition-transform duration-500 group-hover:scale-105 drop-shadow-sm">
                  {col.label}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-28 border-t border-[var(--color-border)] px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-4 text-[var(--color-text)]">Restez informé</h2>
          <p className="text-[var(--color-muted)] text-sm mb-10">
            Inscrivez-vous pour recevoir nos nouvelles collections et invitations exclusives.
          </p>
          {submitted ? (
            <div className="p-4 bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium rounded-[var(--radius-sm)]">
              Merci pour votre inscription !
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-6 py-4 border border-[var(--color-border)] bg-white text-sm outline-none focus:border-[var(--color-accent)] transition-colors rounded-[var(--radius-sm)]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn-primary !px-10 text-xs">
                S&apos;inscrire
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[var(--color-primary)] text-[var(--color-text-inv)] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14 mb-20">
            <div>
              <h4 className="text-base font-bold tracking-[0.3em] mb-6">RACINE</h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-8">
                Luxe éthique et héritage congolais.<br />Fondé à Pointe-Noire, porté partout.
              </p>
              <div className="flex gap-5">
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="text-[var(--color-muted)] hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="text-[var(--color-muted)] hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="#" aria-label="WhatsApp" className="text-[var(--color-muted)] hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.8 19.79 19.79 0 0 1 1.06 3.17 2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-[var(--color-accent)]">Navigation</h5>
              <ul className="space-y-3 text-sm text-[var(--color-muted)] font-light">
                {['Nouveautés', 'Collections', 'Accessoires', 'Bijoux'].map(l => (
                  <li key={l}><a href="/collections" className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-[var(--color-accent)]">La Maison</h5>
              <ul className="space-y-3 text-sm text-[var(--color-muted)] font-light">
                {['Notre Histoire', 'Showroom P/N', 'Éthique & Sourcing', 'Presse'].map(l => (
                  <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-[var(--color-accent)]">Support</h5>
              <ul className="space-y-3 text-sm text-[var(--color-muted)] font-light">
                {['Expédition', 'Retours', 'Guide des tailles', 'Contact'].map(l => (
                  <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-[var(--color-muted)] uppercase tracking-widest gap-3">
            <p>© 2026 Racine by Ganda. Tous droits réservés.</p>
            <p>Fait avec <span className="text-[var(--color-accent)]">❤</span> à Pointe-Noire</p>
          </div>
        </div>
      </footer>
    </div>
  );
}