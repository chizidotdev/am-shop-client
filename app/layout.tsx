import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/modules/common/theme-toggle";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import Script from "next/script";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copia - Aidmedium",
  description: "Copia is a modern e-commerce platform for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "relative")}>
        <Providers>
          <div>{children}</div>
          <ThemeToggle />
        </Providers>

        <Script src="/service-worker.js" />
      </body>
    </html>
  );
}
