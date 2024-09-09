import Link from "next/link";

const AppLogo = () => {
	return (
		<Link href="/">
			<h1 className="font-poppins text-4xl font-bold -tracking-wider">
				Kimjanssens<span className="text-green-400">.be</span>
			</h1>
			<h2 className="font-poppins text-2xl font-light -tracking-wider text-green-400">
				Digital Agency
			</h2>
		</Link>
	);
};

export default AppLogo;
