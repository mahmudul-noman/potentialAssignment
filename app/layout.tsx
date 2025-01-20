import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mumair",
  description: "Mumair Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
