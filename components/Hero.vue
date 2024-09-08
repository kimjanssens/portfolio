<template>
	<section
		class="relative py-40 after:absolute after:bg-green-800 after:bg-opacity-60 after:w-full after:h-full after:top-0 after:left-0"
	>
		<div class="container mx-auto">
			<div class="flex flex-col relative z-10 max-w-3xl text-white">
				<h2 class="font-poppins text-6xl font-bold mb-6">
					Web development & design
				</h2>
				<p class="font-poppins text-xl font-light">
					We specialize in web development, web design, and digital marketing.
				</p>
			</div>
		</div>

		<NuxtImg
			src="/images/hero-image.jpg"
			alt="Hero image"
			:width="1500"
			:height="1101"
			class="absolute top-0 left-0 w-full h-full object-cover"
		/>
	</section>
</template>
