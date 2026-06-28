import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/sullivan-concrete-llc"),
  title: "Sullivan Concrete LLC | Concrete Contractor Northport AL",
  description:
    "Concrete slabs, sidewalks, driveways, curbs and stamped concrete from Sullivan Concrete LLC in Northport, Alabama.",
  robots: "index, follow",
  alternates: {
    canonical: "https://deanooooooooo.github.io/sullivan-concrete-llc/",
  },
  openGraph: {
    type: "website",
    title: "Sullivan Concrete LLC | Concrete Contractor Northport AL",
    description:
      "Concrete slabs, driveways, sidewalks, curbs and stamped concrete in Northport, Alabama.",
    url: "https://deanooooooooo.github.io/sullivan-concrete-llc/",
    images: ["/assets/concrete-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sullivan Concrete LLC | Concrete Contractor Northport AL",
    description:
      "Concrete slabs, driveways, sidewalks and stamped concrete in Northport.",
    images: ["/assets/concrete-hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
