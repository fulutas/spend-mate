import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";
import { cookies } from "next/headers";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpendMate | Expense Tracker",
  description: "Spend Mate & Money Manager / Expense Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en" className={"dark"} style={{ colorScheme: "dark" }}>
        <body className={inter.className}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
