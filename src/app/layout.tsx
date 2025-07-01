import "@/assets/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "@/components/toaster";

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
        <Analytics />
      </body>
    </html>
  );
}
