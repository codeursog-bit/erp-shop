(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/mock/images.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API-READY: replace with real CDN URLs from your media storage (S3, Cloudinary, etc.)
__turbopack_context__.s([
    "BRAND_IMAGES",
    ()=>BRAND_IMAGES,
    "PRODUCT_FALLBACK",
    ()=>PRODUCT_FALLBACK,
    "PRODUCT_IMAGES",
    ()=>PRODUCT_IMAGES,
    "TEAM_AVATARS",
    ()=>TEAM_AVATARS,
    "getProductImages",
    ()=>getProductImages
]);
const BRAND_IMAGES = {
    hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
    hero2: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=85',
    storyBanner: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1400&q=85',
    atelier: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    showroom: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=85',
    collection_pret: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85',
    collection_wax: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85',
    collection_access: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=85'
};
const PRODUCT_IMAGES = {
    'robe-ebene-wax-premium': [
        'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=700&q=85',
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=85',
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=85',
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&q=85'
    ],
    'chemise-pn-chic': [
        'https://images.unsplash.com/photo-1594938298603-c8148c4b4157?w=700&q=85',
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&q=85',
        'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=700&q=85'
    ],
    'sac-zando-cuir': [
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=85',
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=85',
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700&q=85'
    ],
    'ensemble-lualaba': [
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85'
    ],
    'foulard-malkia': [
        'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=700&q=85',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=85'
    ],
    'pantalon-savane-lin': [
        'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=700&q=85',
        'https://images.unsplash.com/photo-1594938374182-a55e3af23dbc?w=700&q=85'
    ],
    'boucles-loango': [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=85',
        'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=700&q=85'
    ],
    'veste-officier-poto': [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=85',
        'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=85'
    ],
    'top-kouilou': [
        'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=700&q=85',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85'
    ],
    'ceinture-raphia-luxe': [
        'https://images.unsplash.com/photo-1618354691249-e4e9a5f3e59a?w=700&q=85'
    ],
    'sandales-fleuve-congo': [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=85',
        'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=700&q=85'
    ],
    'kimono-niari': [
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=85',
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&q=85'
    ]
};
const PRODUCT_FALLBACK = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85'
];
const TEAM_AVATARS = {
    'Ganda Moke': 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
    'Safi Nzuzi': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
    'Junior Bakwa': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    'Anny Bolamba': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
    'Patient Mukeba': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    'Nadine Yumba': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    'Blaise Nganga': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    'Carine Lelo': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80'
};
function getProductImages(slug) {
    return PRODUCT_IMAGES[slug] ?? PRODUCT_FALLBACK;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mock/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_PRODUCTS",
    ()=>MOCK_PRODUCTS,
    "productService",
    ()=>productService
]);
// API-READY: replace productService.methods with fetch('/api/products') when backend is live
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/images.ts [app-client] (ecmascript)");
;
const MOCK_PRODUCTS = [
    {
        id: 'prod_1',
        slug: 'robe-ebene-wax-premium',
        name: 'Robe Ébène Wax Premium',
        category: 'Vêtements',
        description: 'Une robe élégante taillée dans un wax de qualité supérieure aux motifs géométriques ancestraux revisités. Conçue dans l\'atelier de Pointe-Noire.',
        price: 125000,
        comparePrice: 150000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('robe-ebene-wax-premium'),
        variants: [
            {
                size: 'S',
                color: 'Noir/Or',
                stock: 5
            },
            {
                size: 'M',
                color: 'Noir/Or',
                stock: 8
            },
            {
                size: 'L',
                color: 'Noir/Or',
                stock: 3
            }
        ],
        isNew: true
    },
    {
        id: 'prod_2',
        slug: 'chemise-pn-chic',
        name: 'Chemise Pointe-Noire Chic',
        category: 'Vêtements',
        description: 'Chemise homme à col mao, détails en tissu pagne sur les poignets et la patte de boutonnage. Inspirée des rues de Tié-Tié.',
        price: 85000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('chemise-pn-chic'),
        variants: [
            {
                size: 'M',
                color: 'Blanc/Motifs Bleus',
                stock: 12
            },
            {
                size: 'L',
                color: 'Blanc/Motifs Bleus',
                stock: 15
            },
            {
                size: 'XL',
                color: 'Blanc/Motifs Bleus',
                stock: 7
            }
        ]
    },
    {
        id: 'prod_3',
        slug: 'sac-zando-cuir',
        name: 'Sac Zando en Cuir',
        category: 'Accessoires',
        description: 'Sac à main artisanal en cuir naturel avec finitions en bronze. Fabriqué à la main dans notre atelier de Pointe-Noire.',
        price: 195000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('sac-zando-cuir'),
        variants: [
            {
                size: 'Unique',
                color: 'Marron Terre',
                stock: 4
            }
        ]
    },
    {
        id: 'prod_4',
        slug: 'ensemble-lualaba',
        name: 'Ensemble Lualaba',
        category: 'Vêtements',
        description: 'Tailleur pantalon moderne pour femme, alliant structure contemporaine et imprimés wax du Congo-Brazzaville.',
        price: 210000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('ensemble-lualaba'),
        variants: [
            {
                size: '38',
                color: 'Vert Émeraude',
                stock: 2
            },
            {
                size: '40',
                color: 'Vert Émeraude',
                stock: 0
            }
        ],
        isSoldOut: true
    },
    {
        id: 'prod_5',
        slug: 'foulard-malkia',
        name: 'Foulard Malkia',
        category: 'Accessoires',
        description: 'Grand foulard en soie et coton, motifs inspirés de la nature du Kouilou. Teint à la main, pièce unique.',
        price: 45000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('foulard-malkia'),
        variants: [
            {
                size: 'Unique',
                color: 'Multicolore',
                stock: 25
            }
        ]
    },
    {
        id: 'prod_6',
        slug: 'pantalon-savane-lin',
        name: 'Pantalon Savane Lin',
        category: 'Vêtements',
        description: 'Pantalon léger en mélange lin et coton, idéal pour les chaleurs de Pointe-Noire. Coupe droite décontractée.',
        price: 95000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('pantalon-savane-lin'),
        variants: [
            {
                size: 'M',
                color: 'Sable',
                stock: 10
            },
            {
                size: 'L',
                color: 'Sable',
                stock: 12
            }
        ]
    },
    {
        id: 'prod_7',
        slug: 'boucles-loango',
        name: "Boucles d'oreilles Loango",
        category: 'Bijoux',
        description: "Boucles d'oreilles pendantes en laiton martelé, inspirées des côtes de Loango. Finition dorée à chaud.",
        price: 65000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('boucles-loango'),
        variants: [
            {
                size: 'Unique',
                color: 'Or/Noir',
                stock: 15
            }
        ]
    },
    {
        id: 'prod_8',
        slug: 'veste-officier-poto',
        name: 'Veste Officier Poto-Poto',
        category: 'Vêtements',
        description: 'Veste structurée inspirée de l\'élégance du quartier Poto-Poto, avec broderies traditionnelles au dos. Pièce signature.',
        price: 250000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('veste-officier-poto'),
        variants: [
            {
                size: 'L',
                color: 'Bleu Nuit',
                stock: 5
            },
            {
                size: 'XL',
                color: 'Bleu Nuit',
                stock: 2
            }
        ],
        isNew: true
    },
    {
        id: 'prod_9',
        slug: 'top-kouilou',
        name: 'Top Kouilou',
        category: 'Vêtements',
        description: 'Top sans manches à col montant, fermeture goutte dans le dos. Tissu technique respirant pour le climat équatorial.',
        price: 55000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('top-kouilou'),
        variants: [
            {
                size: 'S',
                color: 'Ocre',
                stock: 10
            },
            {
                size: 'M',
                color: 'Ocre',
                stock: 10
            }
        ]
    },
    {
        id: 'prod_10',
        slug: 'ceinture-raphia-luxe',
        name: 'Ceinture Raphia Luxe',
        category: 'Accessoires',
        description: 'Ceinture tressée main en raphia naturel de la région de la Sangha, boucle en laiton doré.',
        price: 35000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('ceinture-raphia-luxe'),
        variants: [
            {
                size: 'Unique',
                color: 'Naturel/Or',
                stock: 20
            }
        ]
    },
    {
        id: 'prod_11',
        slug: 'sandales-fleuve-congo',
        name: 'Sandales Fleuve Congo',
        category: 'Chaussures',
        description: 'Sandales minimalistes en cuir tanné local, brides croisées réglables. Semelle confort pour les longues journées.',
        price: 75000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('sandales-fleuve-congo'),
        variants: [
            {
                size: '40',
                color: 'Noir',
                stock: 5
            },
            {
                size: '41',
                color: 'Noir',
                stock: 6
            },
            {
                size: '42',
                color: 'Noir',
                stock: 8
            },
            {
                size: '43',
                color: 'Camel',
                stock: 4
            }
        ]
    },
    {
        id: 'prod_12',
        slug: 'kimono-niari',
        name: 'Kimono Niari',
        category: 'Vêtements',
        description: 'Kimono long et fluide en voile de coton imprimé, motifs vallée du Niari. Parfait pour les soirées et événements.',
        price: 180000,
        images: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])('kimono-niari'),
        variants: [
            {
                size: 'S/M',
                color: 'Indigo',
                stock: 4
            },
            {
                size: 'L/XL',
                color: 'Indigo',
                stock: 2
            }
        ]
    }
];
const productService = {
    getAll: async ()=>MOCK_PRODUCTS,
    getBySlug: async (slug)=>MOCK_PRODUCTS.find((p)=>p.slug === slug),
    getFeatured: async ()=>MOCK_PRODUCTS.filter((p)=>p.isNew || p.id === 'prod_3' || p.id === 'prod_6').slice(0, 4),
    getByCategory: async (category)=>MOCK_PRODUCTS.filter((p)=>p.category.toLowerCase() === category.toLowerCase())
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/public/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
const ProductCard = ({ product, index })=>{
    const isFirst = index === 0;
    const aspectClass = isFirst ? 'aspect-[3/4]' : 'aspect-[4/5]';
    const imageUrl = product.images?.[0] ?? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group flex flex-col cursor-pointer ${isFirst ? 'md:row-span-2' : ''}`,
        onClick: ()=>window.history.pushState({}, '', `/produits/${product.slug}`),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-full ${aspectClass} overflow-hidden bg-[var(--color-surface-2)] rounded-[var(--radius-sm)]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: imageUrl,
                        alt: product.name,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
                        quality: 85,
                        className: "object-cover transition-transform duration-700 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/ProductCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/ProductCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    product.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] uppercase tracking-widest font-bold bg-white px-2 py-1 text-[var(--color-primary)]",
                            children: "Nouveau"
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/ProductCard.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/ProductCard.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    product.isSoldOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-20 bg-white/50 backdrop-blur-[2px] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs uppercase tracking-[0.3em] font-bold text-[var(--color-primary)]",
                            children: "Épuisé"
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/ProductCard.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/ProductCard.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !product.isSoldOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 p-5 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full btn-primary !py-3 text-xs",
                            children: "Voir le produit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/ProductCard.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/ProductCard.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/public/ProductCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex justify-between items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-[var(--color-text)] tracking-tight leading-snug",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/ProductCard.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-[var(--color-muted)] uppercase tracking-widest mt-1",
                                children: product.category
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/ProductCard.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/public/ProductCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-light text-[var(--color-text)] whitespace-nowrap ml-4",
                        children: product.comparePrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--color-accent)] font-medium",
                                    children: [
                                        product.price.toLocaleString('fr-FR'),
                                        " FC"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/public/ProductCard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-through text-[var(--color-muted)] text-xs",
                                    children: [
                                        product.comparePrice.toLocaleString('fr-FR'),
                                        " FC"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/public/ProductCard.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/public/ProductCard.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                product.price.toLocaleString('fr-FR'),
                                " FC"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/public/ProductCard.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/ProductCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/public/ProductCard.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/public/ProductCard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ProductCard;
const __TURBOPACK__default__export__ = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/public/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// API-READY: replace cart count with fetch('/api/cart/count') when backend is live
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const Navbar = ()=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const updateCount = {
                "Navbar.useEffect.updateCount": ()=>{
                    const cart = JSON.parse(localStorage.getItem('racine_cart') || '[]');
                    setCartCount(cart.length);
                }
            }["Navbar.useEffect.updateCount"];
            updateCount();
            window.addEventListener('cart-updated', updateCount);
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 20);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('cart-updated', updateCount);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-[var(--color-border)] py-4' : 'bg-transparent py-6'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-[var(--color-text)]",
                        onClick: ()=>setIsMenuOpen(true),
                        id: "mobile-menu-open",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "12",
                                    x2: "21",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/public/Navbar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "6",
                                    x2: "21",
                                    y2: "6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/public/Navbar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "18",
                                    x2: "21",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/public/Navbar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/public/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/Navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex space-x-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    window.history.pushState({}, '', '/');
                                },
                                children: "Accueil"
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/collections",
                                className: "text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    window.history.pushState({}, '', '/collections');
                                },
                                children: "Collections"
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors",
                                children: "Showroom"
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors",
                                children: "Notre histoire"
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/public/Navbar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold tracking-[0.3em] text-[var(--color-primary)] uppercase leading-none",
                                children: "RACINE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-[var(--color-accent)] uppercase tracking-widest mt-1",
                                children: "by Ganda"
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/public/Navbar.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/public/Navbar.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/public/Navbar.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/public/Navbar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.history.pushState({}, '', '/panier'),
                                className: "relative text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/public/Navbar.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "3",
                                                y1: "6",
                                                x2: "21",
                                                y2: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/public/Navbar.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 10a4 4 0 0 1-8 0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/public/Navbar.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/public/Navbar.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 bg-[var(--color-accent)] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                                        children: cartCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/public/Navbar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/public/Navbar.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/public/Navbar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-white z-[200] flex flex-col p-10 animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMenuOpen(false),
                            id: "mobile-menu-close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "18",
                                        y1: "6",
                                        x2: "6",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/public/Navbar.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "6",
                                        y1: "6",
                                        x2: "18",
                                        y2: "18"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/public/Navbar.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/public/Navbar.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/Navbar.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center justify-center space-y-8",
                        children: [
                            'Collections',
                            'Showroom',
                            'Notre histoire',
                            'Contact'
                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-2xl uppercase tracking-[0.3em] font-light text-[var(--color-text)] hover:text-[var(--color-accent)]",
                                onClick: ()=>setIsMenuOpen(false),
                                children: item
                            }, item, false, {
                                fileName: "[project]/src/components/public/Navbar.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/Navbar.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-[10px] uppercase tracking-widest text-[var(--color-muted)]",
                        children: "Kinshasa · Paris · Pointe-Noire"
                    }, void 0, false, {
                        fileName: "[project]/src/components/public/Navbar.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/public/Navbar.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/public/Navbar.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "58ZTbmFIkzSUwK9lrpv86TJFj4U=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(public)/collections/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// API-READY: replace productService.getAll() with fetch('/api/products') + URLSearchParams for filters when backend is live
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mock/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/ProductCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/public/Navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CollectionsPage = ()=>{
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('grid');
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filter States
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSizes, setSelectedSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [priceRange, setPriceRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        150000
    ]);
    const [inStockOnly, setInStockOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('newest');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollectionsPage.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mock$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productService"].getAll().then({
                "CollectionsPage.useEffect": (data)=>{
                    setProducts(data);
                    setLoading(false);
                }
            }["CollectionsPage.useEffect"]);
        }
    }["CollectionsPage.useEffect"], []);
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CollectionsPage.useMemo[filteredProducts]": ()=>{
            return products.filter({
                "CollectionsPage.useMemo[filteredProducts]": (p)=>{
                    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
                    const sizeMatch = selectedSizes.length === 0 || p.variants.some({
                        "CollectionsPage.useMemo[filteredProducts]": (v)=>selectedSizes.includes(v.size)
                    }["CollectionsPage.useMemo[filteredProducts]"]);
                    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
                    const stockMatch = !inStockOnly || !p.isSoldOut;
                    return categoryMatch && sizeMatch && priceMatch && stockMatch;
                }
            }["CollectionsPage.useMemo[filteredProducts]"]).sort({
                "CollectionsPage.useMemo[filteredProducts]": (a, b)=>{
                    if (sortBy === 'price-asc') return a.price - b.price;
                    if (sortBy === 'price-desc') return b.price - a.price;
                    return 0; // Default: newest (assuming order in mock is newest)
                }
            }["CollectionsPage.useMemo[filteredProducts]"]);
        }
    }["CollectionsPage.useMemo[filteredProducts]"], [
        products,
        selectedCategories,
        selectedSizes,
        priceRange,
        inStockOnly,
        sortBy
    ]);
    const toggleCategory = (cat)=>{
        setSelectedCategories((prev)=>prev.includes(cat) ? prev.filter((c)=>c !== cat) : [
                ...prev,
                cat
            ]);
    };
    const toggleSize = (size)=>{
        setSelectedSizes((prev)=>prev.includes(size) ? prev.filter((s)=>s !== size) : [
                ...prev,
                size
            ]);
    };
    const resetFilters = ()=>{
        setSelectedCategories([]);
        setSelectedSizes([]);
        setPriceRange([
            0,
            150000
        ]);
        setInStockOnly(false);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[var(--color-surface)] min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-32 px-6 md:px-20 max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block col-span-1 h-96 bg-[var(--color-surface-2)] animate-pulse rounded-[var(--radius-sm)]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[3/4] bg-[var(--color-surface-2)] animate-pulse rounded-[var(--radius-sm)]"
                                    }, i, false, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(public)/collections/page.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--color-surface)] min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(public)/collections/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-32 pb-20 md:px-20 px-6 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex space-x-4 mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsMobileFiltersOpen(true),
                            className: "flex-1 flex items-center justify-center space-x-2 py-3 bg-white border border-[var(--color-border)] text-sm font-medium rounded-[var(--radius-sm)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "4",
                                            y1: "21",
                                            x2: "4",
                                            y2: "14"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "4",
                                            y1: "10",
                                            x2: "4",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 55
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "21",
                                            x2: "12",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "8",
                                            x2: "12",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 57
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "20",
                                            y1: "21",
                                            x2: "20",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "20",
                                            y1: "12",
                                            x2: "20",
                                            y2: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 57
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "1",
                                            y1: "14",
                                            x2: "7",
                                            y2: "14"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "9",
                                            y1: "8",
                                            x2: "15",
                                            y2: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 55
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "17",
                                            y1: "16",
                                            x2: "23",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 92
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Filtres"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                            lineNumber: 85,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden md:block col-span-1 space-y-10 sticky top-32 h-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]",
                                                    children: "Filtrer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: resetFilters,
                                                    className: "text-[10px] uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-accent)]",
                                                    children: "Effacer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold uppercase tracking-widest mb-4 opacity-50",
                                                    children: "Catégories"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        'Prêt-à-porter',
                                                        'Wax Prints',
                                                        'Accessoires',
                                                        'Vêtements',
                                                        'Bijoux',
                                                        'Chaussures'
                                                    ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center group cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-4 h-4 border border-[var(--color-border)] rounded-[var(--radius-sm)] flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-[var(--color-primary)] border-[var(--color-primary)]' : 'group-hover:border-[var(--color-accent)]'}`,
                                                                    children: selectedCategories.includes(cat) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "10",
                                                                        height: "10",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "white",
                                                                        strokeWidth: "3",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "20 6 9 17 4 12"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 200
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 64
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    className: "hidden",
                                                                    checked: selectedCategories.includes(cat),
                                                                    onChange: ()=>toggleCategory(cat)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-3 text-sm text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors",
                                                                    children: cat
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, cat, true, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold uppercase tracking-widest mb-4 opacity-50",
                                                    children: "Tailles"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: [
                                                        'XS',
                                                        'S',
                                                        'M',
                                                        'L',
                                                        'XL',
                                                        'Unique'
                                                    ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleSize(size),
                                                            className: `min-w-[40px] px-2 py-2 text-[10px] font-bold border transition-all rounded-[var(--radius-sm)] ${selectedSizes.includes(size) ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white' : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)]'}`,
                                                            children: size
                                                        }, size, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold uppercase tracking-widest mb-4 opacity-50",
                                                    children: "Prix (FCFA)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "range",
                                                            min: "0",
                                                            max: "150000",
                                                            step: "5000",
                                                            value: priceRange[1],
                                                            onChange: (e)=>setPriceRange([
                                                                    priceRange[0],
                                                                    parseInt(e.target.value)
                                                                ]),
                                                            className: "w-full accent-[var(--color-accent)] h-1 bg-[var(--color-border)] rounded-full appearance-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-[10px] text-[var(--color-muted)] uppercase tracking-widest",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "0 FC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 24
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        priceRange[1].toLocaleString('fr-FR'),
                                                                        " FC"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 24
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold uppercase tracking-widest mb-4 opacity-50",
                                                    children: "En stock"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "relative inline-flex items-center cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            className: "sr-only peer",
                                                            checked: inStockOnly,
                                                            onChange: ()=>setInStockOnly(!inStockOnly)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-11 h-6 bg-[var(--color-surface-2)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-accent)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between mb-12 pb-6 border-b border-[var(--color-border)] gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-muted)]",
                                                children: [
                                                    filteredProducts.length,
                                                    " produits trouvés"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: sortBy,
                                                                onChange: (e)=>setSortBy(e.target.value),
                                                                className: "appearance-none bg-transparent text-xs uppercase tracking-widest font-bold pr-8 outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "newest",
                                                                        children: "Nouveautés"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 22
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "price-asc",
                                                                        children: "Prix croissant"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 22
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "price-desc",
                                                                        children: "Prix décroissant"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 22
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 20
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "12",
                                                                    height: "12",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "6 9 12 15 18 9"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 165
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 22
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 20
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3 border-l border-[var(--color-border)] pl-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setViewMode('grid'),
                                                                className: `p-1 transition-colors ${viewMode === 'grid' ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:text-[var(--color-accent)]'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            x: "3",
                                                                            y: "3",
                                                                            width: "7",
                                                                            height: "7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            x: "14",
                                                                            y: "3",
                                                                            width: "7",
                                                                            height: "7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 64
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            x: "14",
                                                                            y: "14",
                                                                            width: "7",
                                                                            height: "7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 106
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                            x: "3",
                                                                            y: "14",
                                                                            width: "7",
                                                                            height: "7"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 149
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setViewMode('list'),
                                                                className: `p-1 transition-colors ${viewMode === 'list' ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:text-[var(--color-accent)]'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "8",
                                                                            y1: "6",
                                                                            x2: "21",
                                                                            y2: "6"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 23
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "8",
                                                                            y1: "12",
                                                                            x2: "21",
                                                                            y2: "12"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 60
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "8",
                                                                            y1: "18",
                                                                            x2: "21",
                                                                            y2: "18"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 99
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "3",
                                                                            y1: "6",
                                                                            x2: "3.01",
                                                                            y2: "6"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 138
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "3",
                                                                            y1: "12",
                                                                            x2: "3.01",
                                                                            y2: "12"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 177
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                            x1: "3",
                                                                            y1: "18",
                                                                            x2: "3.01",
                                                                            y2: "18"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 218
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-20 flex flex-col items-center justify-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-32 h-32 bg-[var(--color-surface-2)] rounded-full flex items-center justify-center mb-8 opacity-50",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "48",
                                                    height: "48",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M15 3v4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 143
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 3v4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 163
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-medium mb-2",
                                                children: "Aucun produit trouvé"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[var(--color-muted)] text-sm mb-8",
                                                children: "Essayez de modifier vos filtres ou de réinitialiser la recherche."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetFilters,
                                                className: "btn-primary",
                                                children: "Réinitialiser les filtres"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : viewMode === 'grid' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16",
                                        children: filteredProducts.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$public$2f$ProductCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                product: p,
                                                index: i
                                            }, p.id, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: filteredProducts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row items-center border border-[var(--color-border)] p-4 rounded-[var(--radius-sm)] hover:bg-[var(--color-surface-2)] transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-24 h-24 bg-white rounded-[var(--radius-sm)] flex-shrink-0 flex items-center justify-center overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "32",
                                                            height: "32",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "0.5",
                                                            className: "opacity-20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: "3",
                                                                    y: "3",
                                                                    width: "18",
                                                                    height: "18",
                                                                    rx: "2",
                                                                    ry: "2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 147
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "8.5",
                                                                    cy: "8.5",
                                                                    r: "1.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 204
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "21 15 16 10 5 21"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 240
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-0 sm:ml-6 mt-4 sm:mt-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-start",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "text-sm font-bold text-[var(--color-text)] uppercase tracking-tight",
                                                                                children: p.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                                lineNumber: 246,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-[var(--color-muted)] uppercase tracking-widest mt-1",
                                                                                children: p.category
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                                lineNumber: 247,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-bold text-[var(--color-primary)]",
                                                                        children: [
                                                                            p.price.toLocaleString('fr-FR'),
                                                                            " FC"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex flex-wrap gap-2",
                                                                children: [
                                                                    p.variants.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] font-bold px-2 py-1 bg-white border border-[var(--color-border)] rounded-[var(--radius-sm)]",
                                                                            children: v.size
                                                                        }, v.size, false, {
                                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                            lineNumber: 253,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                                    p.isSoldOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "badge-danger",
                                                                        children: "Épuisé"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 28
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "badge-success",
                                                                        children: "En stock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 28
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "mt-4 sm:mt-0 sm:ml-6 btn-primary !py-2 !px-6 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity",
                                                        children: "Voir"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    filteredProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-24 border-t border-[var(--color-border)] pt-12 flex items-center justify-center space-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "19",
                                                            y1: "12",
                                                            x2: "5",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 164
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 19 5 12 12 5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 203
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    1,
                                                    2,
                                                    3
                                                ].map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `w-10 h-10 flex items-center justify-center text-[10px] font-bold transition-all rounded-[var(--radius-sm)] ${page === 1 ? 'bg-[var(--color-primary)] text-white' : 'hover:bg-[var(--color-surface-2)] text-[var(--color-muted)]'}`,
                                                        children: page < 10 ? `0${page}` : page
                                                    }, page, false, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "5",
                                                            y1: "12",
                                                            x2: "19",
                                                            y2: "12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 164
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "12 5 19 12 12 19"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 203
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 283,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/collections/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMobileFiltersOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[200] animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40 backdrop-blur-sm",
                        onClick: ()=>setIsMobileFiltersOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                        lineNumber: 295,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 bg-white rounded-t-[var(--radius-lg)] p-8 h-[80vh] overflow-y-auto transform transition-transform duration-500 animate-in slide-in-from-bottom flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold uppercase tracking-widest",
                                        children: "Filtres"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 298,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMobileFiltersOpen(false),
                                        className: "p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 166
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 204
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(public)/collections/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                lineNumber: 297,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold uppercase tracking-widest mb-4 opacity-50",
                                                children: "Catégories"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    'Prêt-à-porter',
                                                    'Wax Prints',
                                                    'Accessoires',
                                                    'Vêtements',
                                                    'Bijoux',
                                                    'Chaussures'
                                                ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleCategory(cat),
                                                        className: `px-4 py-3 text-xs border rounded-[var(--radius-sm)] transition-all ${selectedCategories.includes(cat) ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'border-[var(--color-border)] text-[var(--color-muted)]'}`,
                                                        children: cat
                                                    }, cat, false, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 26
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold uppercase tracking-widest mb-4 opacity-50",
                                                children: "Tailles"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-3",
                                                children: [
                                                    'XS',
                                                    'S',
                                                    'M',
                                                    'L',
                                                    'XL',
                                                    'Unique'
                                                ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>toggleSize(size),
                                                        className: `w-12 h-12 flex items-center justify-center text-xs font-bold border rounded-[var(--radius-sm)] ${selectedSizes.includes(size) ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'border-[var(--color-border)] text-[var(--color-muted)]'}`,
                                                        children: size
                                                    }, size, false, {
                                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 26
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                lineNumber: 304,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky bottom-0 pt-8 pb-4 bg-white border-t border-[var(--color-border)] grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetFilters,
                                        className: "btn-ghost !border !border-[var(--color-border)] uppercase tracking-widest text-[10px]",
                                        children: "Tout effacer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMobileFiltersOpen(false),
                                        className: "btn-primary uppercase tracking-widest text-[10px]",
                                        children: "Afficher les résultats"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(public)/collections/page.tsx",
                                lineNumber: 333,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(public)/collections/page.tsx",
                        lineNumber: 296,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(public)/collections/page.tsx",
                lineNumber: 294,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(public)/collections/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CollectionsPage, "Mh6bGThewrNVbcGgcB0rDWKffog=");
_c = CollectionsPage;
const __TURBOPACK__default__export__ = CollectionsPage;
var _c;
__turbopack_context__.k.register(_c, "CollectionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_06qlan7._.js.map