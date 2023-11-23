import React from "react";

const LoadingButton = () => {
  return (
    <div className="flex-3  h-[540px] w-[650px] lg:w-[780px] lg:h-[600px] outline-none border-none overflow-hidden screen rounded-[4rem] flex items-center justify-center bg-[rgb(113,63,18,0.1)]">
      <button className="text-white  font-mono text-[20px] lg:text-[30px] h-[50px] flex p-2">
        Click to Enter <p className="animate-pulse">_</p>
      </button>
    </div>
  );
};

export default LoadingButton;
