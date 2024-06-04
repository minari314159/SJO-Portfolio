import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const ScrollManager = ({ section, changeSection }) => {
	const data = useScroll();
	const isAnimating = useRef(false);
	const lastScroll = useRef(0);
	data.fill.classList.add("top-0", "absolute");

	useEffect(() => {
		gsap.to(data.el, {
			duration: 1,
			scrollTop: section * data.el.clientHeight,
			onStart: () => {
				isAnimating.current = true;
			},
			onComplete: () => {
				isAnimating.current = false;
			},
		});
	}, [section]);

	useFrame(() => {
		if (isAnimating.current) {
			lastScroll.current = data.scroll.current;
			return;
		}
		const currentSection = Math.floor(data.scroll.current * data.pages);
		//Forward scroll
		if (data.scroll.current > lastScroll.current && currentSection === 0) {
			changeSection(1);
		} else if (
			data.scroll.current > lastScroll.current &&
			currentSection === 1
		) {
			changeSection(2);
		}

		//Backwards scroll
		if (
			data.scroll.current < lastScroll.current &&
			data.scroll.current < 0.34
		) {
			changeSection(0);
		}
		if (
			data.scroll.current < lastScroll.current &&
			data.scroll.current > 0.35
		) {
			changeSection(1);
		}

		lastScroll.current = data.scroll.current;
	});
	return null;
};

export default ScrollManager;
