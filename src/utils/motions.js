import { damp } from "three/src/math/MathUtils.js";

export const geoVariants = {
	0: {
		rotateY: -0.5,
		x: 0,

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

		transition: {
			duration: 1,
			type: "tween",
			damping: 100,
			stiffness: 300,
		},
	},
	2: {
		rotateY: 0,
		x: -0.3,

		transition: {
			duration: 1,
			type: "tween",
			damping: 100,
			stiffness: 300,
		},
	},
};
