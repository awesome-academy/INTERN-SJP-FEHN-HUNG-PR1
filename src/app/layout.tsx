import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AppBreadcrumb } from "@/components/layout/AppBreadcrumb";
import { BreadcrumbProvider } from "@/contexts/breadcurmbContext";

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
        className={`w-full min-h-[100vh] bg-[#fbf9f9]`}
      > 
        <BreadcrumbProvider>
          <Header />
          <main className="mt-[225px]">
              <AppBreadcrumb />
            {children}
          </main>
          <Footer />
        </BreadcrumbProvider>
      </body>
    </html>
  );
}
