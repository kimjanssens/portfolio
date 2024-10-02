import Image from "next/image";
import React from "react";

const Services = () => {
	return (
		<section className="py-20 bg-[#E3E7D3]">
			<div className="container mx-auto">
				<h2 className="font-poppins text-5xl font-bold text-slate-600 text-center mb-6">
					Hoe wij u van dienst kunnen zijn?
				</h2>

				<p className="font-poppins text-xl font-light text-center max-w-4xl mx-auto text-slate-800 mb-8">
					Wij bieden verschillende diensten aan om u te helpen met uw project.
					Hieronder een overzicht van de diensten die wij aanbieden.
				</p>

				<div className="grid grid-cols-3 gap-5 text-slate-800">
					<div className="bg-white group">
						<div className="relative overflow-hidden h-80 flex items-center justify-center">
							<Image
								src="/images/cases/thuisverpleging-lathouwers.png"
								width={4000}
								height={2500}
								alt="Dienst: Websites"
								className="group-hover:scale-105 transition ease-in-out duration-300 absolute h-full w-auto"
							/>
						</div>

						<div className="p-8">
							<h3 className="font-poppins text-4xl font-medium mb-4">
								Websites
							</h3>
							<p className="font-poppins text-lg font-light">
								Wij maken professionele websites op maat. Van eenvoudige
								informatieve websites tot complexe webshops.
							</p>
						</div>
					</div>

					<div className="bg-white group">
						<div className="relative overflow-hidden h-80 flex items-center justify-center">
							<Image
								src="/images/triple-flyer-poster-mockup.png"
								width={4000}
								height={2500}
								alt="Dienst: Branding"
								className="group-hover:scale-105 transition ease-in-out duration-300 absolute h-full w-auto"
							/>
						</div>

						<div className="p-8">
							<h3 className="font-poppins text-4xl font-medium mb-4">
								Branding
							</h3>
							<p className="font-poppins text-lg font-light">
								Wij helpen u met het ontwikkelen van een sterke merkidentiteit.
								Van logo-ontwerp tot huisstijl.
							</p>
						</div>
					</div>

					<div className="bg-white">
						<div className="relative overflow-hidden h-80 flex items-center justify-center">
							<Image
								src="/images/stock-photo-man-using-a-mobile-phone-with-google-ads-on-the-screen-and-in-the-background-a-computer-showing-ad-2430429797.jpg"
								width={1500}
								height={1100}
								alt="Dienst: Marketing"
								className="group-hover:scale-105 transition ease-in-out duration-300 object-cover"
							/>
						</div>

						<div className="p-8">
							<h3 className="font-poppins text-4xl font-medium mb-4">
								Marketing
							</h3>
							<p className="font-poppins text-lg font-light">
								Wij helpen u met het opzetten van een effectieve
								marketingstrategie. Van zoekmachineoptimalisatie tot social
								media marketing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
