import Link from "next/link";

import AppLogo from "@/components/AppLogo";

const AppFooter = () => {
	return (
		<footer className="bg-green-100 py-20">
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<AppLogo />

					<nav className="flex items-center">
						<Link
							href="https://github.com/kimjanssens"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							{/* <FiGithub className="h-5 w-5" /> */}
						</Link>

						<Link
							href="https://www.instagram.com/kimjanssens90"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							{/* <FiInstagram className="h-5 w-5 text-black" /> */}
						</Link>
						<Link
							href="https://twitter.com/kimjanssens90"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							{/* <FiTwitter className="h-5 w-5 text-black" /> */}
						</Link>
						<Link
							href="https://www.linkedin.com/in/kimjanssens90"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							{/* <FiLinkedin className="h-5 w-5 text-black" /> */}
						</Link>
					</nav>
				</div>
			</div>

			<hr className="my-8 border-green-800 border-opacity-20" />

			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<div>
						<p className="font-poppins text-sm text-gray-600">
							&copy; 2024 Kim Janssens - Korte Straat 10 2830 Tisselt - BTW BE
							0742 754 536
						</p>
					</div>

					<div className="flex items-center gap-4">
						<Link
							href="/privacy"
							className="font-poppins text-sm text-gray-600 underline"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="font-poppins text-sm text-gray-600 underline"
						>
							Terms & Conditions
						</Link>
						<Link
							href="/contact"
							className="font-poppins text-sm text-gray-600 underline"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default AppFooter;
