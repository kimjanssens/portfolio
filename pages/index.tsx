import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import * as ga from "../lib/ga";
import Meta from "../components/Meta";
import Header from "../components/Header";
import About from "../components/About";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

import { staggerContainer, textVariant } from "../utils/motion";

const Home: NextPage = () => {
	const track = (action: string, params: string) => {
		ga.event({ action, params });
	};

	const MotionLink = motion(Link);

	return (
		<>
			<Meta title="Kim Janssens" />
			<Header />

			<section className="flex items-center h-screen">
				<div className="container max-w-5xl mx-auto px-4">
					<motion.div
						variants={staggerContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="max-w-3xl"
					>
						<motion.p
							variants={textVariant(0.1)}
							initial="hidden"
							whileInView="show"
							className="font-ibm text-base sm:text-lg text-turquoise-blue tracking-widest mb-4"
						>
							Hallo, mijn naam is
						</motion.p>
						<motion.h1
							variants={textVariant(0.2)}
							initial="hidden"
							whileInView="show"
							className="font-raleway font-semibold text-snow text-5xl sm:text-7xl mb-2"
						>
							Kim Janssens.
						</motion.h1>
						<motion.h2
							variants={textVariant(0.3)}
							initial="hidden"
							whileInView="show"
							className="font-raleway font-semibold text-5xl sm:text-7xl text-silver mb-8"
						>
							Ik maak websites.
						</motion.h2>
						<motion.p
							variants={textVariant(0.4)}
							initial="hidden"
							whileInView="show"
							className="font-raleway text-silver text-base sm:text-lg mb-8"
						>
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
						</motion.p>
						<MotionLink
							variants={textVariant(0.5)}
							initial="hidden"
							whileInView="show"
							href="mailto:hello@kimjanssens.be"
							className="font-ibm text-base sm:text-lg text-turquoise-blue inline-block border-2 border-solid border-turquoise-blue px-4 py-2 hover:bg-turquoise-blue hover:text-prussian-blue sm:mr-4 mb-4 text-center"
							onClick={() => track("view_item", "contact")}
						>
							Stuur mij een bericht!
						</MotionLink>
					</motion.div>
				</div>
			</section>

			<About />

			<Socials github="kimjanssens" linkedin="kimjanssens90" />

			<Footer />
		</>
	);
};

export default Home;
