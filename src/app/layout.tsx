import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Toko Online",
  description: "Ecommerce Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar sudah compatible Next.js 14+ */}
        {children}
      </body>
    </html>
  );
}