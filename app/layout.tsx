import type { Metadata } from "next";

import { StoreProvider } from "./providers/StoreProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

import { Sidebar } from "@widgets/sidebar";

import './globals.css';

import styles from './index.module.scss';

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
    <html lang="en">
    <body
    className={styles.root}
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
