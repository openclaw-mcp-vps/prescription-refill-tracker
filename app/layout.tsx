import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prescription Refill Tracker – Never miss prescription refills again",
  description: "Tracks prescription schedules and sends smart reminders accounting for pharmacy processing times. Built for patients with chronic conditions and their caregivers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="485da5ae-3e1c-4f16-8768-1d0fea05bcd3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
