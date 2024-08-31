import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Import Montserrat instead of Inter
import { Volkhov } from "next/font/google"; // Import Volkhovert
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] }); // Use Montserrat

export const metadata: Metadata = {
  title: "Netflix Clone By Khaa",
  description: "Netflix Clone with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>{" "}
      {/* Apply Montserrat font */}
    </html>
  );
}
