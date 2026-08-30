import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amalbmathew.com"),
  title: "Amal B Mathew | VFX Artist",
  description:
    "Portfolio of Amal B Mathew, a VFX Artist specializing in visual effects, compositing, paint and prep, CGI, and digital production workflows.",
  keywords: [
    "VFX Artist",
    "Amal B Mathew",
    "Compositing",
    "Paint and Prep",
    "CGI",
    "Visual Effects",
    "Nuke",
    "Rotoscopy",
    "Film Production",
    "Deadpool 3",
    "Furiosa",
    "Aadujeevitham",
    "Thangalaan",
  ],
  authors: [{ name: "Amal B Mathew" }],
  creator: "Amal B Mathew",
  openGraph: {
    title: "Amal B Mathew | VFX Artist",
    description:
      "Cinematic portfolio of Amal B Mathew featuring compositing, paint & prep, CGI, and selected production experience.",
    url: "https://amalbmathew.com",
    siteName: "Amal B Mathew VFX Portfolio",
    images: [
      {
        url: "/images/showreel_poster.svg",
        width: 1920,
        height: 1080,
        alt: "Amal B Mathew - VFX Artist Showreel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amal B Mathew | VFX Artist",
    description:
      "Portfolio of Amal B Mathew, a VFX Artist specializing in visual effects, compositing, paint and prep, CGI, and digital production workflows.",
    images: ["/images/showreel_poster.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} dark scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('vfx-theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[#38bdf8] selection:text-[#070709] min-h-screen flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider>
          {/* Subtle cinematic film grain noise overlay */}
          <div className="film-grain" aria-hidden="true" />
          
          {/* Global Navigation with Dark/Light Toggle */}
          <Navbar />

          {/* Main Content Area */}
          <main className="flex-grow">{children}</main>

          {/* Global Cinematic Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
