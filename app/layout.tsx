import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Socials from "@/components/Socials";
import Mail from "@/components/Mail";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Kim Janssens",
		default: "Kim Janssens",
	},

	description:
		"Persoonlijke portfolio website van Kim Janssens, freelance web developer en designer.",
	keywords: [
		"Kim Janssens",
		"webdesign",
		"developer",
		"portfolio",
		"freelance",
		"website",
		"Willebroek",
		"Londerzeel",
	],
	openGraph: {
		title: {
			template: "%s | Kim Janssens",
			default: "Kim Janssens",
		},
		description:
			"Persoonlijke portfolio website van Kim Janssens, freelance web developer en designer.",
		url: "https://kimjanssens.be/",
		siteName: "Kim Janssens",
		images: [
			{
				url: "https://kimjanssens.be/logo.svg",
				width: 400,
				height: 365,
			},
		],
		locale: "nl_BE",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="nl" className={`${inter.variable}`}>
			<body className="bg-prussian-blue">
				<Header />

				<main>{children}</main>

				<Socials
					github="kimjanssens"
					linkedin="kimjanssens90"
					instagram="kimjanssens90"
					twitter="kimjanssens90"
				/>

				<Mail />

				<Footer />
			</body>
		</html>
	);
}
