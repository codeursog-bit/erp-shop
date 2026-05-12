// API-READY: replace financeService.methods with fetch('/api/finances') when backend is live

export type TransactionType = 'income' | 'expense';
export type TransactionStatus = 'paid' | 'pending' | 'cancelled';

export type Transaction = {
  id: string;
  date: string;
  label: string;
  type: TransactionType;
  category: string;
  amount: number;
  status: TransactionStatus;
};

// Deterministic mock — no Math.random() so data is stable across renders
export const MOCK_TRANSACTIONS: Transaction[] = [
  // INCOME
  { id: 'tx_1',  date: '2024-05-10', label: 'Ventes en ligne — Mai S2',       type: 'income',  category: 'Ventes en ligne',     amount: 485000,  status: 'paid' },
  { id: 'tx_2',  date: '2024-05-08', label: 'Ventes Showroom Pointe-Noire',    type: 'income',  category: 'Ventes boutique',     amount: 320000,  status: 'paid' },
  { id: 'tx_3',  date: '2024-05-06', label: 'Commande spéciale — Mariage',     type: 'income',  category: 'Commande spéciale',   amount: 750000,  status: 'paid' },
  { id: 'tx_4',  date: '2024-05-05', label: 'Ventes en ligne — Mai S1',        type: 'income',  category: 'Ventes en ligne',     amount: 210000,  status: 'paid' },
  { id: 'tx_5',  date: '2024-05-03', label: 'Partenariat Événement Brazza',    type: 'income',  category: 'Partenariat',         amount: 300000,  status: 'pending' },
  { id: 'tx_6',  date: '2024-04-28', label: 'Ventes Showroom — Avr S4',       type: 'income',  category: 'Ventes boutique',     amount: 290000,  status: 'paid' },
  { id: 'tx_7',  date: '2024-04-25', label: 'Ventes en ligne — Avr S4',        type: 'income',  category: 'Ventes en ligne',     amount: 175000,  status: 'paid' },
  { id: 'tx_8',  date: '2024-04-22', label: 'Commande export Montréal',        type: 'income',  category: 'Export diaspora',     amount: 520000,  status: 'paid' },
  { id: 'tx_9',  date: '2024-04-18', label: 'Commande export Bruxelles',       type: 'income',  category: 'Export diaspora',     amount: 460000,  status: 'paid' },
  { id: 'tx_10', date: '2024-04-15', label: 'Ventes en ligne — Avr S2',        type: 'income',  category: 'Ventes en ligne',     amount: 195000,  status: 'paid' },
  { id: 'tx_11', date: '2024-04-10', label: 'Atelier couture privé',           type: 'income',  category: 'Atelier privé',       amount: 180000,  status: 'paid' },
  { id: 'tx_12', date: '2024-04-05', label: 'Ventes Showroom — Avr S1',       type: 'income',  category: 'Ventes boutique',     amount: 245000,  status: 'paid' },
  { id: 'tx_13', date: '2024-03-28', label: 'Partenariat CFCO — Tenues event', type: 'income',  category: 'Partenariat',         amount: 600000,  status: 'paid' },
  { id: 'tx_14', date: '2024-03-20', label: 'Ventes en ligne — Mar S3',        type: 'income',  category: 'Ventes en ligne',     amount: 165000,  status: 'paid' },
  { id: 'tx_15', date: '2024-03-12', label: 'Commande spéciale — Baptême',     type: 'income',  category: 'Commande spéciale',   amount: 380000,  status: 'paid' },
  { id: 'tx_16', date: '2024-03-05', label: 'Ventes Showroom — Mar S1',        type: 'income',  category: 'Ventes boutique',     amount: 220000,  status: 'paid' },
  { id: 'tx_17', date: '2024-02-25', label: 'Ventes en ligne — Fév S4',        type: 'income',  category: 'Ventes en ligne',     amount: 140000,  status: 'paid' },
  { id: 'tx_18', date: '2024-02-14', label: 'Saint-Valentin — Collection Cœur', type: 'income', category: 'Commande spéciale',   amount: 490000,  status: 'paid' },
  // EXPENSES
  { id: 'tx_19', date: '2024-05-07', label: 'Achat wax importé Hollande',      type: 'expense', category: 'Matières premières',  amount: 280000,  status: 'paid' },
  { id: 'tx_20', date: '2024-05-01', label: 'Loyer atelier — Mai',             type: 'expense', category: 'Loyer atelier',       amount: 150000,  status: 'paid' },
  { id: 'tx_21', date: '2024-05-01', label: 'Salaires équipe — Mai',           type: 'expense', category: 'Salaires',            amount: 620000,  status: 'paid' },
  { id: 'tx_22', date: '2024-04-30', label: 'Transport livraisons Brazzaville', type: 'expense', category: 'Transport',          amount: 85000,   status: 'paid' },
  { id: 'tx_23', date: '2024-04-25', label: 'Marketing Instagram — Avr',       type: 'expense', category: 'Marketing digital',   amount: 65000,   status: 'paid' },
  { id: 'tx_24', date: '2024-04-20', label: 'Achat doublure et fils',          type: 'expense', category: 'Matières premières',  amount: 95000,   status: 'paid' },
  { id: 'tx_25', date: '2024-04-15', label: 'Maintenance machine Singer',      type: 'expense', category: 'Maintenance machines', amount: 45000,  status: 'paid' },
  { id: 'tx_26', date: '2024-04-01', label: 'Loyer atelier — Avr',             type: 'expense', category: 'Loyer atelier',       amount: 150000,  status: 'paid' },
  { id: 'tx_27', date: '2024-04-01', label: 'Salaires équipe — Avr',           type: 'expense', category: 'Salaires',            amount: 620000,  status: 'paid' },
  { id: 'tx_28', date: '2024-03-22', label: 'Achat cuir tannerie locale',      type: 'expense', category: 'Matières premières',  amount: 180000,  status: 'paid' },
  { id: 'tx_29', date: '2024-03-10', label: 'Shooting photo produits',         type: 'expense', category: 'Marketing digital',   amount: 120000,  status: 'paid' },
  { id: 'tx_30', date: '2024-03-01', label: 'Salaires équipe — Mar',           type: 'expense', category: 'Salaires',            amount: 595000,  status: 'paid' },
];

// Sort by date descending
MOCK_TRANSACTIONS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const financeService = {
  getAll: async () => MOCK_TRANSACTIONS,
  getByType: async (type: TransactionType) =>
    MOCK_TRANSACTIONS.filter(t => t.type === type),
  getSummary: async () => {
    const totalIncome = MOCK_TRANSACTIONS
      .filter(t => t.type === 'income' && t.status === 'paid')
      .reduce((acc, t) => acc + t.amount, 0);

    const totalExpense = MOCK_TRANSACTIONS
      .filter(t => t.type === 'expense' && t.status === 'paid')
      .reduce((acc, t) => acc + t.amount, 0);

    const monthlyRevenue = [
      { month: 'Jan', revenus: 980000,  depenses: 820000  },
      { month: 'Fév', revenus: 1450000, depenses: 980000  },
      { month: 'Mar', revenus: 1365000, depenses: 895000  },
      { month: 'Avr', revenus: 2085000, depenses: 1065000 },
      { month: 'Mai', revenus: 2065000, depenses: 1200000 },
      { month: 'Jun', revenus: 1950000, depenses: 1100000 },
    ];

    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
      monthlyRevenue,
    };
  },
};