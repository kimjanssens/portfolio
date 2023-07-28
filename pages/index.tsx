import type { NextPage } from "next";

import * as ga from "../lib/ga";

import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

const Home: NextPage = () => {
	const track = (action: string, params: string) => {
		ga.event({ action, params });
	};

	return (
		<>
			<Hero />

			<Contact />
		</>
	);
};

export default Home;
