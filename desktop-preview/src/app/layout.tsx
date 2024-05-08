import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
}


const RootLayout: React.FC<RootLayoutProps> = ({
  children}) => { 
    return (
      <>
        <main className={inter.className}>{children}</main>
      </>
     
    );

  }
  export default RootLayout;


