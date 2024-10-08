import localFont from "next/font/local";
import "./globals.css";
import { Frank_Ruhl_Libre as MySerif } from "next/font/google";

const mySerif = MySerif({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-myserif",
});
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

export const metadata = {
  title: "Proposal - Al Habtoor Real Estate",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mySerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
