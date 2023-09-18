import "./globals.scss";

import Head from "next/head";
import App, { AppWrapper } from "./app";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iago Pompoonet",
  description:
    "Frontend engineer from Brazil with 4 years of experience. Currently working at Uber",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Iago Pomponet</title>
      </Head>
      <html lang="en">
        <AppWrapper>
          <App>{children}</App>
        </AppWrapper>
      </html>
    </>
  );
}
