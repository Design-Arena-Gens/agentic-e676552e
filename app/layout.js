import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

const seo = {
  title: "Laxmi Narayan Bartan Bhandar | Immersion Rod Campaign",
  description:
    "Bring home warmth and safety this winter with Laxmi Narayan Bartan Bhandar's premium immersion rod."
};

export const metadata = {
  title: seo.title,
  description: seo.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
