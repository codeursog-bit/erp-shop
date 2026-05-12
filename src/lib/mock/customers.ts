// API-READY: replace customerService.methods with fetch('/api/customers') when backend is live

export type CustomerStatus = 'active' | 'inactive';

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  totalOrders: number;
  totalSpent: number;
  lastOrder: string;
  status: CustomerStatus;
};

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 'cust_1',
    name: 'Rodrigue Elenga',
    email: 'r.elenga@gmail.com',
    phone: '+242 06 512 3478',
    city: 'Pointe-Noire',
    country: 'CG',
    totalOrders: 4,
    totalSpent: 520000,
    lastOrder: '2024-04-10',
    status: 'active',
  },
  {
    id: 'cust_2',
    name: 'Christelle Massamba',
    email: 'c.massamba@yahoo.fr',
    phone: '+242 05 897 6541',
    city: 'Brazzaville',
    country: 'CG',
    totalOrders: 6,
    totalSpent: 870000,
    lastOrder: '2024-05-03',
    status: 'active',
  },
  {
    id: 'cust_3',
    name: 'Franck Mouyabi',
    email: 'f.mouyabi@outlook.com',
    phone: '+33 6 45 23 11 90',
    city: 'Paris',
    country: 'France',
    totalOrders: 2,
    totalSpent: 310000,
    lastOrder: '2024-03-18',
    status: 'active',
  },
  {
    id: 'cust_4',
    name: 'Stella Nkodia',
    email: 's.nkodia@gmail.com',
    phone: '+242 06 331 5522',
    city: 'Pointe-Noire',
    country: 'CG',
    totalOrders: 3,
    totalSpent: 395000,
    lastOrder: '2024-04-22',
    status: 'active',
  },
  {
    id: 'cust_5',
    name: 'Patrick Loemba',
    email: 'p.loemba@gmail.com',
    phone: '+242 05 611 8874',
    city: 'Pointe-Noire',
    country: 'CG',
    totalOrders: 1,
    totalSpent: 125000,
    lastOrder: '2024-02-14',
    status: 'inactive',
  },
  {
    id: 'cust_6',
    name: 'Joëlle Gandzion',
    email: 'j.gandzion@gmail.com',
    phone: '+242 06 744 9910',
    city: 'Dolisie',
    country: 'CG',
    totalOrders: 2,
    totalSpent: 230000,
    lastOrder: '2024-04-01',
    status: 'active',
  },
  {
    id: 'cust_7',
    name: 'Armel Bouanga',
    email: 'a.bouanga@hotmail.fr',
    phone: '+32 494 12 34 56',
    city: 'Bruxelles',
    country: 'Belgique',
    totalOrders: 5,
    totalSpent: 744000,
    lastOrder: '2024-05-08',
    status: 'active',
  },
  {
    id: 'cust_8',
    name: 'Prisca Banzouzi',
    email: 'p.banzouzi@gmail.com',
    phone: '+242 06 128 4477',
    city: 'Brazzaville',
    country: 'CG',
    totalOrders: 3,
    totalSpent: 440000,
    lastOrder: '2024-03-30',
    status: 'active',
  },
  {
    id: 'cust_9',
    name: 'Guy-Serge Ntsoumou',
    email: 'gs.ntsoumou@gmail.com',
    phone: '+242 05 966 2231',
    city: 'Pointe-Noire',
    country: 'CG',
    totalOrders: 0,
    totalSpent: 0,
    lastOrder: '-',
    status: 'inactive',
  },
  {
    id: 'cust_10',
    name: 'Vanessa Mboungou',
    email: 'v.mboungou@gmail.com',
    phone: '+242 06 852 7733',
    city: 'Pointe-Noire',
    country: 'CG',
    totalOrders: 7,
    totalSpent: 1050000,
    lastOrder: '2024-05-10',
    status: 'active',
  },
  {
    id: 'cust_11',
    name: 'Didier Nganga',
    email: 'd.nganga@yahoo.fr',
    phone: '+242 06 413 0055',
    city: 'Owando',
    country: 'CG',
    totalOrders: 1,
    totalSpent: 85000,
    lastOrder: '2024-01-20',
    status: 'inactive',
  },
  {
    id: 'cust_12',
    name: 'Sandrine Kimpouni',
    email: 's.kimpouni@gmail.com',
    phone: '+1 514 456 7890',
    city: 'Montréal',
    country: 'Canada',
    totalOrders: 4,
    totalSpent: 660000,
    lastOrder: '2024-04-15',
    status: 'active',
  },
  {
    id: 'cust_13',
    name: 'Bienvenu Makosso',
    email: 'b.makosso@gmail.com',
    phone: '+242 05 777 3348',
    city: 'Pointe-Noire',
    country: 'CG',
    totalOrders: 2,
    totalSpent: 290000,
    lastOrder: '2024-03-05',
    status: 'active',
  },
  {
    id: 'cust_14',
    name: 'Laurette Moukala',
    email: 'l.moukala@gmail.com',
    phone: '+242 06 234 8891',
    city: 'Pointe-Noire',
    country: 'CG',
    totalOrders: 3,
    totalSpent: 375000,
    lastOrder: '2024-04-28',
    status: 'active',
  },
  {
    id: 'cust_15',
    name: 'Théodore Babingui',
    email: 't.babingui@outlook.com',
    phone: '+242 05 344 6612',
    city: 'Brazzaville',
    country: 'CG',
    totalOrders: 2,
    totalSpent: 200000,
    lastOrder: '2024-02-28',
    status: 'active',
  },
];

export const customerService = {
  getAll: async () => MOCK_CUSTOMERS,
  getById: async (id: string) => MOCK_CUSTOMERS.find(c => c.id === id),
  search: async (query: string) =>
    MOCK_CUSTOMERS.filter(
      c =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.email.toLowerCase().includes(query.toLowerCase()) ||
        c.city.toLowerCase().includes(query.toLowerCase()),
    ),
};