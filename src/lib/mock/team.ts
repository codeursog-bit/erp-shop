// API-READY: replace teamService.methods with fetch('/api/team') when backend is live

import { TEAM_AVATARS } from './images';

export type TeamStatus = 'active' | 'inactive';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  hireDate: string;
  department: string;
  status: TeamStatus;
  hoursThisWeek: number;
  avatar?: string;
};

export const MOCK_TEAM: TeamMember[] = [
  {
    id: 'team_1',
    name: 'Ganda Moke',
    role: 'Fondatrice & Directrice Artistique',
    email: 'ganda@racinebyganda.cg',
    phone: '+242 06 000 001',
    hireDate: '2020-01-01',
    department: 'Direction',
    status: 'active',
    hoursThisWeek: 45,
    avatar: TEAM_AVATARS['Ganda Moke'],
  },
  {
    id: 'team_2',
    name: 'Safi Nzuzi',
    role: "Chef d'atelier",
    email: 'safi.atelier@racinebyganda.cg',
    phone: '+242 06 000 002',
    hireDate: '2021-06-15',
    department: 'Production',
    status: 'active',
    hoursThisWeek: 40,
    avatar: TEAM_AVATARS['Safi Nzuzi'],
  },
  {
    id: 'team_3',
    name: 'Junior Bakwa',
    role: 'Responsable Logistique',
    email: 'junior.bakwa@racinebyganda.cg',
    phone: '+242 06 000 003',
    hireDate: '2022-02-10',
    department: 'Opérations',
    status: 'active',
    hoursThisWeek: 38,
    avatar: TEAM_AVATARS['Junior Bakwa'],
  },
  {
    id: 'team_4',
    name: 'Anny Bolamba',
    role: 'Vente & Relation Client',
    email: 'anny.bolamba@racinebyganda.cg',
    phone: '+242 06 000 004',
    hireDate: '2022-11-20',
    department: 'Ventes',
    status: 'active',
    hoursThisWeek: 35,
    avatar: TEAM_AVATARS['Anny Bolamba'],
  },
  {
    id: 'team_5',
    name: 'Patient Mukeba',
    role: 'Couturier Senior',
    email: 'patient.mukeba@racinebyganda.cg',
    phone: '+242 06 000 005',
    hireDate: '2021-03-01',
    department: 'Production',
    status: 'active',
    hoursThisWeek: 42,
    avatar: TEAM_AVATARS['Patient Mukeba'],
  },
  {
    id: 'team_6',
    name: 'Nadine Yumba',
    role: 'Designer Junior',
    email: 'nadine.yumba@racinebyganda.cg',
    phone: '+242 06 000 006',
    hireDate: '2023-05-15',
    department: 'Design',
    status: 'active',
    hoursThisWeek: 40,
    avatar: TEAM_AVATARS['Nadine Yumba'],
  },
  {
    id: 'team_7',
    name: 'Blaise Nganga',
    role: 'Comptable',
    email: 'blaise.nganga@racinebyganda.cg',
    phone: '+242 06 000 007',
    hireDate: '2022-01-05',
    department: 'Finance',
    status: 'active',
    hoursThisWeek: 32,
    avatar: TEAM_AVATARS['Blaise Nganga'],
  },
  {
    id: 'team_8',
    name: 'Carine Lelo',
    role: 'Stagiaire Marketing',
    email: 'carine.lelo@racinebyganda.cg',
    phone: '+242 06 000 008',
    hireDate: '2024-01-10',
    department: 'Ventes',
    status: 'active',
    hoursThisWeek: 20,
    avatar: TEAM_AVATARS['Carine Lelo'],
  },
];

export const teamService = {
  getAll: async () => MOCK_TEAM,
  getById: async (id: string) => MOCK_TEAM.find(t => t.id === id),
  getByDepartment: async (dept: string) =>
    dept === 'Tous'
      ? MOCK_TEAM
      : MOCK_TEAM.filter(t => t.department === dept),
};