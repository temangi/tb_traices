import style from "./style.module.scss";
import search from "../img/searchIcon.svg";

const Header = () => {
  interface Link {
    link: string;
    href: string;
  }

  const links: Link[] = [
    { link: "Home", href: "/" },
    { link: "Tours", href: "" },
    { link: "Destinations", href: "" },
    { link: "About us", href: "" },
    { link: "Share tours", href: "" },
  ];

  return (
    <>
      <header className={style.header}>
        <div className={style.header_left}>
          <h3>Kyrgyz Traces</h3>
          <hr />
          <section className={style.header_links}>
            {links.map((a, id) => {
              return (
                <a key={id} href={a.href}>
                  {a.link}
                </a>
              );
            })}
          </section>
        </div>
        <div className={style.header_right}>
          <input placeholder="Search tour" type="text" />
          <img src={search} alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
