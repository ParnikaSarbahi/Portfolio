import type { Metadata } from "next";
import "./globals.css";
import GridBackground from "@/components/ui/GridBackground";
import FloatingNav from "@/components/nav/FloatingNav";

export const metadata: Metadata = {
  title: "Parnika Sarbahi — Security Engineer & AI Researcher",
  description:
    "Building things I don't yet know how to build. Self-taught deep learning, IEEE-accepted watermarking system, explainable AI IoT firewall, and autonomous LLM security agents. Graduating UPES Dehradun, June 2027.",
  keywords: [
    "Cybersecurity",
    "AI/ML",
    "Deep Learning",
    "Network Security",
    "XAI",
    "LLM Agents",
    "Python",
    "Java",
    "IEEE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative min-h-full antialiased" suppressHydrationWarning>
        <GridBackground />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
