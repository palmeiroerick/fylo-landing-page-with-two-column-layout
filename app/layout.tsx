import type { Metadata } from "next";
import { openSans, raleway } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fylo Landing Page With Two Column Layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
