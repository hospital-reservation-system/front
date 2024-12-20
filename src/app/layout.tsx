import type { Metadata } from "next";
import "@/style/globals.css";

export const metadata: Metadata = {
  title: "Hospital",
  description: "side project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
