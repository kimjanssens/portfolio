import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

const poppins = Poppins({
	weight: ["300", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Kim Janssens - Digital Agency",
	description:
		"Kim Janssens is a digital agency that specializes in web development, web design, and digital marketing.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="nl">
			<body
				className={`${poppins.variable} antialiased flex flex-col h-screen text-slate-800`}
			>
				<AppHeader />
				<main className="flex-grow">{children}</main>
				<AppFooter />
			</body>
		</html>
	);
}
