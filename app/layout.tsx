import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nalendra Praja",
  description:
    "I like to create things from scratch, and enjoy bringing ideas to life in the browser.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Commissioner:wght@300;500;700&family=DM+Mono:wght@200;300;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}> {children}</body>
    </html>
  );
}
