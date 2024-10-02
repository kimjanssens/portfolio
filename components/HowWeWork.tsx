"use client";

import Image from "next/image";
import { useState } from "react";

const STEPS = [
	{
		title: "Kennismaking",
		description:
			"Tijdens het kennismakingsgesprek bespreken we uw wensen en behoeften. We kijken naar wat u nodig heeft en hoe wij u kunnen helpen.",
	},
	{
		title: "Offerte",
		description:
			"Op basis van het kennismakingsgesprek maken we een offerte op maat. Hierin staat precies wat we gaan doen en wat het gaat kosten.",
	},
	{
		title: "Uitvoering",
		description:
			"Als u akkoord gaat met de offerte, gaan we aan de slag. We houden u op de hoogte van de voortgang en zorgen ervoor dat alles op tijd wordt opgeleverd.",
	},
	{
		title: "Oplevering",
		description:
			"Als alles klaar is, leveren we het project op. We zorgen ervoor dat u tevreden bent en dat alles werkt zoals het hoort.",
	},
	{
		title: "Nazorg",
		description:
			"Ook na oplevering staan we voor u klaar. Heeft u vragen of wilt u iets aanpassen? Neem gerust contact met ons op.",
	},
];

const HowWeWork = () => {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<section className="py-20">
			<div className="container mx-auto">
				<h2 className="font-poppins text-5xl font-bold text-center mb-10">
					Werkwijze
				</h2>

				<div className={`grid grid-cols-5 gap-5 max-w-4xl mx-auto mb-8`}>
					{STEPS.map((step, index) => (
						<div
							key={index}
							className="flex flex-col items-center gap-2 relative"
						>
							<button
								type="button"
								className={`w-14 h-14 rounded-full font-poppins text-lg bg-white border-2 transition ease-in-out duration-500 ${
									activeStep === index || index < activeStep
										? "border-amber-500 text-amber-500 font-medium"
										: "border-slate-400 text-slate-400 font-light"
								}`}
								onClick={() => setActiveStep(index)}
							>
								{index + 1}
							</button>
							<p
								className={`text-center font-poppins text-lg font-light text-slate-800 ${
									activeStep === index || index < activeStep
										? "font-medium"
										: "font-light"
								}`}
							>
								{step.title}
							</p>
							{index + 1 < STEPS.length && (
								<span
									className={`absolute h-[2px] bg-slate-400 w-full top-7 left-1/2 -z-10 after:absolute after:h-full after:w-full after:origin-left after:bg-amber-500 after:transition after:ease-in-out after:duration-500 ${
										index < activeStep
											? "after:transform-none"
											: "after:scale-x-0"
									}`}
								/>
							)}
						</div>
					))}
				</div>

				<div className="grid grid-cols-12">
					<div className="relative col-span-7">
						<Image
							src="/images/stock-photo-two-businessmen-having-a-discussion-working-on-laptop-computer-using-digital-tablet-and-mobile-2476549551.jpg"
							alt="How we work"
							width={1500}
							height={1049}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="col-span-5 bg-amber-500 flex items-center">
						<div className="bg-white text-slate-800 p-20 relative right-10">
							<h3 className="font-poppins text-4xl font-medium mb-4">
								{STEPS[activeStep].title}
							</h3>
							<p className="font-poppins text-lg font-light">
								{STEPS[activeStep].description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowWeWork;
