import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <nav className="bg-black px-6 py-6 text-white">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
        <main className="bg-blue-100 w-full h-screen px-6 pt-5">
          {children}
        </main>
      </body>
    </html>
  );
}
