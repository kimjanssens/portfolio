<template>
	<header class="py-2">
		<div class="container mx-auto flex items-center justify-between">
			<AppLogo />

			<nav class="flex items-center gap-4">
				<nuxt-link to="/">Home</nuxt-link>
				<nuxt-link to="/about">About</nuxt-link>
				<nuxt-link to="/services">Services</nuxt-link>
				<nuxt-link to="/contact">Contact</nuxt-link>
			</nav>
		</div>
	</header>
</template>
