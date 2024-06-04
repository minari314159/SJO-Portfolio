export const geoVariants = {
	0: {
		rotateY: -0.5,
		x: 0,
		y: -0.1,
		scale: 0.004,
		transition: {
			duration: 1,
			type: "tween",
			damping: 100,
			stiffness: 300,
		},
	},
	1: {
		rotateY: 0.5,
		x: -0.4,
		y: -0.1,
		scale: 0.004,
		transition: {
			duration: 1,
			type: "tween",
			damping: 100,
			stiffness: 300,
		},
	},
	2: {
		rotateY: -0.05,
		x: -Math.floor(window.innerWidth / 2) * 0.0008,
		y: -Math.floor(window.innerHeight / 2) * 0.002,
		scale: 0.01,
		transition: {
			duration: 1,
			type: "tween",
			damping: 100,
			stiffness: 300,
		},
	},
};

export const screenVariants = {
	initial: {
		opacity: 0,
		x: Math.floor(window.innerWidth / 2) * 0.45,
		y: Math.floor(window.innerHeight / 2) * 0.12,
	},
	animate: {
		opacity: 1,
		x: Math.floor(window.innerWidth / 2) * 0.45,
		y: Math.floor(window.innerHeight / 2) * 0.12,
		transition: { type: "spring", duration: 1, delay: 1.2 },
	},
};
