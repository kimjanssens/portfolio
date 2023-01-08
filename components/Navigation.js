import Link from "next/link";
import { motion } from "framer-motion";

const Navigation = () => {
	const MotionLink = motion(Link);
	return (
		<nav className="hidden w-full md:block md:w-auto">
			<MotionLink
				initial={{ opacity: 0, y: -50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						delay: 0.1,
					},
				}}
				href="/"
				className="link p-3 mx-1"
			>
				Home
			</MotionLink>
			<MotionLink
				initial={{ opacity: 0, y: -50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						delay: 0.2,
					},
				}}
				href="/over"
				className="link p-3 mx-1"
			>
				Over
			</MotionLink>
			<MotionLink
				initial={{ opacity: 0, y: -50 }}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						delay: 0.3,
					},
				}}
				href="/contact"
				className="link p-3 mx-1"
			>
				Contact
			</MotionLink>
		</nav>
	);
};

export default Navigation;
