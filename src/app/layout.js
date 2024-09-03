import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/SharePage/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="car-doctor-theme" lang="en">
      <body className={inter.className}>
        {/* navbar */}
        <Navbar></Navbar>
        {/* outlet */}
        {children}
        
      </body>
    </html>
  );
}
