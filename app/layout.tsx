import "./global.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snappit — Screenshot Tools, Reimagined",
  description:
    "Capture any region of your screen and instantly extract text, scan QR codes, pick colors, and measure pixels with precision. A powerful macOS screen capture utility.",
  keywords: [
    "screenshot",
    "screen capture",
    "OCR",
    "text extraction",
    "QR code scanner",
    "color picker",
    "macOS",
    "productivity",
  ],
  authors: [{ name: "pinkcolorrr" }],
  openGraph: {
    title: "Snappit — Screenshot Tools, Reimagined",
    description:
      "Capture any region of your screen and instantly extract text, scan QR codes, pick colors, and measure pixels with precision.",
    type: "website",
    locale: "en_US",
    siteName: "Snappit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snappit — Screenshot Tools, Reimagined",
    description: "A powerful macOS screen capture utility that goes beyond simple screenshots.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
