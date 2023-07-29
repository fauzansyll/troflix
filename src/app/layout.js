import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Troflix",
  description: "Your Cinema App",
  themeColor: "#000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
