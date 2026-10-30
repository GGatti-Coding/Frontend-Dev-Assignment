/*
 * File: layout.tsx
 * Author: Guilherme Gatti
 * Date: 2026-10-28
 * Description: Root layout that wraps every page in the app. It receives
 * the current page as children and loads the Geist fonts and global CSS.
 * It places the Navbar above and the Footer below the page content, so
 * both appear on every page. The output is the full HTML document, with
 * the content area growing to keep the footer at the bottom of the screen.
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Generation High School",
  description: "CPRG 306 Assignmet 2",
};


const RootLayout= ({ children }: {children: React.ReactNode}) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
