import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A Next.js 14 Meta Threads Application",
};

const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={`${interFont.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
