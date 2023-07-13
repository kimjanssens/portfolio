export const staggerContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

export const navVariants = {
	hidden: {
		opacity: 0,
		y: -50,
	},
	show: {
		opacity: 1,
		y: 0,
	},
};

export const textVariant = (delay) => ({
	hidden: {
		y: 50,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.25,
			delay,
		},
	},
});

export const fadeIn = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
	}
}