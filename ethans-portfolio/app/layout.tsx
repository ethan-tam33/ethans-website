"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "./head";
import Layout from "@/components/Layout";  // Import Layout
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  // Avoid hydration errors by waiting for client-side render
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }

  return (
    <html lang="en">
      <Head />
      <ThemeProvider enableSystem={true} attribute="class">
        <body className={inter.className}>
          <Layout>{children}</Layout>  
        </body>
      </ThemeProvider>
    </html>
  );
}
