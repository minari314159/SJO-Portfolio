import React from "react";

const LoadingButton = () => {
  return (
    <div className="flex-3  w-[750px] h-[730px] s:h-[650px] lg:w-[780px] lg:h-[600px]  border-none overflow-hidden screen  rounded-lg md:rounded-[3rem] flex items-center justify-center bg-[rgb(113,63,18,0.1)]">
      <button className="text-white  font-mono text-[20px] lg:text-[30px] h-[50px] flex p-2">
        Click to Enter <p className="animate-pulse">_</p>
      </button>
    </div>
  );
};

export default LoadingButton;
