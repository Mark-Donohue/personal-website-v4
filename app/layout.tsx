import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import Navigation from "@/components/Navigation";

const font = Ubuntu({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Donohue",
  description: "Created using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}