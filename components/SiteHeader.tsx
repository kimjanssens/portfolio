import Link from "next/link";

export default function SiteHeader() {
	return (
		<header className="max-h-screen px-8 py-24 flex flex-col items-center justify-center">
			<h1 className="text-5xl sm:text-7xl mb-8">Web Developer // Designer</h1>
			<p className="text-base sm:text-lg mb-8">
				JavaScript developer with a focus on Angular and React & PHP developer
				with a history in Drupal. Web and Logo designer. Passion for sports,
				movies and games. Currently residenting in Mechelen, Belgium.
			</p>

			<nav className="flex flex-col items-center justify-items-start w-full sm:flex-row">
				<Link
					href="mailto:hello@kimjanssens.be"
					className="text-base sm:text-lg uppercase text-black block border-2 border-solid border-black px-4 py-2 hover:bg-black hover:text-white ease-in-out duration-300 sm:mr-4 mb-4 w-full sm:w-auto text-center"
				>
					Contact
				</Link>
				<Link
					href="/documents/curriculum_vitae.pdf"
					className="text-base sm:text-lg uppercase text-black block border-2 border-solid border-black px-4 py-2 hover:bg-black hover:text-white ease-in-out duration-300 sm:mr-4 mb-4 w-full sm:w-auto text-center"
				>
					Curriculum Vitae
				</Link>
			</nav>
		</header>
	);
}
