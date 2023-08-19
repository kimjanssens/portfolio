import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

export default function SocialsMedia() {
	return (
		<nav className="flex items-center">
			<Link
				href="https://github.com/kimjanssens"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
			>
				<FiGithub className="h-5 w-5" />
			</Link>
			<Link
				href="https://www.instagram.com/kimjanssens90"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
			>
				<FiInstagram className="h-5 w-5 text-black" />
			</Link>
			<Link
				href="https://twitter.com/kimjanssens90"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
			>
				<FiTwitter className="h-5 w-5 text-black" />
			</Link>
			<Link
				href="https://www.linkedin.com/in/kimjanssens90"
				target="_blank"
				className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
			>
				<FiLinkedin className="h-5 w-5 text-black" />
			</Link>
		</nav>
	);
}
