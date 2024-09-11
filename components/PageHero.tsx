import Image from "next/image";

const PageHero = () => {
	return (
		<section className="relative py-40 after:absolute after:bg-slate-800 after:bg-opacity-30 after:w-full after:h-full after:top-0 after:left-0">
			<div className="container mx-auto">
				<div className="flex flex-col relative z-10 max-w-3xl text-white">
					<h2 className="font-poppins text-6xl font-bold mb-6">
						Uw partner in digitale oplossingen
					</h2>
					<p className="font-poppins text-xl font-light"></p>
				</div>
			</div>

			<Image
				src="/images/hero-image.jpg"
				alt="Hero image"
				layout="fill"
				objectFit="cover"
			/>
		</section>
	);
};

export default PageHero;
