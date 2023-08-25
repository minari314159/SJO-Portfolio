const Screen = () => {
  return (
    <section
      className="h-[650px] w-[425px] md:h-[530px] md:w-[620px] lg:h-[680px] lg:w-[790px] xl:h-[680px] xl:w-[850px] outline-none border-none overflow-hidden screen bg-yellow-950"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <iframe overflow="scroll" src="https://3-d-portfolio-pi.vercel.app/" />
    </section>
  );
};

export default Screen;
