import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<title>{title}</title>

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link rel="icon" href="favicon.ico" type="image/x-icon" />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="theme-color" content="#000000" />
		</Head>
	);
};

Meta.defaultProps = {
	title: "kimjanssens.be",
	description:
		"Dit is de persoonlijke portfolio website van Kim Janssens, freelance web developer/designer",
	keywords:
		"kim janssens, webdesign, developer, portfolio, freelance, website, willebroek, londerzeel",
};

export default Meta;
