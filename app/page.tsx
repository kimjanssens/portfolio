import Image from "next/image";

export default function Page() {
	return (
		<Image
			src="/images/profile.jpg"
			alt="profielfoto van Kim Janssens"
			width={1440}
			height={1440}
			priority
			className="min-h-screen object-cover"
		/>
	);
}
