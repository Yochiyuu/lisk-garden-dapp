"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { PannaProvider } from "panna-sdk";

export function Providers({ children }: { children: React.ReactNode }) {
  const clientId = process.env.NEXT_PUBLIC_PANNA_CLIENT_ID;
  const partnerId = process.env.NEXT_PUBLIC_PANNA_PARTNER_ID;

  const hasPanna = !!clientId && !!partnerId;

  return (
    <>
      {hasPanna ? (
        <PannaProvider clientId={clientId} partnerId={partnerId}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </PannaProvider>
      ) : (
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      )}
    </>
  );
}
