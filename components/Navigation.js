import Link from "next/link";

const Navigation = () => {
	return (
		<nav className="hidden w-full md:block md:w-auto">
			<Link
				href="/"
				className="font-ibm text-sm text-snow inline-block p-3 mx-1 hover:text-turquoise-blue transition ease-in-out duration-300"
			>
				Home
			</Link>
			<Link
				href="/over"
				className="font-ibm text-sm text-snow inline-block p-3 mx-1 hover:text-turquoise-blue transition ease-in-out duration-300"
			>
				Over
			</Link>
			<Link
				href="/contact"
				className="font-ibm text-sm text-snow inline-block p-3 mx-1 hover:text-turquoise-blue transition ease-in-out duration-300"
			>
				Contact
			</Link>
		</nav>
	);
};

export default Navigation;
