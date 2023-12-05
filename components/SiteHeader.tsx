import Link from "next/link";

import SocialsMedia from "./SocialMedia";

export default function SiteHeader() {
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
			<div className="flex flex-col mb-8">
				<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
					Kim Janssens
				</h1>
				<h1 className="text-xl sm:text-2xl font-medium tracking-tight mb-4">
					Front-end developer
				</h1>
				<p className="text-base sm:text-lg mb-8">
					Ik bouw performante en toegankelijke digitale ervaringen voor het web.
				</p>

				<nav className="flex items-start gap-2">
					<Link
						href="mailto:hello@kimjanssens.be"
						className="px-4 py-2 rounded-full bg-white border border-slate-800 text-sm flex items-center gap-2 hover:bg-slate-800 hover:text-white transition ease-in-out duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
						e-mail
					</Link>
					<Link
						href="tel:+32485110414"
						className="px-4 py-2 rounded-full bg-white border border-slate-800 text-sm flex items-center gap-2 hover:bg-slate-800 hover:text-white transition ease-in-out duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
							/>
						</svg>
						telefoon
					</Link>
				</nav>
			</div>

			<SocialsMedia />
		</header>
	);
}
