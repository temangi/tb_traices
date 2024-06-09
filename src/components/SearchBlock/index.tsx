import style from "./style.module.scss";
import logo from "../img/TourArrow.svg";
import { useMemo } from "react";
import FilterCard from "./Filter/index";
import { FilterCards } from "../../constants/TourClass";

const SearchBlock = () => {
  const modal = useMemo(() => {
    return FilterCards.map((item) => {
      return <FilterCard {...item} key={item.id} />;
    });
  }, []);

  return (
    <main className={style.main}>
      <section className={style.main_header}>
        <img src={logo} alt="" />
        <h1>Find your tour</h1>
      </section>
      <hr />
      <section className={style.main_footer}>
        {modal} <button>Search</button>
      </section>
    </main>
  );
};

export default SearchBlock;
