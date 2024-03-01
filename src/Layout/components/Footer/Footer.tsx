import style from "./style.module.scss";
import logo from "../img/fontisto_tripadvisor.png";
import whatsApp from "../img/whatsapp.png";
import facebook from "../img/facebook.png";
import insta from "../img/instagram.png";

const Footer = () => {
  return (
    <>
      <footer className={style.header}>
        <article className={style.header_left}>
          <h2>Kyrgyz Traces</h2>
          <p>
            We are proudly the Best Inside Travel DMCs & Tour Operators in each
            destination where you travel to, our. Operat... <b>Read more</b>
          </p>
        </article>
        <article className={style.header_middle}>
          <h2>CONTACT US</h2>
          <p>
            <b>Email: </b>
            experts@kyrgyzriders.kg
          </p>
          <p>
            <b>Hotline: </b>
            +996 (555) 55-55-55
          </p>
          <p>
            <b>Contact form: </b>
            Send us a message{" "}
          </p>
        </article>
        <article className={style.header_right}>
          <h2>Follow us</h2>
          <section className={style.header_right__logos}>
            <img src={logo} alt="" />
            <img src={whatsApp} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
          </section>
        </article>
      </footer>
      <hr />
      <footer className={style.footer}>
        <p>@ 2023 Kyrgyz Riders. All rights reserved</p>
        <p>Design by @SolidDevs</p>
      </footer>
    </>
  );
};

export default Footer;
