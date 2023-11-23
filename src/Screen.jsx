import { Suspense } from "react";
import LoadingScreen from "./LoadingScreen";

const Screen = () => {
  return (
    <section
      className=" flex-3  h-[540px] w-[650px] lg:w-[780px] lg:h-[600px] outline-none border-none overflow-hidden screen bg-[rgb(113,63,18,0.1)] rounded-[4rem]"
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
