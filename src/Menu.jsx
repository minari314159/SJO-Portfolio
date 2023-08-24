const Menu = ({ changeSection }) => {
  return (
    <section className="pageChange">
      <button className="button" onClick={() => changeSection(0)}>
        1
      </button>

      <button className="button" onClick={() => changeSection(1)}>
        2
      </button>
      <button className="button" onClick={() => changeSection(3)}>
        Portfolio
      </button>
    </section>
  );
};

export default Menu;
