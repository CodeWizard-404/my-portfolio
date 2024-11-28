import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link';
import DarkModeToggle from "@/components/DarkModeToggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio showcasing projects and skills.",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <nav className=" text-white p-4 flex justify-between items-center ">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-semibold">
            My Portfolio
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="#about" className="hover:text-blue-300">About</Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-300">Projects</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-300">Contact</Link>
            </li>
          </ul>
        </div>
        <DarkModeToggle />
      </nav>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4">
        <div className="text-center">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
      </body>
    </html>
  );
}
