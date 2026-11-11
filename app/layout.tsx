
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDQODE | Your Identity Goes Digital",
  description:
    "Solusi identitas bisnis melalui desain kartu, QR Code, dan teknologi NFC.",
  applicationName: "IDQODE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
