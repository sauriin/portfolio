import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import AppLoader from "@/components/AppLoader";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Saurin Parmar | Full Stack Developer & Data Analyst",
    template: "%s | Saurin Parmar",
  },

  description:
    "Portfolio of Saurin Parmar showcasing Full Stack Development, Data Analytics, Artificial Intelligence, Cloud Computing, and modern web applications built using Next.js, React, TypeScript, SQL, Python, and Power BI.",

  keywords: [
    "Saurin Parmar",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Data Analyst",
    "Next.js",
    "React",
    "TypeScript",
    "SQL",
    "Python",
    "Power BI",
    "AI",
    "Cloud Computing",
  ],

  authors: [
    {
      name: "Saurin Parmar",
    },
  ],

  creator: "Saurin Parmar",

  openGraph: {
    title: "Saurin Parmar | Full Stack Developer & Data Analyst",
    description:
      "Explore my portfolio featuring Full Stack Development, Data Analytics, AI projects, certifications, and modern web applications.",

    url: "https://your-domain.vercel.app",

    siteName: "Saurin Parmar Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saurin Parmar Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saurin Parmar | Portfolio",
    description:
      "Full Stack Developer • Data Analyst • AI Enthusiast",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppLoader>
          {children}
        </AppLoader>

        <Toaster
          position="top-right"
          richColors
          theme="dark"
        />

        <Analytics />
      </body>
    </html>
  );
}