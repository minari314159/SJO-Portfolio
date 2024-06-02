import { useState, useEffect } from "react";

const Menu = ({ open, changeSection, section }) => {
	const [active, setActive] = useState(0);
	useEffect(() => {
		setActive(section);
	}, [section]);
	return (
		<section
			className={`${
				!open ? "hidden" : ""
			} fixed z-20 w-[8rem] border-none top-5 hidden md:flex md:left-[75vw] lg:left-[80vw] xl:left-[89vw] justify-between `}>
			<button
				className={`${
					active === 0
						? "text-white underline underline-offset-[0.5rem] "
						: "text-gray-500 hover:scale-[105%] transition-all duration-300"
				} text-3xl cursor-pointer `}
				onClick={() => changeSection(0)}>
				1
			</button>

			<button
				className={`${
					active === 1
						? "text-white underline underline-offset-[0.5rem] "
						: "text-gray-500 hover:scale-[105%] transition-all duration-300"
				} text-3xl cursor-pointer `}
				onClick={() => changeSection(1)}>
				2
			</button>
			<button
				className={`${
					active === 2
						? "text-white underline underline-offset-[0.5rem] "
						: "text-gray-500 hover:scale-[105%] transition-all duration-300"
				} text-3xl cursor-pointer `}
				onClick={() => changeSection(2)}>
				3
			</button>
		</section>
	);
};

export default Menu;
