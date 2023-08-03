import Link from "next/link";

export default function SiteHeader() {
	return (
		<header className="max-h-screen px-8 py-24 flex flex-col justify-center">
			<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
				Kim Janssens
			</h1>
			<h1 className="text-xl sm:text-2xl font-medium tracking-tight mb-8">
				Front-end developer at Ellipsis Agency
			</h1>
			<p className="text-base sm:text-lg mb-8">
				Freelance JavaScript developer with a focus on React. PHP developer with
				a history in Drupal. Webdesigner. Passion for sports, movies and games.
				Currently residenting in Tisselt, Belgium.
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
