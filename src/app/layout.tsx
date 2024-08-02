import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap'
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
