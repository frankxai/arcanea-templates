import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcanea Cosmic Landing — Standard Template",
  description: "A premium open-source dark landing page powered by the Arcanea Design System & Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-mesh" />
        {children}
      </body>
    </html>
  );
}
