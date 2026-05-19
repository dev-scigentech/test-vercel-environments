import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello",
  description: "A beautiful welcome landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="text-foreground">{children}</body>
    </html>
  );
}
