import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/Background";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SiteEffects from "@/components/ui/SiteEffects";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { metadata as siteMetadata } from "@/content/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${display.variable} ${sans.variable} ${mono.variable}`}>
        <Background />
        <Nav />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
