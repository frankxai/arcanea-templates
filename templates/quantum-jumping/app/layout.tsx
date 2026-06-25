import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { QuantumField } from "../components/ui/QuantumField";
import { ScrollProgress } from "../components/ui/ScrollProgress";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const SITE_URL = "https://quantum-jump.arcanea.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Quantum Jump — Visit the Lives You Haven't Lived Yet",
    template: "%s · Quantum Jump",
  },
  description:
    "A guided meditative practice for visiting the parallel versions of yourself who already mastered what you seek — and bringing their genius home. A premium open-source Arcanea template.",
  keywords: [
    "quantum jumping",
    "meditation",
    "consciousness",
    "parallel selves",
    "theta meditation",
    "guided visualization",
    "manifestation",
    "Arcanea",
  ],
  authors: [{ name: "Arcanea", url: "https://arcanea.ai" }],
  creator: "Arcanea",
  publisher: "Arcanea",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Quantum Jump",
    title: "Quantum Jump — Visit the Lives You Haven't Lived Yet",
    description:
      "A guided meditative practice for visiting the parallel versions of yourself who already mastered what you seek.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Jump — Visit the Lives You Haven't Lived Yet",
    description:
      "A guided meditative practice for visiting the parallel versions of yourself who already mastered what you seek.",
    creator: "@arcanea",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <div className="bg-quantum-mesh" />
        <div className="bg-grid" />
        <div className="bg-aurora" />
        <div className="bg-grain" />
        <div className="fixed inset-0 -z-[2] pointer-events-none">
          <QuantumField />
        </div>
        {children}
      </body>
    </html>
  );
}
