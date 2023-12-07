import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

const raleway = Raleway({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://kimjanssens.be"),
	title: {
		template: "%s | Kim Janssens",
		default: "Kim Janssens | Webdesign in Tisselt",
	},

	description:
		"Freelance front-end developer en webdesigner. Uw parnter voor een professionele website op maat.",
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
			"Freelance front-end developer en webdesigner. Uw partner voor een professionele website op maat.",
		siteName: "Kim Janssens",
		images: [
			{
				url: "/logo.png",
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
				<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
						<SiteHeader />

						<main id="content" className="pt-24 lg:py-24">
							{children}

							<footer className="text-sm text-slate-500">
								<p>
									Ontworpen en ontwikkeld door © 2023 Kim Janssens. Alle rechten
									voorbehouden.
								</p>
							</footer>
						</main>
					</div>
				</div>

				<CookieBanner />
				<Analytics />
			</body>
		</html>
	);
}
