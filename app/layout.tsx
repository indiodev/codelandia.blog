import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexend_deca = Lexend_Deca({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Blog | Codelândia",
  description: "Codelândia Blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${lexend_deca.className} flex flex-col h-screen`}>
        {children}
      </body>
    </html>
  );
}
