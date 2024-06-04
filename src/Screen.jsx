import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";
import { motion } from "framer-motion";

const Screen = ({ setOpen, open }) => {
	return (
		<motion.section
			initial={{ opacity: 0, scale: 0 }}
			animate={{
				opacity: open ? 0.92 : 0,
				scale: open ? 1 : 0,

				transition: {
					type: "spring",
					damping: 20,
					stiffness: 300,
					duration: 0.5,
				},
			}}
			className=" h-screen w-screen absolute bottom-0 left-0 flex justify-center items-center  text-black  rounded-[5rem] border-4 border-gray-400  shadow-inner transition-all"
			onClick={(e) => {
				e.stopPropagation();
			}}>
			<Suspense fallback={<LoadingScreen />}>
				<iframe
					className=" relative w-full h-full rounded-[4.5rem] shadow-inner"
					src="https://3-d-portfolio-pi.vercel.app/"
				/>
				<button
					className="rounded-full border-2 screen_text  text-gray-500 border-black bg-gray-200 px-3 py-1   text-[11px] md:text-[16px] lg:text-[18px] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]  hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none z-10 absolute top-[0.6rem] left-6 h-[2.25rem] opacity-[95%] "
					onClick={() => {
						setOpen(!open);
					}}>
					X
				</button>
			</Suspense>
		</motion.section>
	);
};

export default Screen;
