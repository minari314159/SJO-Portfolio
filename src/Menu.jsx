const Menu = ({ changeSection, section }) => {
	return (
		<section
			className={`fixed z-20 w-[8rem] border-none top-5  flex left-[75vw] lg:left-[80vw] xl:left-[89vw] justify-between `}>
			<button
				className={`${
					section === 0
						? "text-white underline underline-offset-[0.5rem] "
						: "text-gray-500 hover:scale-[105%] transition-all duration-300"
				} text-3xl cursor-pointer `}
				onClick={() => changeSection(0)}>
				1
			</button>

			<button
				className={`${
					section >= 1 && section < 2
						? "text-white underline underline-offset-[0.5rem] "
						: "text-gray-500 hover:scale-[105%] transition-all duration-300"
				} text-3xl cursor-pointer `}
				onClick={() => changeSection(1)}>
				2
			</button>
			<button
				className={`${
					section >= 2
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
