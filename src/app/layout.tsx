import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GA_MEASUREMENT_ID } from "../lib/gtag";
import AnalyticsListener from "../components/AnalyticsListener"; 
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Magenta Creative Digital - Naikkan Level Bisnis Anda",
  description: "Kami membantu UMKM membangun brand, website, dan social media agar lebih profesional dan dipercaya pelanggan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <AnalyticsListener />
        {children}
      </body>
    </html>
  );
}
