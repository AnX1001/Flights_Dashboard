import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Flight Dashboard',
  description: 'Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}
