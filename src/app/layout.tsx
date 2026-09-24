import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import PublicHeader from '@/components/layout/PublicHeader';
import PublicFooter from '@/components/layout/PublicFooter';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Shikkhayon | West Bengal School Discovery & Admission Portal',
  description: 'Search, compare, and connect with top schools across West Bengal. Transparent fees, board affiliations, and direct school enquiry.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full overflow-x-hidden">
      <body className="w-full min-h-screen flex flex-col justify-between antialiased bg-[#f8fafc] text-slate-800 overflow-x-hidden m-0 p-0">
        <PublicHeader />
        <main className="w-full flex-1">{children}</main>
        <PublicFooter />
      </body>
    </html>
  );
}