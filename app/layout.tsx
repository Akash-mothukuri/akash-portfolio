import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://akash-portfolio-sepia.vercel.app"),
  title: "Akash Mothukuri · Senior React Native Engineer",
  description:
    "Senior React Native Engineer focused on fintech payments, real-time systems, and scalable mobile performance.",
  openGraph: {
    title: "Akash Mothukuri · Senior React Native Engineer",
    description:
      "Fintech payments · Real-time systems · Scalable mobile performance",
    url: "https://akash-portfolio-sepia.vercel.app",
    siteName: "Akash Mothukuri Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Mothukuri · Senior React Native Engineer",
    description:
      "Fintech payments · Real-time systems · Scalable mobile performance",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}