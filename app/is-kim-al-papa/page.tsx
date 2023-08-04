import { RiRulerLine } from "react-icons/ri";

export default function Page() {
	return (
		<div className="h-screen flex items-center justify-center bg-green-400">
			<div className="container max-w-2xl mx-auto text-center px-4 sm:px-0">
				<h1 className="font-raleway tracking-wider sm:tracking-normal text-5xl sm:text-7xl text-white mb-32">
					Ja! <strong>Céline Janssens</strong> is geboren.
				</h1>
				<ul className="grid gap-8 sm:gap-4 grid-cols-2 sm:grid-cols-4">
					<li className="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<p className="mt-4 font-raleway text-2xl text-white">21/03/2022</p>
					</li>
					<li className="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p className="mt-4 font-raleway text-2xl text-white">19:22u</p>
					</li>
					<li className="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
							/>
						</svg>
						<p className="mt-4 font-raleway text-2xl text-white">4kg</p>
					</li>
					<li className="flex flex-col items-center">
						<RiRulerLine className="h-8 w-8 text-white" />
						<p className="mt-4 font-raleway text-2xl text-white">51cm</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
