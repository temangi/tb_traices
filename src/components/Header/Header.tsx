import style from "./style.module.scss";
import search from "../img/searchIcon.svg";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  interface Link {
    link: string;
    href: string;
  }

  const [select, setSelect] = useState<string>("all");
  const location = useLocation()
  
  const links: Link[] = [
    { link: "Home", href: "/" },
    { link: "Tours", href: "/Tours" },
    { link: "Destinations", href: "/Destinations" },
    { link: "About us", href: "/AboutUs" },
    { link: "Share tours", href: "/ShareTours" },
  ];
  
  const clickSelect = (link: string) => {
    setSelect(link);
  };

  useEffect(() => {
    console.log("select changed:", select);
  }, [select]);

  const memoLinks = useMemo(() => {
    return links.map((a, id) => {
      return (
        <Link
          onClick={() => clickSelect(a.link)}
          className={
            location.pathname === a.href ? style.active_select__a : style.header_links__a
          }
          key={id}
          to={a.href}
        >
          {a.link}
        </Link>
      );
    });
  }, [links, select]);

  return (
    <>
      <header className={style.header}>
        <div className={style.header_left}>
          <p>Kyrgyz Traces</p>
          <hr />
          <section className={style.header__links}>{memoLinks}</section>
        </div>
        <div className={style.header_right}>
          <input placeholder="Search tour" type="text" />
          <img src={search} alt="search icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
