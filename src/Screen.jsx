const Screen = () => {
  return (
    <section
      className="md:w-[80vw] md:h-[60vh] lg:w-[65vw] lg:h-[60vh] xl:w-[65vw] xl:h-[85vh]   absolute md:top-[22vh] md:left-[12vw] lg:left-[22vw] xl:top-[11vh] xl:left-[6vw] outline-none border-none overflow-hidden screen  rounded-lg md:rounded-[3rem]"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <iframe overflow="scroll" src="https://3-d-portfolio-pi.vercel.app/" />
    </section>
  );
};

export default Screen;
