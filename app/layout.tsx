import type { Metadata } from "next";
import { Montserrat, Volkhov } from "next/font/google"; // Import both Montserrat and Volkhov
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] }); // Configure Montserrat
const volkhov = Volkhov({ weight: ["400"], subsets: ["latin"] }); // Configure Volkhov with weight property

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
      {/* Apply Montserrat as the default font */}
    </html>
  );
}
