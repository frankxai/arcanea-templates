import type { Metadata } from "next";
import "./globals.css";
import { QuantumField } from "../components/ui/QuantumField";

export const metadata: Metadata = {
  title: "Quantum Jump — Visit the Lives You Haven't Lived Yet",
  description:
    "A premium open-source landing template for Quantum Jumping — a guided meditative practice for visiting the parallel versions of yourself. Built with the Arcanea Design System & Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-quantum-mesh" />
        <div className="bg-grid" />
        <div className="bg-aurora" />
        <div className="fixed inset-0 -z-[2] pointer-events-none">
          <QuantumField />
        </div>
        {children}
      </body>
    </html>
  );
}
