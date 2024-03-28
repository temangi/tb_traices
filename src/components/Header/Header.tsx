import style from "./style.module.scss";
import search from "../img/searchIcon.svg";
// import button from "../img/menu_10765904.png"
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  interface Link {
    link: string;
    href: string;
  }

  const location = useLocation();

  const links: Link[] = [
    { link: "Home", href: "/" },
    { link: "Tours", href: "/Tours" },
    { link: "Destinations", href: "/Destinations" },
    { link: "About us", href: "/AboutUs" },
    { link: "Share tours", href: "/ShareTours" },
  ];

  const memoLinks = useMemo(() => {
    return links.map((a, id) => {
      return (
        <Link
          className={
            location.pathname === a.href
              ? style.active_select__a
              : style.header_links__a
          }
          key={id}
          to={a.href}
        >
          {a.link}
        </Link>
      );
    });
  }, [links]);

  return (
    <>
      <header className={style.header}>
        <div className={style.header_left}>
          <a className={style.header_left__a} href="/">
            Kyrgyz Traces
          </a>
          <hr />
          <section className={style.header__links}>{memoLinks}</section>
        </div>
        {/* <img className={style.header_right__button} src={button} alt="" /> */}
        <div className={style.header_right}>
          <input placeholder="Search tour" type="text" />
          <img src={search} alt="search icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
