import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "DeepFake Detection Research Lab",
  description: "Cutting-edge research in deep fake detection and analysis",
  keywords: ["deep fake", "AI", "machine learning", "detection", "research", "cybersecurity"],
};

// Server component that exports metadata
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // This runs before React hydration
              // Remove all fdprocessedid attributes that cause hydration mismatches
              document.addEventListener('DOMContentLoaded', function() {
                document.querySelectorAll('[fdprocessedid]').forEach(function(el) {
                  el.removeAttribute('fdprocessedid');
                });
              });
            })();
          `
        }} />
      </head>
      <body
        className="font-sans antialiased"
      >
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
