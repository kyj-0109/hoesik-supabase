import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "회식 어디갈까? | 赤坂・紀尾井町",
  description: "赤坂・紀尾井町エリア ランダム飲み会スポット",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
