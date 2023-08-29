import React from "react";

const LoadingButton = () => {
  return (
    <div className="flex-3  w-[750px] h-[650px] lg:w-[780px] lg:h-[600px] border-none overflow-hidden screen  rounded-lg md:rounded-[3rem] flex items-center justify-center ">
      <button className="text-white  font-mono text-[20px] lg:text-[30px] h-[50px] flex p-2">
        Press Enter <p className="animate-pulse">_</p>
      </button>
    </div>
  );
};

export default LoadingButton;
