import { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";

import SiteHeader from "../components/SiteHeader";

const raleway = Raleway({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Kim Janssens",
		default: "Kim Janssens",
	},

	description:
		"Dit is de persoonlijke portfolio website van Kim Janssens, freelance JavaScript developer en webdesigner.",
	keywords: [
		"Kim Janssens",
		"webdesign",
		"developer",
		"portfolio",
		"freelance",
		"website",
		"willebroek",
		"Tisselt",
	],
	openGraph: {
		title: {
			template: "%s | Kim Janssens",
			default: "Kim Janssens",
		},
		description:
			"Dit is de persoonlijke portfolio website van Kim Janssens, freelance JavaScript developer en webdesigner.",
		url: "https://kimjansseens.be/",
		siteName: "Kim Janssens",
		images: [
			{
				url: "https://kimjanssens.be/logo.svg",
				width: 644,
				height: 696,
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
		<html lang="nl" className={raleway.className}>
			<body>
				<div className="mx-auto min-h-screen max-w-screen-xl">
					<div className="grid grid-cols-2 gap-4">
						<SiteHeader />

						<main>{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
