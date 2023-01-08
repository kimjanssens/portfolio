import Link from "next/link";

const MobileNavigation = ({ open, setOpen }) => {
	return (
		<aside
			className={`fixed h-screen top-0 right-0 bg-prussian-blue-dark w-3/4 transition ease-in-out duration-300 ${
				open ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<nav className="flex flex-col text-center justify-center h-full">
				<Link
					href="/"
					className="font-ibm text-xl text-snow py-6 hover:text-turquoise-blue transition ease-in-out duration-300"
					onClick={() => setOpen(!open)}
				>
					Home
				</Link>
				<Link
					href="/over"
					className="font-ibm text-xl text-snow py-6 hover:text-turquoise-blue transition ease-in-out duration-300"
					onClick={() => setOpen(!open)}
				>
					Over
				</Link>
				<Link
					href="/contact"
					className="font-ibm text-xl text-snow py-6 hover:text-turquoise-blue transition ease-in-out duration-300"
					onClick={() => setOpen(!open)}
				>
					Contact
				</Link>
			</nav>
		</aside>
	);
};

export default MobileNavigation;
