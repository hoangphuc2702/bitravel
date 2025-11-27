import type { Metadata } from "next";
import { Nunito, Varela_Round } from "next/font/google";
import '@/app/globals.css'
import Navigation from "@/component/nav";
import Header from "@/component/header";
import Footer from "@/component/footer";

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

const varelaRound = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Bitravel",
  description: "Tour and travel website",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${nunito.variable} ${varelaRound.variable} antialiased`}
      >
        <Header />
        <Navigation />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
