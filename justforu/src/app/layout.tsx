import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JustforU — Create Magical Digital Invitations",
  description: "Create beautiful, animated digital invitations that tell your love story. Not just cards — unforgettable experiences with music, photos, and heart-melting animations.",
  keywords: ["digital invitations", "wedding cards", "valentine", "anniversary", "birthday", "romantic", "animated invitations"],
  authors: [{ name: "JustforU" }],
  openGraph: {
    title: "JustforU — Create Magical Digital Invitations",
    description: "Create beautiful, animated digital invitations that tell your love story.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
