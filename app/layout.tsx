import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Akash Mothukuri · Senior React Native Engineer",
  description:
    "Senior React Native Engineer focused on fintech payments, real-time systems, and scalable mobile performance.",
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