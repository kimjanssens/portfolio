import Link from "next/link";
import { motion } from "framer-motion";

import { staggerContainer, textVariant } from "@/utils/motion";

const Contact = () => {
	const MotionLink = motion(Link);

	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="flex items-center py-24 mb-24"
		>
			<div className="container max-w-2xl mx-auto px-4 md:px-20 text-center">
				<motion.h2
					variants={textVariant(0.1)}
					className="font-raleway text-snow text-6xl font-semibold mb-8"
				>
					Neem contact op
				</motion.h2>
				<motion.p
					variants={textVariant(0.2)}
					className="font-raleway text-silver text-base sm:text-lg mb-12"
				>
					Hoewel ik momenteel niet op zoek ben naar een nieuwe uitdaging, staat
					mijn inbox altijd open voor free-lance projecten.
				</motion.p>
				<MotionLink
					variants={textVariant(0.3)}
					href="mailto:hello@kimjanssens.be"
					className="font-ibm text-base sm:text-lg text-turquoise-blue inline-block border-2 border-solid border-turquoise-blue px-4 py-2 hover:bg-turquoise-blue hover:text-prussian-blue sm:mr-4 mb-4 text-center"
				>
					Stuur mij een bericht!
				</MotionLink>
			</div>
		</motion.section>
	);
};

Contact.propTypes = {};

export default Contact;
