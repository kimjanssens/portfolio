import Link from "next/link";

const Navigation = () => {
	return (
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
	);
};

export default Navigation;
