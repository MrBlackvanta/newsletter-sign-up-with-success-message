import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const title = "Newsletter sign-up form with success message";
const description =
  "Join 60,000+ product managers receiving monthly updates on product discovery, measurement and more — a Frontend Mentor challenge built with Next.js, TypeScript, and Tailwind CSS.";
const siteUrl = "https://vanta-newsletter-sign-up-with-success.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        {children}
        <footer className="px-4 pb-0.5 text-center text-label text-muted sm:text-muted-inverse">
          <p>
            Challenge by{" "}
            <a
              className="underline sm:v-focus-ring-inverse"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              className="underline sm:v-focus-ring-inverse"
              href="https://www.linkedin.com/in/abdelrhman-vanta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abdelrhman Abdelaal
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
