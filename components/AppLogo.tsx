import Link from "next/link";

const AppLogo = ({ theme = "dark" }) => {
	return (
		<Link href="/">
			<h1
				className={`font-poppins text-4xl font-bold -tracking-wider ${
					theme === "dark" ? "text-slate-800" : "text-white"
				} `}
			>
				Kimjanssens<span className="text-amber-500">.be</span>
			</h1>
			<h2 className="font-poppins text-2xl font-light -tracking-wider text-amber-500">
				Digital Agency
			</h2>
		</Link>
	);
};

export default AppLogo;
