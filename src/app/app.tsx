"use client";

import { ThemeProvider, useThemeContext } from "@/context/theme";
import { ReactNode } from "react";
import Header from "./components/Header/Header";

export const AppWrapper = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default function App({ children }: { children: ReactNode }) {
  const { theme } = useThemeContext();
  return (
    <body className={theme}>
      <Header />
      {children}
    </body>
  );
}
