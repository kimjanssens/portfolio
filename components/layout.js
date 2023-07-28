import Meta from "@/components/Meta";
import Header from "@/components/Header";
import Socials from "@/components/Socials";
import Mail from "@/components/Mail";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Meta title="Kim Janssens" />

			<Header />

			<main>{children}</main>

			<Socials
				github="kimjanssens"
				linkedin="kimjanssens90"
				instagram="kimjanssens90"
				twitter="kimjanssens90"
			/>

			<Mail />

			<Footer />
		</>
	);
};

export default Layout;
