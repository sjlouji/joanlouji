import type { Metadata } from "next";
import "../assets/styles/globals.css";
import { Toaster } from "../components/toaster";

export const metadata: Metadata = {
  title: "Joan Louji",
  description: "My developer portfolio built to showcase my works and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
