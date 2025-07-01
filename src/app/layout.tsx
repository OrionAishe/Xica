import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/molecules/Header/Header";


export const metadata: Metadata = {
  title: "CITG Xica Manicongo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
