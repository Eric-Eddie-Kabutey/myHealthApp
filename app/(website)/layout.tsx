import type { Metadata } from "next";
import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Ricia Care",
  description: "Healthier should always be within reach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Header />
    {children}
    <Footer />
  </>
}
