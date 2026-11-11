
import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDQODE — Your Identity Goes Digital",
  description:
    "IDQODE menyediakan layanan desain kartu nama, kartu NFC, dan kartu Art Carton dengan QR Code untuk identitas profesional yang lebih modern.",
  applicationName: "IDQODE",
  keywords: [
    "IDQODE",
    "kartu nama digital",
    "kartu NFC",
    "desain kartu nama",
    "QR Code",
    "Art Carton",
  ],
  openGraph: {
    title: "IDQODE — Your Identity Goes Digital",
    description:
      "Identitas profesional melalui desain kreatif dan teknologi digital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${manrope.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
