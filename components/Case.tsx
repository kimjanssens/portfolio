import Image from "next/image";
import Link from "next/link";

export interface CaseProp {
	title: string;
	image: {
		src: string;
		alt: string;
	};
	tags: string[];
	website: string;
}

interface Prop {
	project: CaseProp;
}

const Case = ({ project }: Prop) => {
	return (
		<Link
			href={project.website}
			target="_blank"
			className="block bg-slate-100 hover:cursor-pointer hover:bg-slate-200 transition ease-in-out duration-300 group"
		>
			<Image
				src={project.image.src}
				alt={project.image.alt}
				width={4000}
				height={2500}
				className="group-hover:scale-105 transition ease-in-out duration-300"
			/>

			<div className="p-8">
				<h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
					{project.title}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
						/>
					</svg>
				</h3>
				<ul className="flex items-center gap-2 flex-wrap">
					{project.tags.map((tag: string, key: number) => (
						<li
							key={key}
							className="px-4 py-2 rounded-full bg-slate-800 text-white text-sm"
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
		</Link>
	);
};

export default Case;
