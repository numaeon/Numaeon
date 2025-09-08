import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Numaeon — Next‑gen AI, simply powerful",
  description:
    "Numaeon is your next‑gen AI project. Explore features, demos, and how to get started.",
  openGraph: {
    title: "Numaeon — Next‑gen AI, simply powerful",
    description: "Elegant, fast, and practical. Build with Numaeon.",
    type: "website",
    images: ["/favicon.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <a className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 bg-foreground/10 px-3 py-2 rounded" href="#main">
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
