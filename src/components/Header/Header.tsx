import style from "./style.module.scss";
import search from "../img/searchIcon.svg";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../../constants/Header";
import burger from "../img/burger.svg";
import owl from "../img/sova.svg";
import whatsApp from "../img/whatsup.svg";
import facebook from "../img/facebookMobile.svg";
import insta from "../img/InstaMobile.svg";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

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

  const memoBurger = useMemo(() => {
    return (
      <div className={`${style.burger} ${open ? style.burgerActive : ""}`}>
        <section
          onClick={(e) => e.stopPropagation()}
          className={style.burger_header}
        >
          <div className={style.burger_header__links}>
            {memoLinks}
            <a className={style.email} href="">
              experts@kyrgyztraces.kg
            </a>
          </div>
          <div className={style.burger_footer}>
            <p>Follow us</p>
            <hr />
            <div className={style.burger__logos}>
              <img src={owl} alt="Owl" />
              <img src={whatsApp} alt="whatsApp" />
              <img src={facebook} alt="Facebook" />
              <img src={insta} alt="Instagram" />
            </div>
          </div>
        </section>
      </div>
    );
  }, []);

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
        <div className={style.header_right}>
          <input placeholder="Search tour" type="text" />
          <img src={search} alt="search icon" />
        </div>
        <img
          src={burger}
          onClick={handleToggleMenu}
          className={style.burgerImg}
          alt=""
        />
        {open && memoBurger}
      </header>
    </>
  );
};

export default Header;
