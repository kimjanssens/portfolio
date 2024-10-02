import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AppLogo from "@/components/AppLogo";

const AppFooter = () => {
	return (
		<footer className="bg-slate-800 py-20">
			<div className="container mx-auto">
				<div className="flex items-center justify-between mb-8 pb-8 border-b border-white border-opacity-20">
					<AppLogo theme="light" />

					<nav className="flex items-center text-white">
						<Link
							href="https://github.com/kimjanssens"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300 hover:text-amber-500"
						>
							<FaGithub className="h-5 w-5" />
						</Link>

						<Link
							href="https://www.linkedin.com/in/kimjanssens90"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300 hover:text-amber-500"
						>
							<FaLinkedin className="h-5 w-5" />
						</Link>
					</nav>
				</div>

				<div className="flex items-center justify-between">
					<div>
						<p className="font-poppins text-sm font-light text-white">
							&copy; 2024 Kim Janssens - Korte Straat 10 2830 Tisselt - BTW BE
							0742 754 536
						</p>
					</div>

					<div className="flex items-center gap-4">
						<Link
							href="/privacy-beleid"
							className="font-poppins text-sm font-light text-white underline hover:text-amber-500"
						>
							Privacy Beleid
						</Link>
						<Link
							href="/algemene-voorwaarden"
							className="font-poppins text-sm font-light text-white underline hover:text-amber-500"
						>
							Algemene Voorwaarden
						</Link>
						<Link
							href="/sitemap"
							className="font-poppins text-sm font-light text-white underline hover:text-amber-500"
						>
							Sitemap
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
