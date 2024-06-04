import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

const Screen = ({ setOpen, open }) => {
	return (
		<section
			className=" h-screen w-screen absolute bottom-0 left-0 flex justify-center items-center opacity-[90%] text-black  rounded-[5rem] border-4 border-gray-400  shadow-inner"
			onClick={(e) => {
				e.stopPropagation();
			}}>
			<Suspense fallback={<LoadingScreen />}>
				<iframe
					className=" relative w-full h-full rounded-[4.5rem] shadow-inner"
					src="https://3-d-portfolio-pi.vercel.app/"
				/>
				<button
					className="rounded-full border-2  border-black bg-gray-200 px-3 py-1  text-text text-[11px] md:text-[16px] lg:text-[18px]transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]  hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none z-10 absolute top-[0.6rem] left-6 h-[2.25rem] opacity-[95%] "
					onClick={() => {
						setOpen(!open);
					}}>
					X
				</button>
			</Suspense>
		</section>
	);
};

export default Screen;
