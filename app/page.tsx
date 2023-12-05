import Link from "next/link";

import Case, { CaseProp } from "@/components/Case";
import { CASES } from "@/app/_data";

export default function Home() {
	return (
		<>
			<section className="mb-20">
				<h2 className="text-2xl font-bold mb-8">Over mezelf</h2>
				<p className="text-base sm:text-lg mb-4">
					In 2011 raakte ik echt geïnteresseerd in de wereld van development na
					een opleiding Webdesign bij Tour & Taxis. Later behaalde ik mijn
					bachelor{" "}
					<Link
						href="https://www.wearexd.be/"
						className="text-orange-500 hover:underline"
					>
						IMD
					</Link>{" "}
					aan de Thomas More hogeschool in Mechelen. Sinds dan heb ik gewerkt
					voor District01, Studio Hyperdrive en ViaVictor.
				</p>
				<p className="text-base sm:text-lg mb-4">
					Momenteel ben ik voltijds in dient bij{" "}
					<Link
						href="https://www.ellipsis-agency.com/"
						className="text-orange-500 hover:underline"
					>
						Ellipsis Agency
					</Link>{" "}
					waar we websites en software bouwen met Vue.js. In mijn vrije tijd
					maak ik websites voor KMO`s met Next.js en React als freelance
					developer.
				</p>
			</section>

			<section className="mb-10 lg:mb-20">
				<h2 className="text-2xl font-bold my-8">Realisaties</h2>
				<div className="flex flex-col gap-8">
					{CASES.map((project: CaseProp, key: number) => (
						<Case key={key} project={project} />
					))}
				</div>
			</section>
		</>
	);
}
