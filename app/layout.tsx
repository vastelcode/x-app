import type { Metadata } from "next";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['500', '400','700'],
  subsets: ['cyrillic','latin'],
  variable: '--font-montserrat'
})

import { StoreProvider } from "./providers/StoreProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

import { Sidebar } from "@widgets/sidebar";

import './globals.css';


export const metadata: Metadata = {
  title: "X | Twitter",
  description: "Developed by vastelcode",
  icons: {
    icon: '/icon-favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
    <body
    className={`root flex justify-center`}
    >
      <StoreProvider>
        <ThemeProvider>
    {/* боковая панель */}
    <Sidebar/>
    {children}
        </ThemeProvider>
      </StoreProvider>
    </body>
  </html>
  );
}
