import Link from "next/link";

import SocialsMedia from "./SocialMedia";
import { event } from "@/lib/gtagHelper";

export default function SiteHeader() {
	return (
		<header className="lg:max-h-screen px-8 py-12 lg:py-24 flex flex-col justify-between">
			<div className="flex flex-col">
				<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
					Kim Janssens
				</h1>
				<h1 className="text-xl sm:text-2xl font-medium tracking-tight mb-8">
					Front-end developer bij Ellipsis Agency
				</h1>
				<p className="text-base sm:text-lg mb-8">
					Freelance JavaScript developer met een focus op React. PHP developer
					met een verleden in Drupal. Webdesigner. Passie voor sport, films en
					games. Momenteel woonachtig in Tisselt, België.
					{/* @TODO: Multilingual */}
					{/* Freelance JavaScript developer with a focus on React. PHP developer
					with a history in Drupal. Webdesigner. Passion for sports, movies and
					games. Currently residenting in Tisselt, Belgium. */}
				</p>

				<nav className="flex flex-col items-start w-full sm:flex-row mb-8">
					<Link
						href="mailto:hello@kimjanssens.be"
						className="text-base sm:text-lg uppercase text-black block border-2 border-solid border-black px-4 py-2 hover:bg-black hover:text-white ease-in-out duration-300 sm:mr-4 mb-4 w-full sm:w-auto text-center"
						onClick={() =>
							event({
								action: "click",
								category: "cta",
								label: "Contact",
							})
						}
					>
						Contact
					</Link>
					<Link
						href="/documents/curriculum_vitae.pdf"
						target="_blank"
						rel="noopener noreferrer"
						download
						className="text-base sm:text-lg uppercase text-black block border-2 border-solid border-black px-4 py-2 hover:bg-black hover:text-white ease-in-out duration-300 sm:mr-4 w-full sm:w-auto text-center"
						onClick={() =>
							event({
								action: "file_download",
								category: "Downloads",
								label: "curriculum_vitae.pdf",
							})
						}
					>
						Curriculum Vitae
					</Link>
				</nav>
			</div>

			<SocialsMedia />
		</header>
	);
}
