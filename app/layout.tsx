import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teaching Brain Lab | Raphaël Parmentier",
  description:
    "Interactive teaching system showcasing applied Data Science, Statistics, Machine Learning and AI education through realistic projects and student deliverables.",

  keywords: [
    "Data Science",
    "Statistics",
    "Machine Learning",
    "Artificial Intelligence",
    "Teaching",
    "Education",
    "R",
    "Python",
    "Data Analytics",
    "University Lecturer",
    "Learning by Doing",
    "Teaching Portfolio",
    "Raphaël Parmentier",
  ],

  authors: [
    {
      name: "Raphaël Parmentier",
      url: "https://raphaelparmentier.dev",
    },
  ],

  creator: "Raphaël Parmentier",
  publisher: "Raphaël Parmentier",

  metadataBase: new URL("https://teaching.raphaelparmentier.dev"),

  openGraph: {
    title: "Teaching Brain Lab | Raphaël Parmentier",

    description:
      "Explore an interactive educational system built around Data Science, Statistics, Machine Learning and AI. Discover teaching programs, realistic projects and student deliverables.",

    url: "https://teaching.raphaelparmentier.dev",

    siteName: "Teaching Brain Lab",

    images: [
      {
        url: "/Image/og-teaching-brain.jpg",
        width: 1200,
        height: 630,
        alt: "Teaching Brain Lab - Raphaël Parmentier",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Teaching Brain Lab | Raphaël Parmentier",

    description:
      "Interactive educational system showcasing applied Data Science, Statistics, Machine Learning and AI teaching.",

    images: ["/Image/og-teaching-brain.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}