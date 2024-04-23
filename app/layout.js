import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jay Dev & Design",
  applicationName: "Jay Dev & Design",
  referrer: 'origin-when-cross-origin',
  authors: [{ name: "Jay", url: 'https://jaydevanddesign.com' }],
  creator: "Jared 'Jay' Reyes",
  description: "Looking to bring your newest vision to the web? Maybe you're a small business ready to add-on another server and need an extra hand? Whatever your needs may be, I invite you to check out my portfolio here at Jay Dev and Design, and reach out to see how I can help make your life on the web a bit easier!",
  keywords: "Developer, Web Developer, Software, Software Engineer, Freelancer, Freelance, Website, Blog, Dashboard, EComm, ECommerce, E-Commerce, Development, Web Development, Software Development, Azure Services, Azure Developer, Azure Admin, Azure Devops, Devops, Devops Admin, Site Admin, Web Admin",
  openGraph: {
    title: "Jay Dev & Design",
    description: "Looking to bring your newest vision to the web? Maybe you're a small business ready to add-on another server and need an extra hand? Whatever your needs may be, I invite you to check out my portfolio here at Jay Dev and Design, and reach out to see how I can help make your life on the web a bit easier!",
    url: "https://jaydevanddesign.com",
    siteName: "Jay Dev & Design",
    images: [{
      url: "https://jaydevanddesign.com/favicon.ico",
      width: 256,
      height: 256
    }],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
