import Link from "next/link";
import {
	FiGithub,
	FiLinkedin,
	FiInstagram,
	FiFacebook,
	FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

const Socials = ({
	github = "",
	linkedin = "",
	instagram = "",
	facebook = "",
	twitter = "",
}) => {
	return (
		<motion.nav
			variants={fadeIn}
			initial="hidden"
			whileInView="visible"
			className="flex justify-center md:flex-col md:fixed bottom-0 left-5 line-after"
		>
			{github && (
				<Link
					href={`https://github.com/${github}`}
					target="_blank"
					className="p-3"
				>
					<FiGithub className="h-5 w-5 text-silver hover:text-turquoise-blue hover:-translate-y-1 md:hover:-translate-y-0 md:hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{linkedin && (
				<Link
					href={`https://www.linkedin.com/in/${linkedin}`}
					target="_blank"
					className="p-3"
				>
					<FiLinkedin className="h-5 w-5 text-silver hover:text-turquoise-blue hover:-translate-y-1 md:hover:-translate-y-0 md:hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{instagram && (
				<Link
					href={`https://www.instagram.com/${instagram}`}
					target="_blank"
					className="p-3"
				>
					<FiInstagram className="h-5 w-5 text-silver hover:text-turquoise-blue hover:-translate-y-1 md:hover:-translate-y-0 md:hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{facebook && (
				<Link
					href={`https://www.facebook.com/${facebook}`}
					target="_blank"
					className="p-3"
				>
					<FiFacebook className="h-5 w-5 text-silver hover:text-turquoise-blue hover:-translate-y-1 md:hover:-translate-y-0 md:hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{twitter && (
				<Link
					href={`https://twitter.com/${twitter}`}
					target="_blank"
					className="p-3"
				>
					<FiTwitter className="h-5 w-5 text-silver hover:text-turquoise-blue hover:-translate-y-1 md:hover:-translate-y-0 md:hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
		</motion.nav>
	);
};

export default Socials;
