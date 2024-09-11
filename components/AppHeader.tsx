import Link from "next/link";

import AppLogo from "@/components/AppLogo";

const AppHeader = () => {
	return (
		<header className="py-2">
			<div className="container mx-auto flex items-center justify-between">
				<AppLogo />

				<nav className="flex items-center gap-8">
					<Link href="/" className="font-poppins text-base font-light">
						Home
					</Link>
					<Link href="/about" className="font-poppins text-base font-light">
						About
					</Link>
					<Link href="/services" className="font-poppins text-base font-light">
						Services
					</Link>
					<Link
						href="/contact"
						className="font-poppins text-base font-light bg-amber-500 text-black px-5 py-3 rounded-md"
					>
						Contact me
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default AppHeader;
