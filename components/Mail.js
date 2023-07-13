import Link from "next/link";
import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

const Mail = () => {
	return (
		<motion.div
			variants={fadeIn}
			initial="hidden"
			whileInView="show"
			className="hidden md:flex flex-col items-center fixed right-5 bottom-0 px-3 after:block after:w-[1px] after:h-20 after:bg-slate-300 after:m-auto after:mt-4"
		>
			<Link
				href="mailto:hello@kimjanssens.be"
				className="font-ibm text-xs text-vertical tracking-wider text-silver hover:text-turquoise-blue hover:-translate-y-1 transition ease-in-out duration-300"
			>
				hello@kimjanssens.be
			</Link>
		</motion.div>
	);
};

export default Mail;
