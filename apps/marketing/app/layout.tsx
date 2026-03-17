import { Footer, Header } from "@acme/ui";
import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "Acme Platform",
  description: "The everything app for your business",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}