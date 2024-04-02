import style from "./style.module.scss";
import search from "../img/searchIcon.svg";
import button from "../img/menu_10765904.png"
import logo from "../img/fontisto.svg";
import whatsApp from "../img/whatsapp.svg";
import facebook from "../img/facebook.svg";
import insta from "../img/insta.svg";
import { useMemo, useState } from "react";
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

  const menuLinks = useMemo(() => {
    return links.map((a, id) => {
      return (
        <Link
          className={
            location.pathname === a.href
              ? style.menu_link__active
              : style.menu_link
          }
          key={id}
          to={a.href}
        >
          {a.link}
        </Link>
      )
    })
  }, [links])


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <button onClick={toggleMenu} className={style.header_menu__button} >
          <img src={button} alt="" />
        </button>
        {isMenuOpen && (
          <div className={style.header_menu__links}>
            {menuLinks}
            <p>  experts@kyrgyzriders.kg</p>
            <div className={style.header_menu__footer}>
              <p>Follow us</p>
              <hr />
              <div className={style.header_menu__logos}>
                <img src={logo} alt="owl" />
                <img src={whatsApp} alt="WhatsApp" />
                <img src={facebook} alt="Facebook" />
                <img src={insta} alt="Instagram" />
              </div>
              <hr />
            </div>
          </div>
        )}
        <div className={style.header_right}>
          <input placeholder="Search tour" type="text" />
          <img src={search} alt="search icon" />
        </div>
      </header>
    </>
  );
};

export default Header;
