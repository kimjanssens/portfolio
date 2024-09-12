import Case from "@/components/Case";
import { CaseProp } from "@/types";
import { CASES } from "@/app/_data";

const Cases = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-10">
					{CASES.map((project: CaseProp, key: number) => (
						<Case key={key} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Cases;
