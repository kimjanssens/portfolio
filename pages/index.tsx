import type { NextPage } from "next";

import * as ga from "../lib/ga";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import Mail from "../components/Mail";
import Footer from "../components/Footer";

const Home: NextPage = () => {
	const track = (action: string, params: string) => {
		ga.event({ action, params });
	};

	return (
		<>
			<Meta title="Kim Janssens" />
			<Header />

			<Hero />

			<About />

			<Socials
				github="kimjanssens"
				linkedin="kimjanssens90"
				instagram="kimjanssens90"
				twitter="kimjanssens90"
			/>
			<Mail />

			<Footer />
		</>
	);
};

export default Home;
