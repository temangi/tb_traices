import style from "./style.module.scss";
import search from "../img/searchIcon.svg";
import { useMemo } from "react";

const Header = () => {
  interface Link {
    link: string;
    href: string;
  }

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
        <a key={id} href={a.href}>
          {a.link}
        </a>
      );
    });
  }, [links]);

  return (
    <>
      <header className={style.header}>
        <div className={style.header_left}>
          <a href="/">Kyrgyz Traces</a>
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
