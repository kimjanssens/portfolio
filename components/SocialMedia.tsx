import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

import { event } from "@/lib/gtagHelper";

export default function SocialsMedia() {
	return (
		<nav className="flex items-center">
			<Link
				href="https://github.com/kimjanssens"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
				onClick={() =>
					event({
						action: "click",
						category: "Socials",
						label: "Github",
					})
				}
			>
				<FiGithub className="h-5 w-5" />
			</Link>
			<Link
				href="https://www.instagram.com/kimjanssens90"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
				onClick={() =>
					event({
						action: "click",
						category: "Socials",
						label: "Instagram",
					})
				}
			>
				<FiInstagram className="h-5 w-5 text-black" />
			</Link>
			<Link
				href="https://twitter.com/kimjanssens90"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
				onClick={() =>
					event({
						action: "click",
						category: "Socials",
						label: "Twitter",
					})
				}
			>
				<FiTwitter className="h-5 w-5 text-black" />
			</Link>
			<Link
				href="https://www.linkedin.com/in/kimjanssens90"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
				onClick={() =>
					event({
						action: "click",
						category: "Socials",
						label: "LinkedIn",
					})
				}
			>
				<FiLinkedin className="h-5 w-5 text-black" />
			</Link>
		</nav>
	);
}
