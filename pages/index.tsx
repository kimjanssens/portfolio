import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

import * as ga from "../lib/ga";
import Meta from "../components/Meta";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	const track = (action: string, params: string) => {
		ga.event({ action, params });
	};

	return (
		<>
			<Meta title="Kim Janssens" />
			<Header />

			<section className="flex items-center h-screen">
				<div className="container max-w-5xl mx-auto px-4">
					<div className="max-w-3xl">
						<p className="font-ibm text-base sm:text-lg text-turquoise-blue tracking-widest mb-4">
							Hallo, mijn naam is
						</p>
						<h1 className="font-raleway font-semibold text-snow text-5xl sm:text-7xl mb-2">
							Kim Janssens.
						</h1>
						<h2 className="font-raleway font-semibold text-5xl sm:text-7xl text-silver mb-8">
							Ik maak websites.
						</h2>
						<p className="font-raleway text-silver text-base sm:text-lg mb-8">
							Ik ben frontend developer met ervaring in Angular, React en Vue.
							PHP developer met een verleden in Drupal. Logo designer. Full-time
							in dienst bij{" "}
							<Link
								href="https://www.ellipsis-agency.com/"
								target="_blank"
								className="text-turquoise-blue hover:underline"
							>
								Ellipsis
							</Link>
							. Woonachtig te Tisselt, België.
						</p>
						<Link
							href="mailto:hello@kimjanssens.be"
							className="font-ibm text-base sm:text-lg text-turquoise-blue inline-block border-2 border-solid border-turquoise-blue px-4 py-2 hover:bg-turquoise-blue hover:text-prussian-blue ease-in-out duration-300 sm:mr-4 mb-4 text-center"
							onClick={() => track("view_item", "contact")}
						>
							Stuur mij een bericht!
						</Link>
					</div>
				</div>
			</section>

			<About />

			<Footer />
		</>
	);
};

export default Home;
