import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomad | Premium E-Commerce Platform",
  description:
    "The refined way to sell online. Nomad makes it effortless to build a beautiful, high-converting store.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
