import Link from "next/link";
import { BiStar, BiGitRepoForked } from "react-icons/bi";

const Footer = () => {
	return (
		<footer className="text-center pt-4 pb-8">
			<Link
				href="https://github.com/kimjanssens/portfolio"
				className="font-ibm text-sm text-silver inline-block hover:text-turquoise-blue transition ease-in-out duration-300"
				target="_blank"
				passHref
			>
				<p className="mb-2">Ontworpen & gemaakt door Kim Janssens</p>
				<div className="flex items-center justify-center">
					<div className="flex items-center mr-4">
						<BiStar className="h-4 w-4 mr-1" />
						<span>0</span>
					</div>
					<div className="flex items-center">
						<BiGitRepoForked className="h-4 w-4 mr-1" />
						<span>0</span>
					</div>
				</div>
			</Link>
		</footer>
	);
};

export default Footer;
