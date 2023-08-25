const Menu = ({ changeSection }) => {
  return (
    <section className=" fixed z-10 w-[11rem] border-none top-5 hidden md:flex md:left-[75vw] lg:left-[80vw] xl:left-[85vw] justify-between">
      <button className="button" onClick={() => changeSection(0)}>
        1
      </button>

      <button className="button" onClick={() => changeSection(1)}>
        2
      </button>
      <button className="button" onClick={() => changeSection(2)}>
        Portfolio
      </button>
    </section>
  );
};

export default Menu;
