// API-READY: replace with real CDN URLs from your media storage (S3, Cloudinary, etc.)

export const BRAND_IMAGES = {
  hero: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
  hero2: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1400&q=85',
  storyBanner: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1400&q=85',
  atelier: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
  showroom: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=85',
  collection_pret: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85',
  collection_wax: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85',
  collection_access: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=85',
};

export const PRODUCT_IMAGES: Record<string, string[]> = {
  'robe-ebene-wax-premium': [
    'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=700&q=85',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=85',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=85',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&q=85',
  ],
  'chemise-pn-chic': [
    'https://images.unsplash.com/photo-1594938298603-c8148c4b4157?w=700&q=85',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&q=85',
    'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=700&q=85',
  ],
  'sac-zando-cuir': [
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=85',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=85',
    'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700&q=85',
  ],
  'ensemble-lualaba': [
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
  ],
  'foulard-malkia': [
    'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=700&q=85',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=85',
  ],
  'pantalon-savane-lin': [
    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=700&q=85',
    'https://images.unsplash.com/photo-1594938374182-a55e3af23dbc?w=700&q=85',
  ],
  'boucles-loango': [
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=85',
    'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=700&q=85',
  ],
  'veste-officier-poto': [
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=85',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=85',
  ],
  'top-kouilou': [
    'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=700&q=85',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&q=85',
  ],
  'ceinture-raphia-luxe': [
    'https://images.unsplash.com/photo-1618354691249-e4e9a5f3e59a?w=700&q=85',
  ],
  'sandales-fleuve-congo': [
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=85',
    'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=700&q=85',
  ],
  'kimono-niari': [
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=85',
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&q=85',
  ],
};

// Fallback if slug not found
export const PRODUCT_FALLBACK = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85',
];

export const TEAM_AVATARS: Record<string, string> = {
  'Ganda Moke':     'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80',
  'Safi Nzuzi':     'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  'Junior Bakwa':   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  'Anny Bolamba':   'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
  'Patient Mukeba': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  'Nadine Yumba':   'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  'Blaise Nganga':  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  'Carine Lelo':    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
};

export function getProductImages(slug: string): string[] {
  return PRODUCT_IMAGES[slug] ?? PRODUCT_FALLBACK;
}