import Link from "next/link";

const MobileNavigation = ({ open, setOpen }) => {
	return (
		<aside
			className={`fixed h-screen top-0 right-0 bg-prussian-blue-dark w-3/4 transition ease-in-out duration-300 ${
				open ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<nav className="flex flex-col text-center justify-center h-full">
				<Link href="/">
					<a
						className="font-raleway text-xl text-snow py-6 hover:text-turquoise-blue transition ease-in-out duration-300"
						onClick={() => setOpen(!open)}
					>
						Home
					</a>
				</Link>
				<Link href="/over">
					<a
						className="font-raleway text-xl text-snow py-6 hover:text-turquoise-blue transition ease-in-out duration-300"
						onClick={() => setOpen(!open)}
					>
						Over
					</a>
				</Link>
				<Link href="/contact">
					<a
						className="font-raleway text-xl text-snow py-6 hover:text-turquoise-blue transition ease-in-out duration-300"
						onClick={() => setOpen(!open)}
					>
						Contact
					</a>
				</Link>
			</nav>
		</aside>
	);
};

export default MobileNavigation;
