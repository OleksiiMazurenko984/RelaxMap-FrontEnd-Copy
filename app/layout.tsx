import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "modern-normalize";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ModalProvider } from "@/providers/modal-provider";
import { QueryProvider } from "@/components/providers/QueryProvider";

export const metadata: Metadata = {
  title: "RelaxMap",
  description: "RelaxMap frontend application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <QueryProvider>{children}</QueryProvider>
        <Toaster position="top-center" />
        <ModalProvider />
        <Footer />
      </body>
    </html>
  );
}
