import { Metadata } from "next";
import { Raleway } from "next/font/google";

import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

const raleway = Raleway({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Kim Janssens",
		default: "Kim Janssens | Webdesign in Tisselt",
	},

	description:
		"Freelance JavaScript developer en webdesigner. Uw parnter voor een professionele website op maat.",
	keywords: [
		"Kim Janssens",
		"webdesign",
		"developer",
		"portfolio",
		"freelance",
		"website",
		"Willebroek",
		"Tisselt",
	],
	openGraph: {
		title: {
			template: "%s | Kim Janssens",
			default: "Kim Janssens | Webdesign in Tisselt",
		},
		description:
			"Freelance JavaScript developer en webdesigner. Uw parnter voor een professionele website op maat.",
		url: "https://kimjansseens.be/",
		siteName: "Kim Janssens",
		images: [
			{
				url: "https://kimjanssens.be/logo.png",
				width: 400,
				height: 400,
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
			<GoogleAnalytics
				GA_MEASUREMENT_ID={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<body>
				<div className="mx-auto min-h-screen max-w-screen-xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<SiteHeader />

						<main>{children}</main>
					</div>
				</div>

				<CookieBanner />
			</body>
		</html>
	);
}
