import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Taste Mithra | Friend that can't spare",
  description: "Since 2021, Taste Mithra has been your trusted kitchen companion, delivering 100% pure coconut oil, authentic masala powders, and premium grain flours. Guided by our core philosophy, 'We only sell what we eat', we guarantee home-like hygiene and uncompromising quality.",
  keywords: "Taste Mithra, pure coconut oil, authentic masala powders, premium grain flours, Kerala spices, home-like hygiene, pure organic coconut oil, Manniyamperumbalam, Kudallur post, Pin : 679554, Palakkad district, Kerala",
  authors: [{ name: "Taste Mithra" }],
  openGraph: {
    title: "Taste Mithra | Friend that can't spare",
    description: "Since 2021, Taste Mithra has been your trusted kitchen companion, delivering 100% pure coconut oil, authentic masala powders, and premium grain flours.",
    url: "https://tastemithra.com",
    siteName: "Taste Mithra",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

