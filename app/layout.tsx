import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/Misc/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mateo Sam",
	description: "Web Development Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<ScrollToTop />
			</body>
		</html>
	);
}
