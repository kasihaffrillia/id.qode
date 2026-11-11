
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IDQODE | Your Identity Goes Digital",
  description:
    "IDQODE menghadirkan solusi identitas bisnis digital melalui desain kartu, QR Code, dan teknologi NFC.",
  applicationName: "IDQODE",
  keywords: [
    "IDQODE",
    "Digital Business Card",
    "NFC Card",
    "QR Code",
    "Business Identity",
    "Graphic Design",
  ],
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
