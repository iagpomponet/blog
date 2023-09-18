"use client";

import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import { ThemeProvider, useThemeContext } from "@/context/theme";

const App = ({ children }: any) => {
  const { theme } = useThemeContext();
  return (
    <body className={theme}>
      <Header />
      {children}
    </body>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <App>{children}</App>
      </ThemeProvider>
    </html>
  );
}
