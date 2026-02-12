import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syntux Demo - AI-Generated UI",
  description: "Demo of the Syntux UI library with dynamic AI-generated components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
