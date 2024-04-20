import style from "./style.module.scss"; 
import search from "../img/searchIcon.svg"; 
import {  useMemo, useState } from "react"; 
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
  const [burgerOpen, setBurgerOpen] = useState(false) 
 
  const handleClickBurger = () => { 
    setOpen(!open) 
    setBurgerOpen(true) 
  } 
 
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
      <div 
        className={open ? style.burgerActive : style.burgerNotActive} 
        onClick={handleClickBurger} 
      > 
        <section 
          className={style.burger_main} 
          onClick={(e) => e.stopPropagation()} 
        > 
          <div className={style.burger_main__links}> 
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
            <hr /> 
          </div> 
        </section> 
      </div> 
    ); 
  }, [open]); 
 
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
          onClick={handleClickBurger} 
          className={style.burgerImg} 
          alt="burger menu" 
        /> 
        {burgerOpen && memoBurger} 
      </header> 
    </> 
  ); 
}; 
 
export default Header;