<template>
	<header class="py-2">
		<div class="container mx-auto flex items-center justify-between">
			<AppLogo />

			<nav class="flex items-center gap-8">
				<nuxt-link to="/" class="font-poppins text-base font-light"
					>Home</nuxt-link
				>
				<nuxt-link to="/about" class="font-poppins text-base font-light"
					>About</nuxt-link
				>
				<nuxt-link to="/services" class="font-poppins text-base font-light"
					>Services</nuxt-link
				>
				<nuxt-link
					to="/contact"
					class="font-poppins text-base font-light bg-green-400 text-black px-5 py-3 rounded-md"
					>Contact me</nuxt-link
				>
			</nav>
		</div>
	</header>
</template>
