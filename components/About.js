import Link from "next/link";
import Image from "next/image";

import profilePicture from "../public/images/profile.jpg";

const About = () => {
	return (
		<section className="flex items-center h-screen">
			<div className="container max-w-5xl mx-auto px-4">
				<h2 className="font-raleway text-snow text-3xl mb-8">Over mezelf</h2>
				<div className="grid gap-8 grid-cols-3">
					<div className="col-span-2">
						<p className="font-raleway text-silver text-base sm:text-lg mb-4">
							Hallo! Mijn naam is Kim, ik ben afkomstig uit de gemeente
							Londerzeel maar ben momenteel woonachtig te Tisselt. Ik ben
							opgegroeit met een passie voor sport, film en gamen. Mijn
							interesse in het web is pas echt gekomen na een webdesign
							opleiding van 1 jaar bij Tour & Taxis in Brussel. Hierna studeerde
							ik af als{" "}
							<Link href="https://weareimd.be/">
								<a
									target="_blank"
									className="text-turquoise-blue hover:underline"
								>
									Interactive Multimedia Designer
								</a>
							</Link>{" "}
							(IMD) aan de Thomas More hogeschool in Mechelen
						</p>
						<p className="font-raleway text-silver text-base sm:text-lg mb-4">
							Na een succesvolle stage ben ik mijn professionele carriere
							begonnen als PHP developer met de focus op Drupal. 3 jaar later
							besloot ik om de JavaScript wereld in te duiken, en geniet ik nu
							van Angular, React & Vue. Momenteel ben ik full-time in dienst bij{" "}
							<Link href="https://www.ellipsis-agency.com/">
								<a
									target="_blank"
									className="text-turquoise-blue hover:underline"
								>
									Ellipsis
								</a>
							</Link>
						</p>
					</div>
					<div>
						<Image
							src={profilePicture}
							alt="Kim Janssens profielfoto"
							layout="responsive"
							className="grayscale hover:grayscale-0 transition duration-500 ease-in-out"
						/>
					</div>
				</div>
				<ul className="list-disc list-inside font-raleway text-silver text-base sm:text-lg">
					<li>
						Ik woon in een klein land dat gekend is voor bier, frietjes en
						chocolade.
					</li>
					<li>Ik ben een menselijke IMDB</li>
					<li>Ik eet geen saus op mijn hamburger of bij mijn frietjes.</li>
					<li>
						12 februari 1990 was niet enkel de publicatiedatum voor Super Mario
						Bros 3, maar ook mijn geboortedatum.
					</li>
					<li>
						Ik weet niet waarom uw printer niet werkt of uw computer traag gaat.
					</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
