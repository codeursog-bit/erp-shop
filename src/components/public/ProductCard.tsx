'use client';
// API-READY: product.images already contains real URLs from mock; swap mock service for API later

import React from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/mock/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const isFirst = index === 0;
  const aspectClass = isFirst ? 'aspect-[3/4]' : 'aspect-[4/5]';
  const imageUrl = product.images?.[0] ?? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85';

  return (
    <div
      className={`group flex flex-col cursor-pointer ${isFirst ? 'md:row-span-2' : ''}`}
      onClick={() => window.history.pushState({}, '', `/produits/${product.slug}`)}
    >
      {/* Image container */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[var(--color-surface-2)] rounded-[var(--radius-sm)]`}>
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        {/* NEW badge */}
        {product.isNew && (
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] uppercase tracking-widest font-bold bg-white px-2 py-1 text-[var(--color-primary)]">
              Nouveau
            </span>
          </div>
        )}

        {/* SOLD OUT overlay */}
        {product.isSoldOut && (
          <div className="absolute inset-0 z-20 bg-white/50 backdrop-blur-[2px] flex items-center justify-center">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-primary)]">
              Épuisé
            </span>
          </div>
        )}

        {/* Hover CTA */}
        {!product.isSoldOut && (
          <div className="absolute inset-x-0 bottom-0 p-5 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full btn-primary !py-3 text-xs">
              Voir le produit
            </button>
          </div>
        )}
      </div>

      {/* Info below image */}
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-[var(--color-text)] tracking-tight leading-snug">
            {product.name}
          </h3>
          <p className="text-[10px] text-[var(--color-muted)] uppercase tracking-widest mt-1">
            {product.category}
          </p>
        </div>
        <div className="text-sm font-light text-[var(--color-text)] whitespace-nowrap ml-4">
          {product.comparePrice ? (
            <div className="flex flex-col items-end">
              <span className="text-[var(--color-accent)] font-medium">
                {product.price.toLocaleString('fr-FR')} FC
              </span>
              <span className="line-through text-[var(--color-muted)] text-xs">
                {product.comparePrice.toLocaleString('fr-FR')} FC
              </span>
            </div>
          ) : (
            <span>{product.price.toLocaleString('fr-FR')} FC</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;