import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../public/logo.svg";

const Header = () => {
	return (
		<header className="fixed w-full h-24 top-0 flex items-center">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between items-center">
					{/* Logo */}
					<Link href="/" passHref>
						<a aria-label="home">
							<Image
								src={logo}
								alt="Kim Janssens logo"
								height={44}
								width={44}
							/>
						</a>
					</Link>

					{/* Navigation */}
					<nav className="hidden w-full md:block md:w-auto">
						<Link href="/">
							<a className="font-raleway text-sm text-snow inline-block p-3 mx-1 hover:text-turquoise-blue transition ease-in-out duration-300">
								Home
							</a>
						</Link>
						<Link href="/over">
							<a className="font-raleway text-sm text-snow inline-block p-3 mx-1 hover:text-turquoise-blue transition ease-in-out duration-300">
								Over
							</a>
						</Link>
						<Link href="/contact">
							<a className="font-raleway text-sm text-snow inline-block p-3 mx-1 hover:text-turquoise-blue transition ease-in-out duration-300">
								Contact
							</a>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
