import Link from "next/link";
import { BiStar, BiGitRepoForked } from "react-icons/bi";

const Footer = () => {
	return (
		<footer className="text-center p-8">
			<Link href="https://github.com/kimjanssens/portfolio">
				<a
					className="font-raleway text-sm text-silver inline-block hover:text-turquoise-blue transition ease-in-out duration-300"
					target="_blank"
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
				</a>
			</Link>
		</footer>
	);
};

export default Footer;
