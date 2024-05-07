import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Synthia AI",
  description: "Synthia AI is a powerful AI developed by Xanmoy",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
