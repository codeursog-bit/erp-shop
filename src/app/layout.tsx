import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Racine by Ganda',
  description: "L'élégance du Wax au cœur de Pointe-Noire",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}