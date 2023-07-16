import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

const Navigation = () => {
	return (
		<motion.nav
			variants={fadeIn}
			initial="hidden"
			animate="show"
			className="hidden w-full md:block md:w-auto"
		>
			<Link href="/" className="link p-3 mx-1">
				Home
			</Link>
			<Link href="/over" className="link p-3 mx-1">
				Over
			</Link>
			<Link href="/contact" className="link p-3 mx-1">
				Contact
			</Link>
		</motion.nav>
	);
};

export default Navigation;
