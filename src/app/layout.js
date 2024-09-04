import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/SharePage/Navbar";
import Footer from "@/components/SharePage/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Pro",
  description: "Car repear workshop",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="car-doctor-theme" lang="en">
      <body className={inter.className}>
        {/* navbar */}
        <Navbar></Navbar>
        {/* outlet */}
        <main className="w-[95%] min-h-[calc(100vh-370px)] my-10 md:w-11/12 max-w-[1440px] mx-auto">
          {children}
        </main>
        {/*  */}
        <Footer></Footer>
      </body>
    </html>
  );
}
