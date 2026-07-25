import "./globals.css";

export const metadata = {
  title: "Our Test",
  description: "Interactive experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}