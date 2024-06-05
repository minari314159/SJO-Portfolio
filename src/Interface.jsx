import { motion } from "framer-motion";

import Screen from "./Screen";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Interface = ({ section, open, setOpen }) => {
	const { ref, inView } = useInView();
	useEffect(() => {
		if (!inView) setOpen(false);
	}, [inView]);

	const screenVariants = {
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
	return (
		<section>
			<motion.section
				className="h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start "
				initial={{ opacity: 0, x: -50 }}
				animate={"" + section}
				variants={{
					0: {
						opacity: 1,
						x: 0,
						transition: { ease: "linear", duration: 1, delay: 0.4 },
					},
				}}>
				<h1 className="text-white text-[60px] lg:text-[80px] mt-[6rem]  lg:mt-[8rem] ">
					Welcome to <br /> My Portfolio
				</h1>
				<h3 className="text-gray-400 align-left text-[18px] lg:text-[20px]">
					* Scoll to proceed *
				</h3>
			</motion.section>
			<motion.section
				className="h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-end "
				initial={{ opacity: 0, x: 70 }}
				animate={"" + section}
				variants={{
					1: {
						opacity: 1,
						x: 0,
						transition: { ease: "linear", duration: 1, delay: 0.4 },
					},
				}}>
				<h1 className="text-white text-[50px] lg:text-[60px] xl:text-[70px] text-center md:text-right mt-[6rem] ">
					Sit down, <br className="flex" />
					Turn it on,
					<br className="flex" />
					Enjoy !
				</h1>
				<h3 className="text-gray-500 text-center md:text-right text-[15px] lg:text-[20px]">
					* Scroll to proceed *
				</h3>
			</motion.section>
			<section
				className=" h-screen w-screen   
					">
				<motion.div
					ref={ref}
					initial={screenVariants.initial}
					animate={
						inView && section >= 2
							? screenVariants.animate
							: screenVariants.initial
					}
					variants={screenVariants}
					className=" h-[40vh] w-[60vw]  flex justify-center items-center cursor-pointer"
					onClick={() => setOpen(!open)}>
					<motion.p
						className={`${
							open
								? "opacity-0 screen_text transition-all delay-[50ms]"
								: "text-gray-500 pointer-events-none screen_text  transition-all delay-300"
						} `}>
						Click to Enter<span className="animate-pulse">_</span>
					</motion.p>
				</motion.div>

				{open && <Screen setOpen={setOpen} open={open} />}
			</section>
		</section>
	);
};

export default Interface;
