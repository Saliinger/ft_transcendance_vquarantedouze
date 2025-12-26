import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar/Navbar";
import Topbar from "@/components/layout/Topbar/Topbar";
import "@/styles/global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chess Transcendence",
  description: "Le meilleur jeu d'échecs en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main style={{
          marginLeft: '100px',
          marginRight: '10px',
          minHeight: 'calc(100vh - 70px)',
        }}>
          <Topbar />
          {children}
        </main>
      </body>
    </html>
  );
}
