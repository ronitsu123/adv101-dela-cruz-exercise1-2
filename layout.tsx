import "./globals.css";
import Header from "./header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-purple-600 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <footer className="bg-[#080b12] border-t border-slate-800/60 text-slate-500 py-6 text-center text-sm">
        </footer>
      </body>
    </html>
  );
}
