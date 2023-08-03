import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import * as ga from "../lib/ga";
import Meta from "../components/Meta";

const Home: NextPage = () => {
	const track = (action: string, params: string) => {
		ga.event({ action, params });
	};

	return (
		<>
			<Meta title="Home | kimjanssens.be" />
			<div className="flex flex-col-reverse items-center sm:flex-row">
				<div className="w-full sm:w-1/2 p-8 sm:p-16 flex flex-col items-center justify-center">
					<h1 className="font-raleway text-5xl sm:text-7xl mb-8">
						Web Developer // Designer
					</h1>
					<p className="font-raleway text-base sm:text-lg mb-8">
						JavaScript developer with a focus on Angular and React & PHP
						developer with a history in Drupal. Web and Logo designer. Passion
						for sports, movies and games. Currently residenting in Mechelen,
						Belgium.
					</p>
					<div className="flex flex-col items-center justify-items-start w-full sm:flex-row">
						<Link
							href="mailto:hello@kimjanssens.be"
							className="font-raleway text-base sm:text-lg uppercase text-black block border-2 border-solid border-black px-4 py-2 hover:bg-black hover:text-white ease-in-out duration-300 sm:mr-4 mb-4 w-full sm:w-auto text-center"
							onClick={() => track("view_item", "contact")}
						>
							Contact
						</Link>
						<Link
							href="/documents/curriculum_vitae.pdf"
							className="font-raleway text-base sm:text-lg uppercase text-black block border-2 border-solid border-black px-4 py-2 hover:bg-black hover:text-white ease-in-out duration-300 sm:mr-4 mb-4 w-full sm:w-auto text-center"
							onClick={() => track("view_item", "Curriculum Vitae")}
						>
							Curriculum Vitae
						</Link>
					</div>
				</div>
				<div className="relative h-screen-1/2 sm:h-screen w-full sm:w-1/2">
					<Image
						src="/images/profile.jpg"
						alt="profile picture"
						layout="fill"
						className="object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
