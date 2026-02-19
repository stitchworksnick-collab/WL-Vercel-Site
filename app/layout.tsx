import type { Metadata } from "next";
import { Epilogue, Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Westfield Threads — Custom Embroidery & Print in Westfield, NJ",
    template: "%s | Westfield Threads",
  },
  description:
    "Custom embroidery, chainstitch, screen printing, and full-color heat transfer. Clear quotes, reliable turnaround, and consistent execution for businesses, schools, and individuals in Westfield, NJ.",
  metadataBase: new URL("https://westfieldthreads.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Westfield Threads",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${epilogue.variable} ${oswald.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
