import { motion } from "framer-motion";
import Screen from "./Screen";

const Interface = ({ section, open, setOpen }) => {
	return (
		<>
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
					Sit down, <br className="hidden md:flex" />
					Turn it on,
					<br className="hidden md:flex" />
					Enjoy !
				</h1>
				<h3 className="text-gray-500 text-center md:text-right text-[15px] lg:text-[20px]">
					* Scroll to proceed *
				</h3>
			</motion.section>
			<motion.section
				className="h-screen w-screen   
        relative "
				onClick={() => {
					setOpen(!open);
				}}>
				<motion.p
					initial={{ opacity: 0 }}
					animate={"" + section}
					variants={{
						2: {
							opacity: 1,
							transition: { type: "spring", duration: 1, delay: 2 },
						},
					}}
					className={`${
						open
							? "hidden"
							: "text-black absolute top-[25%] left-[47%] pointer-events-none"
					}`}>
					Click to Enter<span className="animate-pulse">_</span>
				</motion.p>
				{open && <Screen setOpen={setOpen} open={open} />}
			</motion.section>
		</>
	);
};

export default Interface;
