import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'RADSHRIMP',
  description: 'Pixel-art submarine arcade shooter. Descend, destroy, survive.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>
        <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-sm text-rad-dim border-t border-rad-border mt-16">
          RADSHRIMP &copy; 2026 Wardrake Studios. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
