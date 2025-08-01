import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Green Shop",
  description: "A sustainable shopping experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-[100vh]`}
      >
        <Header />
        <main className="mt-[225px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
