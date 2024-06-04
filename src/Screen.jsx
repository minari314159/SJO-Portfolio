import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

const Screen = () => {
	return (
		<section
			className=" h-screen w-screen m-2 rounded-lg"
			onClick={(e) => {
				e.stopPropagation();
			}}>
			<Suspense fallback={<LoadingScreen />}>Jokes</Suspense>
		</section>
	);
};

export default Screen;
