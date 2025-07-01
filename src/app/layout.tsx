import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";


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
        <Footer></Footer>
      </body>
    </html>
  );
}
