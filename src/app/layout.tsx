import type { Metadata } from "next";
import "@/style/globals.css";
import Bottom from "@/components/Bottom/Bottom";
import Header from "@/components/Header/Header";

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
            <body>
                <Header />
                {children}
                <Bottom />
            </body>
        </html>
    );
}
