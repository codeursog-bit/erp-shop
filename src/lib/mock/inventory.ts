// API-READY: replace inventoryService.methods with fetch('/api/inventory') when backend is live

import { MOCK_PRODUCTS } from './products';

export type InventoryStatus = 'in_stock' | 'low_stock' | 'out_of_stock';

export type InventoryItem = {
  id: string;
  productId: string;
  productName: string;
  ref: string;
  category: string;
  variants: {
    size: string;
    color: string;
    qty: number;
  }[];
  totalStock: number;
  lowStockThreshold: number;
  status: InventoryStatus;
};

// Derives directly from products — single source of truth
export const MOCK_INVENTORY: InventoryItem[] = MOCK_PRODUCTS.map(p => {
  const totalStock = p.variants.reduce((acc, v) => acc + v.stock, 0);
  const lowStockThreshold = 5;

  let status: InventoryStatus = 'in_stock';
  if (totalStock === 0) status = 'out_of_stock';
  else if (totalStock <= lowStockThreshold) status = 'low_stock';

  // Build readable ref from slug: pantalon-savane-lin → RBG-PANTA
  const refCode = p.slug
    .toUpperCase()
    .replace(/-/g, '')
    .slice(0, 5);

  return {
    id: `inv_${p.id}`,
    productId: p.id,
    productName: p.name,
    ref: `RBG-${refCode}`,
    category: p.category,
    variants: p.variants.map(v => ({ size: v.size, color: v.color, qty: v.stock })),
    totalStock,
    lowStockThreshold,
    status,
  };
});

export const inventoryService = {
  getAll: async () => MOCK_INVENTORY,
  getLowStock: async () => MOCK_INVENTORY.filter(i => i.status === 'low_stock'),
  getOutOfStock: async () => MOCK_INVENTORY.filter(i => i.status === 'out_of_stock'),
  updateStock: async (id: string, variantIndex: number, newQty: number) => {
    const item = MOCK_INVENTORY.find(i => i.id === id);
    if (item) {
      item.variants[variantIndex].qty = newQty;
      item.totalStock = item.variants.reduce((acc, v) => acc + v.qty, 0);
      if (item.totalStock === 0) item.status = 'out_of_stock';
      else if (item.totalStock <= item.lowStockThreshold) item.status = 'low_stock';
      else item.status = 'in_stock';
    }
    return item;
  },
  getSummary: async () => {
    const all = MOCK_INVENTORY;
    return {
      totalSKUs: all.length,
      totalUnits: all.reduce((acc, i) => acc + i.totalStock, 0),
      lowStockCount: all.filter(i => i.status === 'low_stock').length,
      outOfStockCount: all.filter(i => i.status === 'out_of_stock').length,
    };
  },
};