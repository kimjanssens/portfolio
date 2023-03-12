import Link from "next/link";
import {
	FiGithub,
	FiLinkedin,
	FiInstagram,
	FiFacebook,
	FiTwitter,
} from "react-icons/fi";

const Socials = ({
	github = "",
	linkedin = "",
	instagram = "",
	facebook = "",
	twitter = "",
}) => {
	return (
		<nav className="flex flex-col fixed bottom-0 left-5 after:block after:w-[1px] after:h-20 after:bg-slate-300 after:m-auto after:mt-4">
			{github && (
				<Link
					href={`https://github.com/${github}`}
					target="_blank"
					className="p-3"
				>
					<FiGithub className="h-6 w-6 text-silver hover:text-turquoise-blue hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{linkedin && (
				<Link
					href={`https://www.linkedin.com/in/${linkedin}`}
					target="_blank"
					className="p-3"
				>
					<FiLinkedin className="h-6 w-6 text-silver hover:text-turquoise-blue hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{instagram && (
				<Link
					href={`https://www.instagram.com/${instagram}`}
					target="_blank"
					className="mr-4"
				>
					<FiInstagram className="h-6 w-6 text-silver hover:text-turquoise-blue hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{facebook && (
				<Link
					href={`https://www.facebook.com/${facebook}`}
					target="_blank"
					className="mr-4"
				>
					<FiFacebook className="h-6 w-6 text-silver hover:text-turquoise-blue hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
			{twitter && (
				<Link
					href={`https://twitter.com/${twitter}`}
					target="_blank"
					className="mr-4"
				>
					<FiTwitter className="h-6 w-6 text-silver hover:text-turquoise-blue hover:-translate-x-1 transition ease-in-out duration-300" />
				</Link>
			)}
		</nav>
	);
};

export default Socials;
