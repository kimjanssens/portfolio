<template>
	<footer class="bg-green-100 py-20">
		<div>
			<div class="container mx-auto">
				<div class="flex items-center justify-between">
					<AppLogo />

					<nav className="flex items-center">
						<nuxt-link
							to="https://github.com/kimjanssens"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							<FiGithub className="h-5 w-5" />
						</nuxt-link>
						<nuxt-link
							to="https://www.instagram.com/kimjanssens90"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							<FiInstagram className="h-5 w-5 text-black" />
						</nuxt-link>
						<nuxt-link
							to="https://twitter.com/kimjanssens90"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							<FiTwitter className="h-5 w-5 text-black" />
						</nuxt-link>
						<nuxt-link
							to="https://www.linkedin.com/in/kimjanssens90"
							target="_blank"
							className="p-3 hover:-translate-y-1 transition ease-in-out duration-300"
						>
							<FiLinkedin className="h-5 w-5 text-black" />
						</nuxt-link>
					</nav>
				</div>
			</div>
		</div>

		<hr class="my-8 border-green-800 border-opacity-20" />

		<div class="container mx-auto">
			<div class="flex items-center justify-between">
				<div>
					<p class="font-poppins text-sm text-gray-600">
						&copy; 2024 Kim Janssens - Korte Straat 10 2830 Tisselt - BTW BE
						0742 754 536
					</p>
				</div>

				<div class="flex items-center gap-4">
					<nuxt-link
						to="/privacy"
						class="font-poppins text-sm text-gray-600 underline"
					>
						Privacy Policy
					</nuxt-link>
					<NuxtLink
						to="/terms"
						class="font-poppins text-sm text-gray-600 underline"
					>
						Terms & Conditions
					</NuxtLink>
					<NuxtLink
						to="/contact"
						class="font-poppins text-sm text-gray-600 underline"
					>
						Contact
					</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>
