"use client";
import { ThemeProvider } from "@/modules/common/theme-provider";
import { SessionProvider } from "@/modules/auth/session-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};
