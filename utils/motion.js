export const staggerContainer = (staggerChildren, delayChildren) => ({
	hidden: {},
	visible: {
		transition: {
			staggerChildren,
			delayChildren,
		  },
	},
});

export const navVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export const textVariant = (delay = 0) => ({
	hidden: {
		y: 50,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.25,
			delay,
		},
	},
});

export const fadeIn = (delay) => ({
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			type: "spring",
			duration: 1.25,
			delay
		},
	}
})