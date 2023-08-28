const Menu = ({ open, changeSection }) => {
  return (
    <section
      className={`${
        !open ? "hidden" : ""
      } fixed z-10 w-[8rem] border-none top-5 hidden md:flex md:left-[75vw] lg:left-[80vw] xl:left-[89vw] justify-between `}
    >
      <button className="button" onClick={() => changeSection(0)}>
        1
      </button>

      <button className="button" onClick={() => changeSection(1)}>
        2
      </button>
      <button className="button" onClick={() => changeSection(2)}>
        3
      </button>
    </section>
  );
};

export default Menu;
