"use client";

// API-READY: replace productService.getBySlug(slug) with fetch('/api/products/' + slug) when backend is live
import React, { useEffect, useState, useRef, use } from 'react';
import Navbar from '@/components/public/Navbar';
import ProductCard from '@/components/public/ProductCard';
import { productService, Product } from '@/lib/mock/products';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { slug } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('desc');
  const [isAdded, setIsAdded] = useState(false);

  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    productService.getBySlug(slug).then((data) => {
      if (data) {
        setProduct(data);
        setSelectedColor(data.variants[0]?.color || '');
        // Fetch related products (featured as fallback)
        productService.getFeatured().then(featured => {
          setRelatedProducts(featured.filter(p => p.id !== data.id));
        });
      }
    });
  }, [slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, [product]);

  const handleAddToCart = () => {
    if (!product) return;
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      qty: quantity,
      image: product.images[0]
    };
    
    const existingCart = JSON.parse(localStorage.getItem('racine_cart') || '[]');
    localStorage.setItem('racine_cart', JSON.stringify([...existingCart, cartItem]));
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  if (!product) return null;

  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left: Sticky Image Gallery */}
          <div className="w-full md:w-[58%]">
            <div className="md:sticky md:top-32 space-y-4">
              <div className="aspect-[3/4] bg-[var(--color-surface-2)] overflow-hidden rounded-[var(--radius-sm)] relative group">
                {/* Main Image (Mock Illustration since real assets won't load) */}
                <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[var(--color-muted)] opacity-20">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[var(--color-muted)]">Vue {selectedImage + 1}</span>
                  </div>
                </div>
                
                {product.isNew && (
                  <span className="absolute top-6 left-6 text-[10px] font-bold uppercase tracking-widest bg-white px-3 py-1.5 shadow-sm">Nouveau</span>
                )}
                {product.comparePrice && (
                  <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest bg-[var(--color-accent)] text-white px-3 py-1.5 shadow-sm">Promo</span>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-white rounded-[var(--radius-sm)] border-2 transition-all ${selectedImage === idx ? 'border-[var(--color-accent)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <div className="w-full h-full flex items-center justify-center opacity-10">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="1" /></svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Info Area */}
          <div className="w-full md:w-[42%] space-y-8">
            <div>
              {/* Breadcrumbs */}
              <nav className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] flex items-center space-x-2 mb-6">
                <a href="/" className="hover:text-[var(--color-accent)]">Accueil</a>
                <span>/</span>
                <a href="/collections" className="hover:text-[var(--color-accent)]">Collections</a>
                <span>/</span>
                <span className="text-[var(--color-text)]">{product.name}</span>
              </nav>

              <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-[0.3em] mb-4 block">
                {product.category}
              </span>
              <h1 className="text-4xl font-medium tracking-tight text-[var(--color-primary)] mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-light text-[var(--color-accent)]">
                  {product.price.toLocaleString('fr-FR')} FC
                </span>
                {product.comparePrice && (
                  <span className="text-lg text-[var(--color-muted)] line-through decoration-1">
                    {product.comparePrice.toLocaleString('fr-FR')} FC
                  </span>
                )}
              </div>
            </div>

            <div className="h-[1px] w-full bg-[var(--color-border)]"></div>

            {/* Selectors */}
            <div className="space-y-8">
              {/* Color Selector */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Couleur</h3>
                <div className="flex space-x-3">
                  {['#111110', '#C8A96E', '#EFEBE4'].map((color) => (
                    <button 
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all p-0.5 ${selectedColor === color ? 'border-[var(--color-accent)]' : 'border-transparent'}`}
                    >
                      <div className="w-full h-full rounded-full" style={{ backgroundColor: color }}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                   <h3 className="text-xs font-bold uppercase tracking-widest">Taille</h3>
                   <button className="text-[10px] uppercase tracking-widest text-[var(--color-muted)] hover:underline">Guide des tailles</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => {
                    const isAvailable = product.variants.some(v => v.size === size && v.stock > 0);
                    return (
                      <button 
                        key={size}
                        disabled={!isAvailable}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[50px] px-3 py-3 text-xs font-bold border transition-all rounded-[var(--radius-sm)] ${!isAvailable ? 'opacity-30 line-through' : ''} ${selectedSize === size ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white' : 'border-[var(--color-border)] hover:border-[var(--color-accent)]'}`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Quantité</h3>
                <div className="flex items-center w-fit border border-[var(--color-border)] p-1 rounded-[var(--radius-sm)] bg-white">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-[var(--color-surface-2)] transition-colors">-</button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(q => Math.min(10, q + 1))} className="w-10 h-10 flex items-center justify-center hover:bg-[var(--color-surface-2)] transition-colors">+</button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4" ref={ctaRef}>
              <button 
                onClick={handleAddToCart}
                disabled={!selectedSize || product.isSoldOut}
                className={`w-full py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all rounded-[var(--radius-sm)] shadow-md ${selectedSize ? 'bg-[var(--color-primary)] text-white hover:opacity-90 active:scale-[0.98]' : 'bg-[var(--color-border)] text-[var(--color-muted)] cursor-not-allowed'}`}
              >
                {isAdded ? 'Produit ajouté !' : product.isSoldOut ? 'Épuisé' : 'Ajouter au panier'}
              </button>
              
              <button className="w-full mt-4 flex items-center justify-center space-x-3 py-4 text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-all group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:fill-red-500 group-hover:stroke-red-500 transition-all">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span>Ajouter à la wishlist</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-[var(--color-border)]">
              {[
                { label: 'Livraison 48h', icon: <path d="M10 17h4V5H2v12h3m0 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M13 5h9l-1 7h-8z" /> },
                { label: 'Retours 14j', icon: <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8m0 0V3m0 5h5" /> },
                { label: 'Paiement Sécurisé', icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></> }
              ].map(badge => (
                <div key={badge.label} className="flex flex-col items-center text-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] mb-2">
                    {badge.icon}
                  </svg>
                  <span className="text-[8px] uppercase font-bold tracking-widest text-[var(--color-muted)]">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="pt-8 space-y-4">
              {[
                { id: 'desc', label: 'Description du produit', content: product.description },
                { id: 'comp', label: 'Composition & Entretien', content: '100% Coton Wax Premium. Lavage à froid délicat. Repassage doux sur l\'envers.' },
                { id: 'size', label: 'Guide des tailles', content: (
                  <table className="w-full text-[10px] uppercase tracking-widest mt-4">
                    <thead>
                      <tr className="border-b border-[var(--color-border)]">
                        <th className="py-2 text-left">Taille</th>
                        <th className="py-2 text-center">Poitrine</th>
                        <th className="py-2 text-center">Hanches</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--color-muted)]">
                      <tr><td className="py-2">XS</td><td className="py-2 text-center">82-86</td><td className="py-2 text-center">88-92</td></tr>
                      <tr><td className="py-2">S</td><td className="py-2 text-center">86-90</td><td className="py-2 text-center">92-96</td></tr>
                      <tr><td className="py-2">M</td><td className="py-2 text-center">90-94</td><td className="py-2 text-center">96-100</td></tr>
                    </tbody>
                  </table>
                )},
                { id: 'ship', label: 'Livraison & Retours', content: 'Livraison standard gratuite en RDC pour toute commande supérieure à 200,000 FC. Retours gratuits sous 14 jours.' }
              ].map(item => (
                <div key={item.id} className="border-b border-[var(--color-border)] last:border-0">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                    className="w-full py-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] group"
                  >
                    <span>{item.label}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${activeAccordion === item.id ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9" /></svg>
                  </button>
                  {activeAccordion === item.id && (
                    <div className="pb-6 text-sm text-[var(--color-muted)] font-light leading-relaxed animate-in fade-in slide-in-from-top-1">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32 pt-20 border-t border-[var(--color-border)]">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-3xl font-medium tracking-tight">Vous aimerez aussi</h2>
             <a href="/collections" className="text-xs uppercase tracking-widest font-bold text-[var(--color-accent)] hover:underline">Voir tout</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {relatedProducts.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
             ))}
          </div>
        </section>
      </main>

      {/* Sticky Mobile Bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-[var(--color-border)] p-4 transform transition-transform duration-500 ${isStickyVisible ? 'translate-y-0' : 'translate-y-full'}`}>
         <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
            <div className="flex-1 overflow-hidden">
               <h4 className="text-[10px] font-bold uppercase truncate">{product.name}</h4>
               <p className="text-[10px] text-[var(--color-accent)] font-bold">{product.price.toLocaleString('fr-FR')} FC</p>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={!selectedSize || product.isSoldOut}
              className="px-6 py-3 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded-[var(--radius-sm)]"
            >
              {isAdded ? 'Ajouté' : 'Panier'}
            </button>
         </div>
      </div>
    </div>
  );
};

export default ProductPage;
