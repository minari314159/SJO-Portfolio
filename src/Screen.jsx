const Screen = () => {
  return (
    <section
      className="screen"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <iframe overflow="scroll" src="https://3-d-portfolio-pi.vercel.app/" />
    </section>
  );
};

export default Screen;
