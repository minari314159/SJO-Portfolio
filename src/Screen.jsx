const Screen = () => {
  return (
    <section
      className="h-[600px] w-[770px] outline-none border-none overflow-hidden screen "
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <iframe overflow="scroll" src="https://3-d-portfolio-pi.vercel.app/" />
    </section>
  );
};

export default Screen;
