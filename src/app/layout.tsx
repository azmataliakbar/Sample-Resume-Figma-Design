import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Heebo, Inter } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Resume from Figma Design",
  description: "NextJs project, details are in page/layout/header/footer.tsx & globals.tsx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <div className="layout-container">
          <Header font={inter.className} />
          {children}
          <Footer />
          <h4 className="text-gray-400 text-center">Author: Azmat Ali</h4>
        </div>
      </body>
    </html>
  );
}
