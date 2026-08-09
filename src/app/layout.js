import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { ChatProvider } from "./context/ChatContext";
import ChatBot from "./components/ChatBot";
import { AuthProvider } from "../context/AuthContext";
import { siteConfig, pages } from "./lib/seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
  // Preloading all 5 weights on every page causes unused preload warnings
  // on pages where headings aren't immediately rendered. Keyframe/system
  // fonts fall back while Space Grotesk loads on demand.
  preload: false,
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pages.home.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "startup investments",
    "Web3 investing",
    "deal flow platform",
    "startup discovery",
    "verified startups",
    "individual investors",
    "AI screening",
    "on-chain investing",
    "capital coordination",
    "startup funding",
    "investor network",
    "Web3 startup platform",
  ],
  authors: [{ name: "Calip.io", url: siteConfig.url }],
  creator: "Calip.io",
  publisher: "Calip.io",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: pages.home.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    title: pages.home.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en": siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  other: {
    "theme-color": siteConfig.themeColor,
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="alternate" type="application/rss+xml" title="Calip.io Blog &amp; Updates" href="/feed.xml" />
      </head>
      <body
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
        suppressHydrationWarning
      >
        <AuthProvider>
          <ChatProvider>
            <SmoothScroll>
              {children}
              <ChatBot />
            </SmoothScroll>
          </ChatProvider>
        </AuthProvider>
      </body>
    </html>
  );
}