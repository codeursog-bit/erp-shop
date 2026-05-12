// API-READY: replace orderService.methods with fetch('/api/orders') when backend is live

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type OrderProduct = {
  name: string;
  qty: number;
  price: number;
};

export type Order = {
  id: string;
  ref: string;
  customerName: string;
  customerEmail: string;
  products: OrderProduct[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  shippingAddress: string;
};

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ord_1',
    ref: 'RBG-2024-001',
    customerName: 'Rodrigue Elenga',
    customerEmail: 'r.elenga@gmail.com',
    products: [{ name: 'Chemise Pointe-Noire Chic', qty: 2, price: 85000 }],
    total: 170000,
    status: 'delivered',
    createdAt: '2024-02-10T14:30:00Z',
    shippingAddress: 'Av. Charles de Gaulle, Quartier Centre-Ville, Pointe-Noire, CG',
  },
  {
    id: 'ord_2',
    ref: 'RBG-2024-002',
    customerName: 'Christelle Massamba',
    customerEmail: 'c.massamba@yahoo.fr',
    products: [
      { name: 'Robe Ébène Wax Premium', qty: 1, price: 125000 },
      { name: "Boucles d'oreilles Loango", qty: 1, price: 65000 },
    ],
    total: 190000,
    status: 'processing',
    createdAt: '2024-03-12T10:15:00Z',
    shippingAddress: 'Rue de la Paix, Bacongo, Brazzaville, CG',
  },
  {
    id: 'ord_3',
    ref: 'RBG-2024-003',
    customerName: 'Franck Mouyabi',
    customerEmail: 'f.mouyabi@outlook.com',
    products: [{ name: 'Veste Officier Poto-Poto', qty: 1, price: 250000 }],
    total: 250000,
    status: 'pending',
    createdAt: '2024-03-14T16:45:00Z',
    shippingAddress: '12 Rue de la République, 75011 Paris, France',
  },
  {
    id: 'ord_4',
    ref: 'RBG-2024-004',
    customerName: 'Stella Nkodia',
    customerEmail: 's.nkodia@gmail.com',
    products: [{ name: 'Sac Zando en Cuir', qty: 1, price: 195000 }],
    total: 195000,
    status: 'shipped',
    createdAt: '2024-03-10T09:00:00Z',
    shippingAddress: 'Quartier Tié-Tié, Avenue Loango, Pointe-Noire, CG',
  },
  {
    id: 'ord_5',
    ref: 'RBG-2024-005',
    customerName: 'Armel Bouanga',
    customerEmail: 'a.bouanga@hotmail.fr',
    products: [
      { name: 'Kimono Niari', qty: 1, price: 180000 },
      { name: 'Foulard Malkia', qty: 2, price: 45000 },
    ],
    total: 270000,
    status: 'delivered',
    createdAt: '2024-03-20T11:00:00Z',
    shippingAddress: 'Avenue Louise 45, 1050 Bruxelles, Belgique',
  },
  {
    id: 'ord_6',
    ref: 'RBG-2024-006',
    customerName: 'Vanessa Mboungou',
    customerEmail: 'v.mboungou@gmail.com',
    products: [{ name: 'Ensemble Lualaba', qty: 1, price: 210000 }],
    total: 210000,
    status: 'cancelled',
    createdAt: '2024-03-25T14:00:00Z',
    shippingAddress: 'Rue Bouenza, Quartier Lumumba, Pointe-Noire, CG',
  },
  {
    id: 'ord_7',
    ref: 'RBG-2024-007',
    customerName: 'Sandrine Kimpouni',
    customerEmail: 's.kimpouni@gmail.com',
    products: [
      { name: 'Robe Ébène Wax Premium', qty: 1, price: 125000 },
      { name: 'Ceinture Raphia Luxe',   qty: 1, price:  35000 },
    ],
    total: 160000,
    status: 'delivered',
    createdAt: '2024-04-02T08:30:00Z',
    shippingAddress: '3210 Rue Saint-Denis, Montréal, QC H2X 3L4, Canada',
  },
  {
    id: 'ord_8',
    ref: 'RBG-2024-008',
    customerName: 'Prisca Banzouzi',
    customerEmail: 'p.banzouzi@gmail.com',
    products: [{ name: 'Top Kouilou', qty: 2, price: 55000 }],
    total: 110000,
    status: 'processing',
    createdAt: '2024-04-05T15:20:00Z',
    shippingAddress: 'Avenue de la Victoire, Moungali, Brazzaville, CG',
  },
  {
    id: 'ord_9',
    ref: 'RBG-2024-009',
    customerName: 'Joëlle Gandzion',
    customerEmail: 'j.gandzion@gmail.com',
    products: [{ name: 'Pantalon Savane Lin', qty: 1, price: 95000 }],
    total: 95000,
    status: 'shipped',
    createdAt: '2024-04-08T09:45:00Z',
    shippingAddress: 'Quartier Makayabou, Dolisie, Niari, CG',
  },
  {
    id: 'ord_10',
    ref: 'RBG-2024-010',
    customerName: 'Bienvenu Makosso',
    customerEmail: 'b.makosso@gmail.com',
    products: [
      { name: 'Sandales Fleuve Congo', qty: 1, price: 75000 },
      { name: 'Foulard Malkia',        qty: 1, price: 45000 },
    ],
    total: 120000,
    status: 'delivered',
    createdAt: '2024-04-12T13:10:00Z',
    shippingAddress: 'Rue des Martyrs, Quartier Fond Tié-Tié, Pointe-Noire, CG',
  },
  {
    id: 'ord_11',
    ref: 'RBG-2024-011',
    customerName: 'Théodore Babingui',
    customerEmail: 't.babingui@outlook.com',
    products: [{ name: 'Chemise Pointe-Noire Chic', qty: 1, price: 85000 }],
    total: 85000,
    status: 'pending',
    createdAt: '2024-04-15T10:00:00Z',
    shippingAddress: 'Avenue des Trois Martyrs, Poto-Poto, Brazzaville, CG',
  },
  {
    id: 'ord_12',
    ref: 'RBG-2024-012',
    customerName: 'Laurette Moukala',
    customerEmail: 'l.moukala@gmail.com',
    products: [
      { name: "Boucles d'oreilles Loango", qty: 2, price: 65000 },
      { name: 'Ceinture Raphia Luxe',      qty: 1, price: 35000 },
    ],
    total: 165000,
    status: 'delivered',
    createdAt: '2024-04-18T16:30:00Z',
    shippingAddress: 'Rue Bouenza, Lumumba, Pointe-Noire, CG',
  },
  {
    id: 'ord_13',
    ref: 'RBG-2024-013',
    customerName: 'Rodrigue Elenga',
    customerEmail: 'r.elenga@gmail.com',
    products: [{ name: 'Veste Officier Poto-Poto', qty: 1, price: 250000 }],
    total: 250000,
    status: 'processing',
    createdAt: '2024-04-20T11:00:00Z',
    shippingAddress: 'Av. Charles de Gaulle, Centre-Ville, Pointe-Noire, CG',
  },
  {
    id: 'ord_14',
    ref: 'RBG-2024-014',
    customerName: 'Patrick Loemba',
    customerEmail: 'p.loemba@gmail.com',
    products: [{ name: 'Kimono Niari', qty: 1, price: 180000 }],
    total: 180000,
    status: 'cancelled',
    createdAt: '2024-04-22T09:15:00Z',
    shippingAddress: 'Rue Mokanda, Tié-Tié Sud, Pointe-Noire, CG',
  },
  {
    id: 'ord_15',
    ref: 'RBG-2024-015',
    customerName: 'Vanessa Mboungou',
    customerEmail: 'v.mboungou@gmail.com',
    products: [
      { name: 'Robe Ébène Wax Premium', qty: 1, price: 125000 },
      { name: 'Foulard Malkia',          qty: 1, price:  45000 },
      { name: 'Sandales Fleuve Congo',   qty: 1, price:  75000 },
    ],
    total: 245000,
    status: 'shipped',
    createdAt: '2024-04-25T14:45:00Z',
    shippingAddress: 'Rue Bouenza, Lumumba, Pointe-Noire, CG',
  },
  {
    id: 'ord_16',
    ref: 'RBG-2024-016',
    customerName: 'Christelle Massamba',
    customerEmail: 'c.massamba@yahoo.fr',
    products: [{ name: 'Ensemble Lualaba', qty: 1, price: 210000 }],
    total: 210000,
    status: 'delivered',
    createdAt: '2024-04-28T08:00:00Z',
    shippingAddress: 'Rue de la Paix, Bacongo, Brazzaville, CG',
  },
  {
    id: 'ord_17',
    ref: 'RBG-2024-017',
    customerName: 'Didier Nganga',
    customerEmail: 'd.nganga@yahoo.fr',
    products: [{ name: 'Pantalon Savane Lin', qty: 1, price: 95000 }],
    total: 95000,
    status: 'delivered',
    createdAt: '2024-05-01T10:30:00Z',
    shippingAddress: 'Quartier Centre, Owando, Cuvette, CG',
  },
  {
    id: 'ord_18',
    ref: 'RBG-2024-018',
    customerName: 'Armel Bouanga',
    customerEmail: 'a.bouanga@hotmail.fr',
    products: [
      { name: 'Sac Zando en Cuir',    qty: 1, price: 195000 },
      { name: 'Ceinture Raphia Luxe', qty: 2, price:  35000 },
    ],
    total: 265000,
    status: 'processing',
    createdAt: '2024-05-03T13:00:00Z',
    shippingAddress: 'Avenue Louise 45, 1050 Bruxelles, Belgique',
  },
  {
    id: 'ord_19',
    ref: 'RBG-2024-019',
    customerName: 'Stella Nkodia',
    customerEmail: 's.nkodia@gmail.com',
    products: [{ name: 'Top Kouilou', qty: 3, price: 55000 }],
    total: 165000,
    status: 'pending',
    createdAt: '2024-05-06T09:00:00Z',
    shippingAddress: 'Quartier Tié-Tié, Pointe-Noire, CG',
  },
  {
    id: 'ord_20',
    ref: 'RBG-2024-020',
    customerName: 'Sandrine Kimpouni',
    customerEmail: 's.kimpouni@gmail.com',
    products: [
      { name: 'Kimono Niari',              qty: 1, price: 180000 },
      { name: "Boucles d'oreilles Loango", qty: 1, price:  65000 },
    ],
    total: 245000,
    status: 'shipped',
    createdAt: '2024-05-08T15:30:00Z',
    shippingAddress: '3210 Rue Saint-Denis, Montréal, Canada',
  },
];

export const orderService = {
  getAll: async () => MOCK_ORDERS,
  getById: async (id: string) => MOCK_ORDERS.find(o => o.id === id),
  getByRef: async (ref: string) => MOCK_ORDERS.find(o => o.ref === ref),
  getByStatus: async (status: OrderStatus) => MOCK_ORDERS.filter(o => o.status === status),
  getRecent: async (n: number) =>
    [...MOCK_ORDERS]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, n),
};