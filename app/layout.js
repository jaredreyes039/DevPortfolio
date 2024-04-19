import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jay Dev & Design",
  description: "Looking to bring your newest vision to the web? Maybe you're a small business ready to add-on another server and need an extra hand? Whatever your needs may be, I invite you to check out my portfolio here at Jay Dev and Design, and reach out to see how I can help make your life on the web a bit easier!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
