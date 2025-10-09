import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import ClientLayoutWrapper from "../components/ClientLayout";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Christina Raganit",
  description: "Christina is a product designer who writes code and thinks in systems. This is her portfolio.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        <Footer></Footer>
      </body>
    </html>
  );
}
