import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaivallya Titame | Freelance Developer | Full Stack & AI | Pune",
  description: "Freelance developer specializing in Java, Spring Boot, Angular, and MEAN Stack. Building web apps, APIs, and AI-powered tools. Based in Pune, India. Let's build something together.",
  keywords: ["Freelance Developer Pune", "Java Developer", "Spring Boot Freelancer", "Angular Developer", "MEAN Stack Developer", "Full Stack Freelancer", "Kaivallya Titame"],
  openGraph: {
    title: "Kaivallya Titame | Freelance Developer",
    description: "Full Stack & AI developer available for freelance projects. Java, Spring Boot, Angular, MEAN Stack.",
    url: "https://kaivallyatitame.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-[#08101F] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
