import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

const Screen = () => {
  return (
    <section
      className=" flex-3  w-[750px] h-[730px] s:h-[650px] lg:w-[780px] lg:h-[600px] outline-none border-none overflow-hidden screen bg-yellow-900 rounded-lg md:rounded-[3rem] "
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <Suspense fallback={null}>
        <iframe overflow="none" src="https://3-d-portfolio-pi.vercel.app/" />
      </Suspense>
    </section>
  );
};

export default Screen;
