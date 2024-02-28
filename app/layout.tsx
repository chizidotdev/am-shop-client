import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/modules/common/theme-provider";
import { ThemeToggle } from "@/modules/common/theme-toggle";
import { cn } from "@/lib/utils";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
