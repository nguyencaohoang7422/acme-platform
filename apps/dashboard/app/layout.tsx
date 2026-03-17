import { Header } from '@acme/ui';
import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Manage your Acme Platform",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}