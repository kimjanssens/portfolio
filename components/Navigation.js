import Link from "next/link";
import { motion } from "framer-motion";

import { staggerContainer, navVariants } from "../utils/motion";

const Navigation = () => {
	const MotionLink = motion(Link);
	return (
		<motion.nav
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			className="hidden w-full md:block md:w-auto"
		>
			<MotionLink variants={navVariants} href="/" className="link p-3 mx-1">
				Home
			</MotionLink>
			<MotionLink variants={navVariants} href="/over" className="link p-3 mx-1">
				Over
			</MotionLink>
			<MotionLink
				variants={navVariants}
				href="/contact"
				className="link p-3 mx-1"
			>
				Contact
			</MotionLink>
		</motion.nav>
	);
};

export default Navigation;
