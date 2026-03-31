import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, M_PLUS_Rounded_1c, Oswald, Anton, Black_Han_Sans, M_PLUS_1p, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const blackHanSans = Black_Han_Sans({
  variable: "--font-impact",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho_B1({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mPlus1p = M_PLUS_1p({
  variable: "--font-mplus1p",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "入社祝い金 最大100万円｜転職マッチングサービス ツナゲル",
  description: "入社祝い金最大100万円。専任アドバイザーが転職を完全サポート。求職者の利用料はずっと0円。東海エリアの優良企業の求人多数。ツナゲルで新しいキャリアを始めよう。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${mPlusRounded.variable} ${oswald.variable} ${anton.variable} ${blackHanSans.variable} ${mPlus1p.variable} ${shipporiMincho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
