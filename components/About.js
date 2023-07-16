import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import profilePicture from "../public/images/profile.jpg";

import { staggerContainer, textVariant, fadeIn } from "@/utils/motion";

const About = () => {
	const MotionImage = motion(Image);
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex items-center py-24"
		>
			<div className="container max-w-5xl mx-auto px-4 md:px-20">
				<motion.h2
					variants={textVariant(1.1)}
					className="font-raleway text-snow text-3xl mb-8"
				>
					Over mezelf
				</motion.h2>

				<div className="grid gap-8 grid-cols-1 md:grid-cols-3">
					<div className="col-span-2">
						<motion.p
							variants={textVariant(1.2)}
							className="font-raleway text-silver text-base sm:text-lg mb-4"
						>
							Hallo! Mijn naam is Kim, ik ben woonachtig te Tisselt en ik ben
							opgegroeit met een passie voor sport, film en gamen. Mijn
							interesse in het web is pas gekomen na een webdesign opleiding van
							1 jaar bij Tour & Taxis in Brussel. Eenmaal de smaak te pakken
							studeerde ik 4 jaar later af als{" "}
							<Link
								href="https://weareimd.be/"
								target="_blank"
								className="text-turquoise-blue hover:underline"
							>
								Interactive Multimedia Designer
							</Link>{" "}
							(IMD) aan de Thomas More hogeschool in Mechelen.
						</motion.p>
						<motion.p
							variants={textVariant(1.3)}
							className="font-raleway text-silver text-base sm:text-lg mb-4"
						>
							Na een succesvolle stage ben ik mijn professionele carriere
							begonnen als PHP developer met de focus op Drupal. 3 jaar later
							besloot ik om de JavaScript wereld in te duiken, en geniet ik nu
							van React, Vue & Angular. Momenteel ben ik full-time in dienst bij{" "}
							<Link
								href="https://www.ellipsis-agency.com/"
								target="_blank"
								className="text-turquoise-blue hover:underline"
							>
								Ellipsis
							</Link>
						</motion.p>

						<motion.ul
							variants={textVariant(1.4)}
							className="list-disc list-inside font-raleway text-silver text-base sm:text-lg mb-4"
						>
							<li>
								Ik woon in een klein land dat gekend is voor bier, frietjes en
								chocolade.
							</li>
							<li>Ik ben een menselijke IMDB</li>
							<li>Ik eet geen saus op mijn hamburger of bij mijn frietjes.</li>
							<li>
								12 februari 1990 was niet enkel de publicatiedatum voor Super
								Mario Bros 3, maar ook mijn geboortedatum.
							</li>
							<li>
								Ik weet niet waarom uw printer niet werkt of uw computer traag
								gaat.
							</li>
						</motion.ul>
					</div>

					<MotionImage
						variants={fadeIn(1.2)}
						src={profilePicture}
						alt="Kim Janssens profielfoto"
					/>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
