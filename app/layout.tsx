import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nxt adv online",
  description: "inbound marketing powerhouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
