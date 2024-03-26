import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar/Navbar";

const raleway = Raleway({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Dev threads",
  description: "T-Shirt store for developers",
  keywords: "t-shirt, developer, store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
