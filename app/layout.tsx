import type { Metadata } from "next";
// Import Work Sans font from Google
import { Work_Sans } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Load Work Sans with the desired subsets and weight
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can specify the weights you want
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"], // You can specify the weights you want
});

export const metadata: Metadata = {
  title: "Six08 Gastroenterology",
  description: "Created by ChinookIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
        <link 
          rel="icon"
          href="/icon?<denerated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${workSans.className} ${montserrat.className}`}>{children}</body>
    </html>
  );
}
